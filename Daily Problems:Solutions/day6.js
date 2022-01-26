//two sum problem
var twoSum = function (nums, target) {
	var result = [target - nums[0]];
	for (let i = 1; i < nums.length; i++) {
		if (result.includes(nums[i])) {
			return [i, result.indexOf(nums[i])];
		} else {
			result.push(target - nums[i]);
		}
	}
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log("the result is :", twoSum(nums, target));
