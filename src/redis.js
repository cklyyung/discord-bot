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

export function getKey(key, ret) {
    client.get(key, function (error, result) {
        if (result == null) {
            console.log('Key doesn\'t exist')
            ret(-1)
        }
        else if (error) {
            console.log(error);
            throw error;
        } else {
            console.log(`Fetched result ${result} for key ${key}`);
            ret(result)
        }
    })
}

export function addSetItem(setKey, value, ret) {
    client.sadd(setKey, value, function(error, result) {
        if (error) {
            console.log(error)
            throw error
        } else {
            console.log(`Set ${setKey} add ${value} : ${result}`)
            ret(result)
        }
    })
}

export function removeSetItem(setKey, value, ret) {
    client.srem(setKey, value, function(error, result) {
        if (error) {
            console.log(error)
            throw error
        } else {
            console.log(`Removing ${value} from ${setKey} : ${result}`)
            ret(result)
        }
    })
}

export function checkInSet(setKey, value, ret) {
    client.sismember(setKey, value, function(error, result) {
        if (error) {
            console.log(error)
            throw error
        } else {
            console.log(`${value} in ${setKey}: ${result}`);
            ret(result)
        }
    })
}

export function getSet(setKey, ret) {
    client.smembers(setKey, function(error, result) {
        if (error) {
            console.log(error)
            throw error
        } else {
            console.log(`Set ${setKey}: ${result}`);
            ret(result)
        }
    })
}