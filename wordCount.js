function wordCount(speech){
    var count = 0 ;
    for(var i=0; i<speech.length;i++){
        var char = speech[i];
        if(char == " " && speech[i-1] != " "){
            count++;
        }
    }
    count++;
    return count;
}
var speech ="I have  a dream."
console.log(wordCount(speech));