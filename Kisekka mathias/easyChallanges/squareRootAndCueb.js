//Function that calculates a square root of a number and returns its cube
function cubeSquareRoot(num) {
	var number = Math.sqrt(num);
	var numCubed = (number**3);
	return numCubed;
}
console.log(cubeSquareRoot(16))