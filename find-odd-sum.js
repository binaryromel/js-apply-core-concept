function getSum(numbers){
    console.log(numbers);
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        // var index = i;
        sum = sum + numbers[i];
        console.log(i, '-', numbers[i], '-', sum);
    }
    
    console.log('the sum of this array is:', sum);
    return sum;
}

// var myNumbers = [25, 75, 65, 85, 35];
// getSum(myNumbers);

getSum([21, 32, 25, 44, 54, 75, 88, 92]);