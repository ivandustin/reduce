const reduce = require('./reduce')

function reduce_entry(entry) {
    entry.data = entry.data.map(function(verse) {
        let manuscripts = verse.manuscripts.map(manuscript => manuscript.words)
        let reduction   = reduce(verse.selection, manuscripts)
        return Object.assign(verse, { reduction })
    })
    return entry
}

module.exports = reduce_entry
