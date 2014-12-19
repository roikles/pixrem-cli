#!/usr/bin/env node

var program = require('commander');
var chalk = require('chalk');

program
    .version('1.0.0')
    .option('-i, --input [path]', 'relative path to the stylesheet to process')
    .option('-o, --output [path]', 'the destination to save')
    .option('-r, --rootvalue [rootvalue]', 'Rem root value e.g. 16px <optional> Default: 16px')
    .parse(process.argv);

/**
 * Error Handling io
 */

if(!program.input){
    console.log(chalk.red('Error: --input was missing an attribute. Use --help for additional info'));
    process.exit(1);
}

if(!program.output){
    console.log(chalk.red('Error: --output was missing an attribute. Use --help for additional info'));
    process.exit(1);
}

if(!program.rootvalue){
    program.rootvalue = '16px';
}

/**
 * Execute Pixrem
 */

 var fs = require('fs');
 var pixrem = require('pixrem');
 var css = fs.readFileSync(program.input, 'utf8');
 var processedCss = pixrem.process(css, '16px');

 fs.writeFile(program.output, processedCss, function (err) {
    if (err) {
        throw err;
    }

    console.log(chalk.green('Pixrem complete.'));
 });