// mergeSort Pseudocode

// Break up the array into halves until you have arrays that are empty
// or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

function mergeArrays(arr1, arr2) {
	let result = [];
	let i = 0;
	let j = 0;
	if (arr1.length === 0) {
		result.push(...arr2);
	}
	if (arr2.length === 0) {
		result.push(...arr1);
	}
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return mergeArrays(left, right);
}

console.log(mergeSort([ 10, 24, 76, 73, 72 ]));
console.log(mergeSort([ 10, 24, 76, 73 ]));
