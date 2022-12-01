function isEven(number){
    var reminder = number % 2;
    if(reminder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd');
        return false;
    }
}

var myNumber = isEven(3430);
console.log(myNumber);