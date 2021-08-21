const assert  = require('assert')
const cluster = require('../src/cluster')

describe('cluster', function() {
    it('is correct', function() {
        let input = [
            ['A', 'B', 'C'],
        ]
        let expected = [
            [
                ['A', 'B', 'C'],
            ]
        ]
        let output = cluster(input)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input = [
            ['A', 'B', 'C'],
            ['A', 'B', 'C'],
        ]
        let expected = [
            [
                ['A', 'B', 'C'],
                ['A', 'B', 'C'],
            ]
        ]
        let output = cluster(input)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input = [
            ['A', 'B', 'C', '', ''],
            ['A', 'B', 'C', '', ''],
            ['A', 'B', 'C', 'D', 'E'],
        ]
        let expected = [
            [
                ['A', 'B', 'C', '', ''],
                ['A', 'B', 'C', '', ''],
            ],
            [
                ['A', 'B', 'C', 'D', 'E'],
            ]
        ]
        let output = cluster(input)
        assert.deepEqual(output, expected)
    })
    it('is correct', function() {
        let input = [
            ['A', 'B', 'C', '', ''],
            ['A', 'B', 'C', '', ''],
            ['A', 'B', 'C', 'D', 'E'],
            ['A', 'B', 'C', 'D', 'E'],
        ]
        let expected = [
            [
                ['A', 'B', 'C', '', ''],
                ['A', 'B', 'C', '', ''],
            ],
            [
                ['A', 'B', 'C', 'D', 'E'],
                ['A', 'B', 'C', 'D', 'E'],
            ]
        ]
        let output = cluster(input)
        assert.deepEqual(output, expected)
    })
})
