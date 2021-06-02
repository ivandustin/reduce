const assert   = require('assert')
const reduce   = require('../src/reduce')
const collatia = require('collatia')

describe('reduce', function() {
    it('is correct', function() {
        let selection = [
            [
                ['A'],
                ['B'],
                [''],
                ['A', 'AB', collatia.overline.add('ABC')],
                ['C']
            ],
            [
                ['A'],
                ['B'],
                [''],
                ['A', 'AB', 'ABC'],
                ['CD'],
            ],
            [
                ['A'],
                ['B'],
                [''],
                ['A', 'AB', 'ABC'],
                [''],
            ]
        ]
        let expected = [
            'A',
            'B',
            '',
            'ABC',
            'CD'
        ]
        let actual = reduce(selection)
        assert.deepEqual(actual, expected)
    })
})
