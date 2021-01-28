# Summarizer Command-Line Interface Tool

<p align="center"><img src="https://github.com/ishubham21/summarizer-cli-tool/blob/master/imgs/icon.png"></p>

## About this CLI tool

Imagine of a situation where you have tons and tons of text to read and a very small time frame given. What you'd expect for? 
Probably for someone who can help you with summarizing the text?

Well, here's a tool for you. **Summarizer CLI-Tool** is an interative command-line tool which takes a file containing exhaustive text and prints a summarized result containing the basic crux of the original text in a new file of the desired name using text-analysis and Natural Language Processing (NLP).

## Installation

* Check if node is installed in your system
```
node --version
```

* Run the following command in your terminal
```
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

**Note** - You should have an input file ready but you aren't required to create an output file. The output file will automatically be created with the name you've passed or will be overwritten.