module.exports = function getZerosCount(number, base) {
  var count = 0, maxNod = 1;
  var simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  


  for(var i = 0; simpleNumbers[i] <= base; i++) {
  	if(base % simpleNumbers[i] === 0) {
  		maxNod = simpleNumbers[i];
  	}

  }

  while(number > 0){
  	number = Math.floor( number / maxNod);
  	count += number;
  }

  return count;

}