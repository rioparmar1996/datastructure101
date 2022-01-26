//Maximum SubArray

var maxSubArray = function (nums) {
	let sum = 0;
	let max = nums[0];
	for (let i = 0; i < nums.length; i++) {
		sum = sum + nums[i];
		if (max < sum) {
			max = sum;
		}
		if (sum < 0) {
			sum = 0;
		}
	}
	return max;
};

let array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let array2 = [1];
let array3 = [5, 4, -1, 7, 8];

console.log("Array 1:", maxSubArray(array1));
console.log("Array 2:", maxSubArray(array2));
console.log("Array 3:", maxSubArray(array3));
