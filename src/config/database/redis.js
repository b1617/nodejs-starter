const redis = require('redis');

let client = null;

function start() {
    client = redis.createClient()
    client.on('error', (error) => {
        console.log(error);
    });
}

function getCache(key) {
    return new Promise((resolve, reject) => {
        client.get(key, (err, values) => {
            if (err) {
                reject(err);
            }
            resolve(values);
        });
    });
}

function setCache(key, value) {
    client.setex(key, 300, value);
}


module.exports = {
    start,
    getCache,
    setCache
};
