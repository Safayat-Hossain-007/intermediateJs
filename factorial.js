function factorial(n){
    var steps = n;
    let fact = 1;
    for( var i = 1;i <= steps; i++){
        fact=fact*i;  
        console.log("The factorial of "+i+" is "+fact);
    }
}
factorial(5);

