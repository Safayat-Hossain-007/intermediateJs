function isPrime(n){
    for(var i = 2; i<n;i++){
        if(n % i == 0){
            return "Not a prime number.";
        }
    }
    return "Prime Number.";
}
console.log(isPrime(59));