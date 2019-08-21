var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

export function storeKey(key, value) {
    client.set(key, value, redis.print)
}

export function getKey(user, ret) {
    client.get(user, function (error, result) {
        if (result == null) {
            console.log('Key doesn\'t exist')
            ret(-1)
        }
        else if (error) {
            console.log(error);
            throw error;
        } else {
            console.log(`Fetched result ${result} for key ${user}`);
            ret(result)
        }
    });
}