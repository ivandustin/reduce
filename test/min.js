const assert = require('assert')
const min    = require('../src/min')

describe('min', function() {
    it('is correct', function() {
        let input    = ['A', 'B', 'C']
        let scores   = [1, 2, 3]
        let expected = ['A']
        let output   = min(input, scores)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input    = ['A', 'B', 'C']
        let scores   = [1, 1, 2]
        let expected = ['A', 'B']
        let output   = min(input, scores)
        assert.deepEqual(output, expected)
    })
})
