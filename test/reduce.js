const assert   = require('assert')
const collatia = require('collatia')
const reduce   = require('../src/reduce')

describe('reduce', function() {
    it('is correct', function() {
        let input = [
            ['A', 'B', '', ''],
            ['A', 'B', '', ''],
            ['A', 'B', 'C', 'D'],
        ]
        let expected = ['A', 'B', '', '']
        let output   = reduce(input)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input = [
            ['A', 'B', '', ''],
            ['A', 'B', '', ''],
            ['A', 'B', 'C', 'D'],
            ['A', 'B', 'C', ''],
        ]
        let expected = ['A', 'B', 'C', 'D']
        let output   = reduce(input)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input = [
            ['A', 'B', '', ''],
            ['A', 'B', '', ''],
            ['A', 'B', 'C', 'D'],
            ['A', 'B', 'C', 'DD'],
        ]
        let expected = ['A', 'B', 'C', 'DD']
        let output   = reduce(input)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input = [
            ['A', 'B', '', ''],
            ['A', 'B', '', ''],
            ['A', 'B', 'C', 'D'],
            ['A', 'B', 'C', collatia.overline.add('D')],
        ]
        let expected = ['A', 'B', 'C', 'D']
        let output   = reduce(input)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input = [
            ['A', '', '', '', ''],
            ['A', 'B', '', '', ''],
            ['A', '', '', 'B', 'C'],
        ]
        let expected = ['A', '', '', 'B', 'C']
        let output   = reduce(input)
        assert.deepEqual(output, expected)
    })
})
