// Map and reduce exercises - https://gist.github.com/TessMyers/a252520dd9a8fe68f8e5

// 2 - Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"

const capitalizeStr = str => {
	let splittedStr = str.split(' ');
	let returnedStr = '';
	for (let i = 0; i < splittedStr.length; i++) {
		if (i % 2 === 0) {
			returnedStr += capitalize(splittedStr[i]);
		} else {
			returnedStr += splittedStr[i];
		}

		if (i < splittedStr.length - 1) {
			returnedStr += ' ';
		}
	}
	return returnedStr;
};
