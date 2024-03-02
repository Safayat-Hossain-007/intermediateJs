function arraySum(num){
    var sum = 0;
    for(var i=0;i<num.length;i++){
        var elements = num[i];
        sum = sum + elements;
    }
    return sum;
}
var num = [1,2,5,7];
console.log(arraySum(num));