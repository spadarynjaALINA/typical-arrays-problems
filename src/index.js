
exports.min = function min(array) {
    if (!Array.isArray(array) || !array.length ) {
        return 0;
    }
       
    else {
        return Math.min(... array);
    }
  
}


exports.max = function max(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    }
    else {
        return Math.max.apply(null, array);
    }
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || !array.length ) {
        return 0;
    }
    return result = array.reduce((sum, current) => sum + current, 0) / array.length;
    
   
}
