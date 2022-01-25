// mergeSortedArrays([0,3,4,31],[4,6,30]);
//  [0,3,4,4,6,30,31]

function mergeSortedArrays(array1, array2) {
	const newArray = [];
	let array1Item = array1[0];
	let array2Item = array2[0];

	let i = 0;
	let j = 0;

	if (array1.length === 0) {
		return array2;
	}

	if (array1.length === 0) {
		return array1;
	}

	while (array1Item || array2Item) {
		console.log(array1Item, array2Item);
		if (!array2Item || array1Item < array2Item) {
			newArray.push(array1Item);
			array1Item = array1[i];
			i++;
		} else {
			newArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}
	console.log(newArray);
	return newArray;
}
mergeSortedArrays([0, 3, 4], [4, 6, 30]);

