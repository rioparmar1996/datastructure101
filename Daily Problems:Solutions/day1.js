const input = [
	{ k: "a", v: 1 },
	{ k: "a", v: 1 },
	{ k: "b", v: 2 },
	{ k: "d", v: 7 },
	{ k: "d", v: 8 },
	{ k: "e", v: 0 },
];

let tempArray = [];

input.map((obj) => {
	let robj = {};
	let match = false;
	let matchIndex = 0;

	if (tempArray.length) {
		tempArray.forEach((el, i) => {
			if (Object.keys(el).includes(obj.k)) {
				match = true;
				matchIndex = i;
			} else {
				match = false;
			}
		});

		if (match) {
			console.log(Object.keys(tempArray[matchIndex])[0]);
			let key = Object.keys(tempArray[matchIndex])[0];
			tempArray[matchIndex][key] += obj.v;
			// console.log("true", el);
		} else {
			// console.log("false", el);
			robj[obj.k] = obj.v * 2;
			tempArray.push(robj);
		}
	} else {
		robj[obj.k] = obj.v * 2;
		tempArray.push(robj);
	}
	console.log("inside", obj, tempArray);
});

console.log("outside", tempArray);
