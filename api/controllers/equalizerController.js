'use strict';

exports.equalize = function (req, res, next) {
    if (isEmptyObject(req.body)) {
        res.status(400);
        return res.send('no data sent');
    }
    calculate(req.body, function (err, result) {
        if (err) {
            res.status(400);
            return res.send(err);
        }

        res.json(result);
    });
};

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

function calculate(data, callback) {
    var err;
    var peopleTotal = [];
    for (var item of data) {
        peopleTotal.push(item.people);
    }

    var sumPeople = peopleTotal.reduce(function (first, second) { return first + second; }, 0);
    if (sumPeople > 1000) {
        err = "number of students cannot be over 1000";
        return callback(err, 0);
    }

    var amountRows = [];
    for (var item of data) {
        amountRows.push(item.rows);
    }
    var transactionTotals = [];
    for (var transaction of amountRows) {
        var sumTransaction = transaction.reduce(function (first, second) { return first + second; }, 0);
        if (sumTransaction > 1000) {
            err = "amount spent by a single student cannot be more than 10000";
            return callback(err, 0);
        }
         transactionTotals.push(sumTransaction);
    }

    // if (data.people === undefined || data.rows === undefined || data.rows.length < 1) {
    //       err={message: "invalid entries"};
    //    return callback(err, 0);
    // }

    // var result = 0;
    // if (data.people < 2) {
    //     return callback(err, result);
    // }

    // var dataTotal = 0;
    // if (data.rows.length)
    //     data.rows.forEach(function (item) {
    //         dataTotal = dataTotal + item;
    //     });

    // result = ((dataTotal / data.people) * (data.people - 1));
    // callback(err, result);
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