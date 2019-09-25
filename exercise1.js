// Map and reduce exercises - https://gist.github.com/TessMyers/a252520dd9a8fe68f8e5

// 1 - Write a function capitalize that takes a string and uses .map to return the same string in all caps.
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"

const capitalize = str => {
	let arr = str.split('');
	return arr.map(x => x.toUpperCase()).join('');
};
