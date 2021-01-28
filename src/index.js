#!/usr/bin/env node

const yargs = require('yargs')

// Customize yargs version 
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'Summarize',
    describe: 'Summarizes large texts',
    builder: {
        i: {
            alias: 'input',
            describe: 'First Number',
            demandOption: true,  // Required 
            type: 'number'
        },
        o: {
            alias: 'output',
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        } 
    },

    // Function for your command 
    handler(argv) {
        
    }
})

yargs.parse() // To set above changes 