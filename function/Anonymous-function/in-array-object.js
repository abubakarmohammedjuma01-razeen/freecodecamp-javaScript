const fruits = ["apple", "mango", "banana"];

fruits.forEach(function(fruit) {
	console.log("Fruit:", fruit);
});

// map
const number = [1, 2, 3, 4];

const doubled = number.map(function(num) {
	return num * 2;
});
