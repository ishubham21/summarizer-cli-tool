#!/usr/bin/env node

//requiring file system
const fs = require('fs')

function getSummary(text, outputFile) {

    //requiring monkeylearn
    const MonkeyLearn = require('monkeylearn')

    //setting up API key
    const ml = new MonkeyLearn('11526c753b591c9a747b2bd2ec51d87bd69c406a')
    let model_id = 'ex_94WD2XxD'

    //passing the text recieved from input file
    let data = [`"${text}"`]

    //performing extraction i.e. summarization
    ml.extractors.extract(model_id, data).then(res => {
        let summary = res.body[0].extractions[0].parsed_value
        fs.writeFileSync(`${outputFile}`, summary)
    })

    //printing the done message
    console.log(`Summarization completed! Check ${outputFile} for the results.`);
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
        describe: 'Summarizes large texts to small and precise texts',
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