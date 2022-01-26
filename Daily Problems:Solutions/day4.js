//Recursion
// find factorial of the number using

// factorial by recursion
function findFactorialRecursive(number) {
	if (number === 2) {
		return 2;
	}
	return number * findFactorialRecursive(number - 1);
}

//factorial by iteration
function findFactorialIterative(number) {
	let factorial = 1;
	for (let i = 0; i < number - 1; i++) {
		factorial = factorial * (number - i);
	}
	return factorial;
}

let num = 9;
let result1 = findFactorialIterative(num);
let result2 = findFactorialRecursive(num);
console.log("The factorial of the number by iteration:", result1);
console.log("The factorial of the number by recursion:", result2);
