const collatia = require('collatia')

function reduce(selection) {
    let entries = selection.map(flat).map(count)
    entries     = filter_max(entries, 'words')
    entries     = filter_max(entries, 'characters')
    return first(entries).verse
}

function count(verse) {
    let words      = verse.filter(identity).length
    let characters = verse.map(word => collatia.overline.remove(word)).map(word => word.length).reduce(sum, 0)
    return { words, characters, verse }
}

function sum(a, b) {
    return a + b
}

function filter_max(array, property) {
    let n   = array.map(object => object[property])
    let max = Math.max(...n)
    return array.filter(object => object[property] == max)
}

function first(array) {
    return array[0]
}

function identity(value) {
    return value
}

function flat(verse) {
    return verse.map(function(words) {
        return first(filter_max(words, 'length'))
    })
}

module.exports = reduce
