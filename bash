#!/usr/bin/env node

var figlet = require('figlet');
 
figlet('Summarizer', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});