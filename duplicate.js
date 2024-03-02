function uniqueArray(name1){
    var unique = [];
    for(var i=0;i<name1.length;i++){
        var elements = name1[i];
        var index = unique.indexOf(elements);
        if( index == -1){
            unique.push(elements);
        }

    }
    return unique;
}
var name1 =[1,22,2,1,8,4,33,22,1,2,8,4];
console.log(uniqueArray(name1));