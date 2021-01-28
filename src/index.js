#!/usr/bin/env node

//declaring the input and output files
var inputFile
var outputFile

//requiring file system
const fs = require('fs')

function handleFiles(inputFile, outputFile) {
    //reading from the input file provided by the user
    const textData = fs.readFileSync(`${inputFile}`, 'utf-8')
    console.log(textData);
}

function main() {

    //requiring yargs
    const yargs = require('yargs')
    
    // Create summarize command 
    yargs.command({
        command: 'summarize',
        describe: 'Summarizes large texts',
        builder: {
            i: {
                alias: 'input',
                describe: 'Input File',
                demandOption: true,  // Required 
                type: 'file' //specifying the type of argument
            },
            o: {
                alias: 'output',
                describe: 'Output File',
                demandOption: true,
                type: 'file'
            }
        },

        // Function for your command 
        handler(argv) {
            //passing values recieved from the user to the handle file function 
            handleFiles(argv.i, argv.o)
        }
    })
    
    yargs.parse() // To set above changes 
}