#!/usr/bin/env node

const globals = require('../globals.js')

function showHelp() {
    console.log(`Usage: bundle-js ./path/to/entryfile.js [-o ./path/to/outputfile] [-p]
       [--disable-beautify]

Options:
  -o, --out, --dest   Output file                                          [default: "./bundlejs/output.js"]
  -p, --print         Print the final bundled output to stdout
  --disable-beautify  Leave the concatenated files as-is (might be ugly!)
    `);
}

let argv = require('minimist')(process.argv.slice(2));

if (argv._.length < 1) {
    showHelp();
    console.log('Not enough non-option arguments: got 0, need at least 1');
    process.exit()
}

if (argv._[0] == 'help') {
    showHelp();
    process.exit()
}

let options = {}
options.entry = argv._[0]
options.dest = argv.o
options.print = argv.p
options.disablebeautify = argv['disable-beautify']

const bundle = require('../index.js')
bundle(options)
