// BIG O for binary search WORST CASE O(log n) <===awesome . best case o(1)
function binarySearch(arr, num) {
	let left = 0;
	let right = arr.length - 1;
	let middle = Math.floor((left + right) / 2);

	while (arr[middle] !== num && left <= right) {
		if (num < arr[middle]) {
			//if the given number to find is less than middle make my end point middle -1
			right = middle - 1;
			//we could make it middle but we know middle aint it chief
		} else {
			left = middle + 1;
			//if the given number is more than the middle we want to move our starting point up
		}
		middle = Math.floor((left + right) / 2); //get the average of the new nums
	}
	if (arr[middle] == num) {
		///// this is gonna check if we got the num given
		return middle; // answer
	}
	return -1;
}
