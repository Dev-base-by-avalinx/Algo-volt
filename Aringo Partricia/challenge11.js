//Sorting numbers in ascending order.
function sortNumsAscending(arr) {
	if(arr === null){
		return [];
	}
	return arr.sort(function(a,b){
		return a-b;
	})
}
sortNumsAscending([2,3,4,6,7,8])