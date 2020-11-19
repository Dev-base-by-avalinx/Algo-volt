//Condition that returns true if the sum of two numbers is lessthan 100
function lessThan100(num1 ,num2){
    var total = num1+num2;
    if (total<100){
        return true;
    }
    else{
        return false;
    }
}
console.log(lessThan100(23,548))