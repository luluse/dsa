// Given two strings, write a function to determine if the second string is an anagram of the first.

// solution 1
// Big O time: O(n)
function same(str1, str2){
  if(str1.length !== str2.length){
      return false;
  }

  let arr1 = str1.split('');
  let arr2 = str2.split('');
// console.log(arr1)
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  // console.log(frequencyCounter1[val]);
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    // console.log('val 2', frequencyCounter2[val]);       
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key] !== frequencyCounter1[key]){
          return false
      }
      // console.log('arr1',frequencyCounter1[key]);
      // console.log('arr2',frequencyCounter2[key]);
  }
  return true
}
same('texttwisttime', 'timetwisttext')



// solution 2
function same(str1, str2){
  if(str1.length !== str2.length){
      return false;
  }

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true
}
same('texttwisttime', 'timetwisttext')
