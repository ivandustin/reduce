#!/usr/bin/env node
const package  = require('./package.json')
const path     = require('path')
const fs       = require('fs')
const argparse = require('argparse')
const expand   = require('./src/expand')
const load     = require('./src/load')
const reduce   = require('./src/reduce-entry')
const save     = require('./src/save')

function main() {
    let args   = parse()
    let input  = expand(args.file)
    let output = mkdir(args.o)
    let result = input.map(load).map(reduce)
    result.forEach(entry => save(path.join(output, entry.filename), entry.data))
}

function parse() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('file',            { help: 'selection file as input', nargs: '+' })
    parser.add_argument('-o',              { help: 'output directory', metavar: 'OUTPUT', required: true })
    return parser.parse_args()
}

function mkdir(dir) {
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true })
    return dir
}

main()
