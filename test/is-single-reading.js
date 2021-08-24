const assert            = require('assert')
const is_single_reading = require('../src/is-single-reading')

describe('is single reading', function() {
    it('is correct', function() {
        let input = {
            manuscripts: [
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['A', 'B', 'C', '']
                },
                {
                    words: ['', '', '', '']
                }
            ],
            selection: [
                ['A', 'B', 'C', '']
            ]
        }
        let output   = is_single_reading(input.selection, input.manuscripts)
        let expected = false
        assert.equal(output, expected)
    })
    it('is correct', function() {
        let input = {
            manuscripts: [
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['A', 'B', 'C', '']
                },
                {
                    words: ['', '', '', '']
                }
            ],
            selection: [
                ['A', 'B', 'C', ''],
                ['', '', '', '']
            ]
        }
        let output   = is_single_reading(input.selection, input.manuscripts)
        let expected = false
        assert.equal(output, expected)
    })
    it('is correct', function() {
        let input = {
            manuscripts: [
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['A', 'B', 'C', '']
                },
                {
                    words: ['A', 'B', 'C', 'D']
                }
            ],
            selection: [
                ['A', 'B', 'C', ''],
                ['A', 'B', 'C', 'D']
            ]
        }
        let output   = is_single_reading(input.selection, input.manuscripts)
        let expected = false
        assert.equal(output, expected)
    })
    it('is correct', function() {
        let input = {
            manuscripts: [
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['A', 'B', 'C', '']
                },
                {
                    words: ['', '', '', '']
                }
            ],
            selection: [
                ['', '', '', '']
            ]
        }
        let output   = is_single_reading(input.selection, input.manuscripts)
        let expected = true
        assert.equal(output, expected)
    })
    it('is correct', function() {
        let input = {
            manuscripts: [
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['', '', '', '']
                }
            ],
            selection: [
                ['', '', '', '']
            ]
        }
        let output   = is_single_reading(input.selection, input.manuscripts)
        let expected = false
        assert.equal(output, expected)
    })
    it('is correct', function() {
        let input = {
            manuscripts: [
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['', '', '', '']
                },
                {
                    words: ['', '', '', '']
                }
            ],
            selection: [
                ['A', 'B', 'C', '']
            ]
        }
        let output   = is_single_reading(input.selection, input.manuscripts)
        let expected = false
        assert.equal(output, expected)
    })
    it('is correct', function() {
        let input = {
            manuscripts: [],
            selection: [
                ['A', 'B', 'C', '']
            ]
        }
        let output   = is_single_reading(input.selection, input.manuscripts)
        let expected = false
        assert.equal(output, expected)
    })
})
