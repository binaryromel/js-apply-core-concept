function isLeapYear(year){
    var reminder = year % 2;
    if(reminder === 0){
        // console.log(year, 'is a leap year');
        return true;
    }
    else{
        // console.log(year, 'is not a leap year');
        return false;
    }
}

var myYear = isLeapYear(1963);
console.log('my year:', myYear);