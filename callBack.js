function welcomeGuest(name,greetHandler){
    greetHandler(name);

}

function greetMorning(name){
    console.log('Good Morning'+" "+name);
}

function greetEvening(name){
    console.log('Good Evening'+" "+name);
}

function greetAfternoon(name){
    console.log('Good Afternoon'+" "+name);
}


const actorName = "Tom Hanks";
welcomeGuest(actorName,greetEvening);
welcomeGuest('Hero Alom',greetMorning);
welcomeGuest('Safayat Hossain',function(name){
    console.log('special Welcome'+" "+name);
})