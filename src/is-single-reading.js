const identity = require('./identity')

function is_single_reading(selection, manuscripts) {
    selection   = selection.filter(filter)
    manuscripts = manuscripts.filter(filter)
    return selection.length == 0 && manuscripts.length == 1
}

function filter(verse) {
    return verse.filter(identity).length > 0
}

module.exports = is_single_reading
