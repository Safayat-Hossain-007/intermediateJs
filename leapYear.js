function leapyear(year){
    let result = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    return result;
    
}

let years = [2020, 2000, 1998,1995];
for(let i=0 ;i < years.length; i++){
    let x = leapyear(years[i]); 
    if(x == true){
        console.log("leap year");
    }
    else{
        console.log("!leap year");
    }
    
}
    