function getFullName(firstName, lastName){
    console.log(arguments);
    var fullName='';
    for(let i=0;i<arguments.length;i++){
        var namePart = arguments[i];
        fullName = fullName +" "+ namePart;

    }
    return fullName;

}
const name = getFullName('Hanif', 'shongket', 'PariBahan');
console.log(name);