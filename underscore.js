var testArray = [45, 3, 22, 10];

var _ = {

// average function

	average: function(array) {
		var sum = 0;
		for (var i = 0; i < array.length; i++){
			sum += array[i];

		}
		return (sum / array.length);
	},


// contains function

	contains: function(array, number) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] === number) {
				return "true";
			}
		}
	},


// first function

	first: function(array) {
		return array[0];
	},


// last function

	last: function(array) {
		return array[array.length - 1];
},


// max function 

	max: function(array) {
		for (var i = 0; i < array.length; i++) {
			var largestNum = 0;
			if (array[0] > array[1]) {
				largestNum = array[0];
		}
	}
	return max
	},	


// min function 

	min: function(array) {
		for (var i = 0; i < array.length; i++) {
			var smallestNum = 0;
			if (array[0] < array[1]) {
				smallestNum = array[0];
		}
	}
	return min
	},


// each is not comparing numbers, just printing out each number

	each: function(array, alert) {
		for (var i = 0; i < array.length; i++) {
			alert(array[i]);
		}
	},


// compact statement notes
// this if statement is letting us know that (array[i]) is not equal to undefined
// now adding the numbers (.push) from (array[i]) to the newArray

	compact: function(array) {
		var newArray = [];
		for (var i = 0; i < array.length; i++) {
			if (array[i] !== (undefined) {
				newArray.push(array[i]);
			}
		}
		return compact
	},	

// compact

// map

// filter

});




