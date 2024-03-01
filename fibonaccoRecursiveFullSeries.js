//[0,1,1,2,3,5,8,13,21,34]
// 0 1 2 3 4 5 6 7   8  9
function fibonacchi(n){
    if(n == 0){
        return [0];
    }
    else if( n == 1){
        return [0,1];
    }
    else{
        //find the nth element of the array
        var fibo = fibonacchi(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

console.log(fibonacchi(10));