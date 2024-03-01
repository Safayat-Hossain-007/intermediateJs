fibo = [0,1];
var i =2;
while(i < 10){
    fibo[i] =fibo[i-1]+fibo[i-2];
    i++;
}
console.log(fibo);