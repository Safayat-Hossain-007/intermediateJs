function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var senior = [156,288,12];
for(var i=0;i<senior.length;i++){
    console.log(inchToFeet(senior[i]));
}
