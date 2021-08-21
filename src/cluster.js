const selectica = require('selectica')

function cluster(verses) {
    let bucket = copy(verses)
    let result = []
    while(bucket.length > 0) {
        let element = bucket.shift()
        let array   = get_same(element, bucket)
        array.unshift(element)
        result.push(array)
    }
    return result
}

function copy(array) {
    return array.slice()
}

function get_same(element, bucket) {
    let indices = bucket.map(function(target, index) {
        if (is_same(target, element))
            return index
        return -1
    }).filter(value => ~value)
    let result = bucket.filter(function(value, index) {
        return ~indices.indexOf(index)
    })
    indices.forEach(function(index) {
        bucket.splice(index, 1)
    })
    return result
}

function is_same(a, b) {
    return selectica.algorithm.same(a, b)
}

module.exports = cluster
