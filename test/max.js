const assert = require('assert')
const max    = require('../src/max')

describe('max', function() {
    it('is correct', function() {
        let input    = ['A', 'B', 'C']
        let scores   = [1, 2, 3]
        let expected = ['C']
        let output   = max(input, scores)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input    = ['A', 'B', 'C']
        let scores   = [1, 2, 2]
        let expected = ['B', 'C']
        let output   = max(input, scores)
        assert.deepEqual(output, expected)
    })
})
