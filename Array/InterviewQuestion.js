// create a function that reverse a string
//' hi my name is Andrei'should be;
// 'ierdnd si eman ym ih'

function reverse(str) {
	//check input
	if (!str || str.length < 2 || typeof str !== "string") {
		return "hmm that is not good";
	}
	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	console.log(backwards);
	return backwards.join(""); // we can also use toString()
}
// using inbuit js methods
function reverse2(str) {
	return str.split("").reverse().join("");
}
//ES6 syntax
const reverse3 = (str) => str.split("").reverse().join("");
//another way in ES6
const reverse4 = (str) => [...str].reverse().join("");
reverse("hi my name is Andrei");
reverse2("hi my name is Andrei");
reverse3("hi my name is Andrei");
reverse4("hi my name is Andrei");
