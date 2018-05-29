var fs=require("fs");
//var debug = require('debug')('git-convert');


var json;
var myArray = [];

function readFile(fileName) {

    'use strict';
    fs.readFile(fileName, function (err, data) {
        //debug('read file called');
        if (err) {

        }
        else {
            //resolve(data);
            json = JSON.parse(data);
            for (var property in json) {
                if (json.hasOwnProperty(property)) {
                    myArray.push(new ArrayElement(property));
                }
            }
            // debug('displaying elements')
            console.log('export default ' + JSON.stringify(myArray, null, 4));
        }
        // });
    });
    //   });
}

readFile('git-user.json');

function ArrayElement(myProperty) {
    'use strict';
    this.id = myProperty.toString();
    this.label = myProperty.toString() + "-name";
    this.type = 'paragraph';
    this.sample = this.id + '-unknown';
}


module.export='git-convert';