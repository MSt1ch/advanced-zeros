module.exports = function getZerosCount(number, base) {
  var count = 0, maxNod = 1;

  for(var i = 2; i <= base; i++) {
  	if(base % i === 0) {
  		maxNod = i;
  	}
  }

  while(number > 0){
  	number = Math.floor( number / maxNod);
  	count += number;
  }

  return count;

}