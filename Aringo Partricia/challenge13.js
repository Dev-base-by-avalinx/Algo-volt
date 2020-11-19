//repeating letters.
function doubleChar(str) {
	return str.split('').map(func=> func.repeat(2)).join('')
}
doubleChar('hello')