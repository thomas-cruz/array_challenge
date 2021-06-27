function ArrayChallenge(arr) { 

  // array of sums to be returned  
  // let numberPairs = [];
  let numberPairs = '';
  // store checked numbers
  let checkedPairs = {};
  
  if(arr.length > 1){ //check if array has more than one element
    const Sum = arr[0]; // numbers must add up to this sum
    for(let i = 1; i < arr.length; i++){ 
      // code below is more efficient but does not keep order
      // let sumMinus = Sum - arr[i];
      // if(checkedPairs[sumMinus.toString()] !== undefined){ // check if number has been checked
      //   // numberPairs.push(sumMinus + ',' + arr[i]); // add to array to be returned
      //   // numberPairs.push(arr[i]);
      //   numberPairs += sumMinus + ',' + arr[i] + ' ';
      // }
      // loops over arr twice to keep the order
      let pairNum = getPair(arr, i, Sum); // gets corresponding pair of number in current index
      if (pairNum && checkedPairs[pairNum.toString()] === undefined) { // checks if a pair exists and has not been added yet
        numberPairs += arr[i] + ',' + pairNum + ' ';
      }
      checkedPairs[arr[i].toString()] = arr[i]; // add to checked numbers
    }
  }
  return numberPairs; 
}

function getPair(arr, currentIndex, sum) {
  for (let i = (currentIndex + 1); i < arr.length; i ++) {
    if ((arr[currentIndex] + arr[i]) === sum) {
      return arr[i];
    }
  }
  return null;
}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));
