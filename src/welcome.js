#!/usr/bin/env node

//requiring figlet (a npm package) for ascii art
var figlet = require('figlet');

//printing the welcome text
figlet('Summarizer', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


