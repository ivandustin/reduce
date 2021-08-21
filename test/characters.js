const assert     = require('assert')
const collatia   = require('collatia')
const characters = require('../src/characters')

describe('characters', function() {
    it('is correct', function() {
        let input    = 'ABC'
        let expected = 3
        let output   = characters(input)
        assert.equal(output, expected)
    })
    it('is correct', function() {
        let input    = collatia.overline.add('ABC')
        let expected = 3
        let output   = characters(input)
        assert.equal(output, expected)
    })
})
