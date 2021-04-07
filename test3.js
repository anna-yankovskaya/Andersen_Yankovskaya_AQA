let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let newArray = [];
array.forEach (myFunction);

function myFunction (value) {
	if (value % 3 == 0 && value != 0) {
		newArray.push(value);
	}
}

console.log (newArray);
