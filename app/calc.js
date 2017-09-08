exports.equilize = function(people, data){
    var result = 0;
    if(people<2){
        return result;
    }
        
    dataTotal = 0;
    data.forEach(function(item) {
        dataTotal = dataTotal + item;
    }, this);

    result = ((dataTotal/people) * (people-1));
    return result;
}