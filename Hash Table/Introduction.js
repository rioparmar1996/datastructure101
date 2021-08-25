// Hash Table

// Hash table is another important data structure to learn.
// In JS we called as object, in python we have dictoniers, in java we have maps and in ruby we have hash.

//whats is a hash table??
// In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values.
//A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.
//During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

// what is a hash function?
// a magical function which takes a input and generate a unique value which then converted to address value to put data.
// the unique value will be unique ti the input and can't be reversed.
// this is the reason for faster lookups in Hash table.
// in JS we use objects
let user = {
	age: 54,
	name: "kylie",
	magic: true,
	scream() {
		console.log("ahhhhhhh");
	},
}; // all these data will be save in memeory in different locations.
// but when i tried to lookup the value it will in a instance.

console.log(user.age); // lookup for age value O(1)
user.spell = "abra kadabra"; // insert a data with property spell O(1)
console.log(user.spell);
console.log(user.scream);

// Hash tables are great but thier is cons where we have face hash collisions.

// Hash Function didn't know to put one value to one memeory block, so depends on input and unique value its collides
// then there will be overflow entires in the bucket reffrence image in the address space and form a link list which slow down access the memory lookup and deleting thins O(n/k).
