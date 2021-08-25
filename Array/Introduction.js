// what is an array ?
// an array is a collection of items stored in a contiguous memory locations.
// creating an array of name strings with values& index string from 0 to nth elements.

const strings = ["a", "b", "c", "d"];
//4*4 = 16 bytes of storage
//print the output
console.log(strings);
// add an element in end of the array LI(Last In) with O(1).
strings.push("e");
console.log(strings);
// delete an element from array LO(Last Out) with o(1).
strings.pop();
console.log(strings);
//add an element at index[0] with O(n).
strings.unshift("x");
console.log(strings);
//delete an element at index[0] with O(n)
strings.shift();
console.log(strings);
//add element in randome index with O(n)
//splice takes 3 parameters first is which index you want to put new element,
//second index of elements you want to delete and elements you want to insert in th array.
strings.splice(2, 0, "alien");
console.log(strings);
/* ---------------------------------------------------------------*/

// static array va dynamic array
// The disadvantage of static array is its can't grow thier size of array but dynamic can as per requiremnt.
// Dynamic change its size , creates a new array at different location and copy the original array in it.
// dynamic array append is O(n) becz its create a new array for new element and add at the index of new array.

/* ---------------------------------------------------------------*/
// Imlementing An Array

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		//O(1)
		return this.data[index];
	}

	push(item) {
		//O(1)
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		//O(1)
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItem(index);
	}

	shiftItem(index) {
		//O(n)
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("how");
newArray.push("u");
newArray.push("!");
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.shiftItem(1);
console.log(newArray);

// Strings are basically a Array of char ;
// to solve a string question convert into array do operation and return in string
// where to use array
// for fast lookup, fast push/pop and ordered
//slow inserts,slow delete, fixed sized
