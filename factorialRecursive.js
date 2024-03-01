function factorial(n){
    
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
    
}
var r =factorial(5);
console.log(r);