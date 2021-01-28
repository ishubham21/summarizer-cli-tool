#!/usr/bin/env node

//declaring the input and output files
var inputFile
var outputFile

//requiring file system
const fs = require('fs')

//requiring yargs
const yargs = require('yargs')

// Create summarize command 
yargs.command({
    command: 'summarize',
    describe: 'Summarizes large texts',
    builder: {
        i: {
            alias: 'input',
            describe: 'First Number',
            demandOption: true,  // Required 
            type: 'file' //specifying the type of argument
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
        handleFiles(argv.i, argv.o)
    }
})
yargs.parse() // To set above changes 


function handleFiles(inFile, outFile) {
    
}