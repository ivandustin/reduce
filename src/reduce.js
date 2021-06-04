const collatia = require('collatia')

function reduce(selection) {
    let verses = selection.map(flat)
    let scores = verses.map(verse => score(verse, verses))
    verses     = max(verses, scores)
    scores     = verses.map(verse => verse.filter(identity).length)
    verses     = max(verses, scores)
    scores     = verses.map(verse => verse.map(characters).reduce(sum, 0))
    verses     = max(verses, scores)
    return first(verses)
}

function identity(value) {
    return value
}

function sum(a, b) {
    return a + b
}

function max(array, scores) {
    let max = Math.max(...scores)
    return array.filter((value, index)=> scores[index] == max)
}

function first(array) {
    return array[0]
}

function get_column(index, array) {
    return array.map(array => array[index])
}

function characters(word) {
    return collatia.overline.remove(word).length
}

function flat(verse) {
    return verse.map(function(words) {
        let scores = words.map(characters)
        return first(max(words, scores))
    })
}

function score(verse, verses) {
    return verse.map(function(word, index) {
        if (word) {
            let column = get_column(index, verses).filter(identity)
            if (column.length > 1)
                return 1
        }
        return 0
    }).reduce(sum, 0)
}

module.exports = reduce
