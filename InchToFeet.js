function inchToFeet(inch){
    let feet = inch/12;
    return feet;
}
var senior = [156,288,12];
for(let i=0;i<senior.length;i++){
    console.log(inchToFeet(senior[i]));
}
