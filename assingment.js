function feetToMile(feet){
    return feet*0.000189394;
}
console.log(Math.round(feetToMile(5280)));

function woodCalculator(chair,table,bed){
   var totalWood = (chair*1)+table*2+bed*3;
   return totalWood;
}
console.log(woodCalculator(0,2,3));

function brickCalculator(nFloor){
    if(nFloor<=10){
        var numberOfBricks1 = nFloor*15*1000;
        var totalBricks = numberOfBricks1;
        return totalBricks;

    }
    else if(nFloor<=20){
        
        var numberOfBricks1 = 10*15*1000;
        var numberOfBricks2 = (nFloor-10)*12*1000;
        var totalBricks = numberOfBricks1+numberOfBricks2;
        return totalBricks;

    }
    else{
        var numberOfBricks1 = 10*15*1000;
        var numberOfBricks2 = 10*12*1000;
        var numberOfBricks3 =(nFloor-20)*10*1000;
        var totalBricks = numberOfBricks1+numberOfBricks2+numberOfBricks3;
        return totalBricks;
    }

 }
 console.log(brickCalculator(11));

 