//find the first occurance of a number;

let nums = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let result = false;
let key;
let index;

for (let i = 0; i < nums.length; i++) {
	if (!key) {
		key = nums[i];
		index = i;
	} else {
		if (nums[i] == key && i != index) {
			console.log(key, nums[i]);
			result = true;
			break;
		} else {
			i++;
		}
	}
}

console.log(result);
