// helper method recursion
//easier

// collect odd numbers of the array

function collectOddValues(arr){
    
  let result = [];

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])



// pure recursion
// shorter

function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])
                                      
   // Tips 
   
   // for arrays: use methods like slice, spread operator, concat that makes copies of arrays so you don't mutate them.

   // Strings are immutable. use methods like slice, substr or substring to make copies of strings.

   // to make copies of objs use Object.assign or spread operator