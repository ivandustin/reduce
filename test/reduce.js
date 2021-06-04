const assert   = require('assert')
const reduce   = require('../src/reduce')
const collatia = require('collatia')

describe('reduce', function() {
    it('is correct', function() {
        let manuscripts = [
            ['A', 'B', 'C', 'D', 'E', '',  ''],
            ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        ]
        let selection   = [
            [ ['A'], ['B'], ['C'], ['D', 'DDD'],                       ['E'], [''],  ['']  ],
            [ ['A'], ['B'], ['C'], ['D', collatia.overline.add('DD')], ['E'], [''],  ['']  ],
            [ ['A'], ['B'], ['C'], ['D'],                              [''],  ['F'], ['G'] ],
            [ ['A'], ['B'], [''],  ['D'],                              ['E'], [''],  ['']  ],
        ]
        let expected = ['A', 'B', 'C', 'DDD', 'E', '', '']
        let actual   = reduce(selection, manuscripts)
        assert.deepEqual(actual, expected)
    })
    it('is correct', function() {
        let manuscripts = [
            ['A', 'B', 'C', 'D', 'E', '',  ''],
            ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        ]
        let selection   = [
            [ ['A'], ['B'], ['C'], ['D', 'DDD'],                       ['E'], [''],  ['']  ],
            [ ['A'], ['B'], ['C'], ['D', collatia.overline.add('DD')], ['E'], [''],  ['']  ],
            [ ['A'], ['B'], ['C'], ['D'],                              [''],  ['F'], ['G'] ],
            [ ['A'], ['B'], [''],  ['D'],                              ['E'], [''],  ['']  ],
        ]
        let expected = ['A', 'B', 'C', 'D', '', 'F', 'G']
        let actual   = reduce(selection, manuscripts)
        assert.deepEqual(actual, expected)
    })
})
