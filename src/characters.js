const collatia = require('collatia')

function characters(word) {
    return collatia.overline.remove(word).length
}

module.exports = characters
