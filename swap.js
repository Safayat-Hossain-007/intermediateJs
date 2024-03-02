function swap(a,b){
    var temp = a;
    a=b;
    b=temp;
    console.log("After swap : a = "+a+" b = "+b);
}
swap(5,7);

//Another swapping process

function swap1(x,y){
    x = x+y;
    y = x-y;
    x = x-y;
    console.log("After swap : x = "+x+" y = "+y);
}
swap1(5,7);

// another way programming lang specific

function swap2(p,q){
    [p,q] = [q,p];
    console.log("After swap : p = "+p+" q = "+q);
}
swap2(5,7);