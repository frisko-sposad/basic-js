module.exports = function countCats(matrix) {
	 let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (matrix[i][j] === "^^") {
					sum = sum + 1;
				} 
				
			}
		
	}
	return sum;
	
	throw 'Not implemented';
  // remove line with error and write your code here
};
