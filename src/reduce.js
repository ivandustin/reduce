const identity        = require('./identity')
const max             = require('./max')
const characters      = require('./characters')
const cluster         = require('./cluster')
const minimum_witness = 2

function reduce(selection, manuscripts) {
    let verses   = selection
    let clusters = cluster(verses)
    let filtered = clusters.filter(cluster => cluster.length >= minimum_witness)
    clusters     = filtered.length ? filtered : clusters
    verses       = clusters.flat()
    let scores   = verses.map(verse => verse.filter(identity).length)
    verses       = max(verses, scores)
    scores       = verses.map(verse => verse.map(characters).reduce(sum, 0))
    verses       = max(verses, scores)
    return first(verses)
}

function sum(a, b) {
    return a + b
}

function first(array) {
    return array[0]
}

module.exports = reduce
