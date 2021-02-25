# Summarizer Command-Line Interface Tool

<p align="center"><img src="https://github.com/ishubham21/summarizer-cli-tool/blob/master/imgs/icon.png"></p>

## About this CLI tool

Imagine a situation where you have tons and tons of text to read and a very small time frame given. What you'd expect for? 
Probably for someone who can help you with summarizing the text?

Well, here's a tool for you. **Summarizer CLI-Tool** is an interactive command-line tool which takes a file containing exhaustive text and prints a summarized result containing the basic crux of the original text in a new file of the desired name using text-analysis and Natural Language Processing (NLP).

## Installation

* Clone this repository 
```
git clone https://github.com/ishubham21/summarizer-cli-tool.git
```

* Check if the node is installed in your system
```
node --version
```

* cd into the root folder (i.e. where the package.json file is located) & install the required dependencies
```
npm install
```

* Check if the package is installed
```
summarizer --version
```

  or

```
summarizer summarize --version
```

This should print **1.0.0** in your terminal

* If this doesn't work, stop here and cd into the directory where you downloaded this package, and run the following command

```
npm --force link
```


* Print help (if needed)
```
summarizer summarize --help
```

* Making the package work
```
summarizer summarize --i=<path to the text file to be processed> --o=<path and name of the output file to be created>
```

For e.g.
```
summarizer summarize --i=input.txt --o=output.txt
```

### Alias (You can use any one of them)

-i = -input

-o = -output

## Important instructions
* You should have an input file ready but you aren't required to create an output file. The output file will automatically be created with the name you've passed or will be overwritten.

## Languages supported

You can provide input in the following languages

* English
* Dutch
* French
* German
* Italian
* Portuguese
* Spanish
* Russian
* Chinese
* Japanese
* Korean
* Arabic
* Danish
* Swedish
* Romanian
* Hungarian
* Finnish
* Norwegian
* Other / Multi-language

## Result

<p align="center"><img src="https://github.com/ishubham21/summarizer-cli-tool/blob/master/imgs/result.png"></p>

## I'm looking for help with - 

* Error handling in this package
* Processing the command-line arguments more precisely
* Writing better help documents in CLI.
* Help in making the documentation better and more user-friendly