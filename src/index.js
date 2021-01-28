#!/usr/bin/env node

//requiring file system
const fs = require('fs')

function getSummary(text, outputFile) {
    const MonkeyLearn = require('monkeylearn')

    const ml = new MonkeyLearn('11526c753b591c9a747b2bd2ec51d87bd69c406a')
    let model_id = 'ex_94WD2XxD'
    let data = [`"${text}"`]
    ml.extractors.extract(model_id, data).then(res => {
        let summary = res.body[0].extractions[0].parsed_value
        fs.writeFileSync(`${outputFile}`, summary)
    })
}

function handleFiles(inputFile, outputFile) {
    //reading from the input file provided by the user
    const textData = fs.readFileSync(`${inputFile}`, 'utf-8')

    getSummary(textData, outputFile)
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

main()