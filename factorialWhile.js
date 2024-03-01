function factorial(number){
    var fact=1;
    var i = 1;
    while(i<=number){
        fact =fact*i;
        // console.log(i,fact);
        i++;
    }
    return fact;
}
console.log(factorial(5));
