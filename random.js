var num =2.12459;
var result1 = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
console.log(result1,result2,result3);

//1 theke 200 er moddhe random number generate korbe
//50 diye gun korle 1 theke 50 er moddhe random number generate korbe
console.log("Generating the random number.");
for ( var i=0;i<6;i++){
    var dice = Math.random();
    console.log(Math.round(dice*6));
}
