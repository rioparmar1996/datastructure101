// two sum problem

const nums = [2, 7, 11, 15];
let target = 9;
//result [0,1] index

let tempArray = [];
let index = 0;

nums.map((el) => {
	tempArray.push({ index, el });
	index++;
});

for ([key, value] of obj in tempArray) {
	console.log(`${key},${value}`);
}

console.log(tempArray);
