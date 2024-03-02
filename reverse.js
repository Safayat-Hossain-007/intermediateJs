function reverseString(statement){
    var reverse = [];
    for(var i=0;i<statement.length;i++){
        var char = statement[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "hello alien bhai brother";
console.log(reverseString(statement));
