'use strict';

exports.equalize = function (req, res, next) {
    // if(req.body){
    // var err= {success: false, message: "no data sent"}
    //  return res.send(err);
    // }
    calculate(req.body, function (err, result) {
        console.log(err);
         if (err) {
             return res.send(err);
         }
        // else{
        res.json(result);
        //}
    });
};

function calculate(data, callback) {
     var err;
    if (data.people === undefined || data.rows === undefined || data.rows.length < 1) {
          err={message: "invalid entries"};
       return callback(err, 0);
    }

    var result = 0;
    if (data.people < 2) {
        return callback(err, result);
    }

    var dataTotal = 0;
    if (data.rows.length)
        data.rows.forEach(function (item) {
            dataTotal = dataTotal + item;
        });

    result = ((dataTotal / data.people) * (data.people - 1));
    callback(err, result);
}

function readData(data) {
    // var rows = data.split('\n');
    // for(var i; i< rows.length;i++){
    //      if(typeof rows[i] !== "number" ){

    //     }
    //     if(typeof rows[i] === "number" ){

    //     }
    // }

    var processedData = {
        people: 3,
        values: [10, 20, 30],
        total: 40
    };
    return processedData;
}

// function isFloat(n) {
//     return n === +n && n !== (n | 0);
// }

// function isInteger(n) {
//     return n === +n && n === (n | 0);
// }