const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");
const keys = require("../configs/keys");

const client = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

console.log("Connection to redis succeeded");
//const client = redis.createClient(keys.REDIS_URI);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options = { time: 60 }) {
  this.useCache = true;
  this.time = options.time;
  this.hashKey = JSON.stringify(options.key || this.mongooseCollection.movies); //MODIFIQUE
  return this;
};

mongoose.Query.prototype.exec = async function() {
  if (!this.useCache) {
    return await exec.apply(this, arguments);
  }

  const key = JSON.stringify({
    ...this.getQuery(),
    collection: this.mongooseCollection.movies //MODIFIQUE
  });

  const cacheValue = await client.hget(this.hashKey, key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    console.log("Response from Redis");
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(doc);
  }/*else{
    console.log("Nothinggggg"); //MODIFIQUE
  }*/

  const result = await exec.apply(this, arguments);
  console.log(this.time);
  client.hset(this.hashKey, key, JSON.stringify(result));
  client.expire(this.hashKey, this.time);
  console.log("Response from MongoDB");
  return result;

};
module.exports = {
  clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  }
};