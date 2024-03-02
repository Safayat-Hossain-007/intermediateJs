function arrayMaxElement(marks){
    var max = marks[0];
    for(var i =0;i<marks.length;i++){
        var element = marks[i];
        if(element>max){
            max = element;
        }
    }
    return max;
}
var marks =[55,66,88,33,66,37,88];
console.log(arrayMaxElement(marks));