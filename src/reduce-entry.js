const reduce = require('./reduce')

function reduce_entry(entry) {
    entry.data = entry.data.map(function(verse) {
        let reduction = reduce(verse.selection)
        return Object.assign(verse, { reduction })
    })
    return entry
}

module.exports = reduce_entry
