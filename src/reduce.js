const assert   = require('assert')
const collatia = require('collatia')
const empty    = ''

function reduce(entry) {
    entry.data = entry.data.map(function(verse) {
        let { selection } = verse
        let verses     = longest(selection.map(flat))
        let characters = verses.map(extract)
        let value      = first(longest(characters))
        let index      = characters.indexOf(value)
        let reduction  = verses[index]
        return Object.assign(verse, { reduction })
    })
    return entry
}

function longest(array) {
    let lengths = array.map(value => value.length)
    let max     = Math.max(...lengths)
    return array.filter(value => value.length == max)
}

function first(array) {
    return array[0]
}

function identity(value) {
    return value
}

function flat(array) {
    return array.map(function(array) {
        return first(longest(array))
    }).filter(identity)
}

function extract(verse) {
    return verse.map(word => collatia.overline.remove(word)).join(empty)
}

module.exports = reduce
