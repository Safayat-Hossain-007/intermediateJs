function max(a,b,c){
    if(a>b){
        if(a>c){
            console.log("a is bigger.");
        }
        else{
            console.log("c is bigger");
        }
    }
    else{
        if(b>c){
            console.log("b is bigger");
        }
        else{
            console.log("c is bigger");
        }
    }
}
max(10,6,3);

//another way to find the max
//Onek gula value thika max value ber korte pare
function max2(a,b,c){
    var r =Math.max(a,b,c);
    return r;
}
console.log(max2(57,7,2));
