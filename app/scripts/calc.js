'use strict';
module.exports.equalize= function(people, data) {
    var result = 0;
    if (people < 2) {
        return result;
    }

    var dataTotal = 0;
    data.forEach(function (item) {
        dataTotal = dataTotal + item;
    });

    result = ((dataTotal / people) * (people - 1));
    return {result: result};
}

function readData(data) {
var rows = data.split('\n');
for(var i; i< rows.length;i++){
     if(typeof rows[i] !== "number" ){
        
    }
    if(typeof rows[i] === "number" ){

    }
}

var processedData = {
    people: 3,
    values: [10,20,30],
    total: 40
};
return processedData;
}

function isFloat(n) {
    return n === +n && n !== (n | 0);
}

function isInteger(n) {
    return n === +n && n === (n | 0);
}