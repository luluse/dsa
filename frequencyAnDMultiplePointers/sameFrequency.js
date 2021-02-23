// Frequency Counter
// Given two positive integers, find out if the two numbers have the same frequency of digits

// Solution 1
// Big O time: O(n)
function same(num1, num2){
  let str1 = num1.toString();
  let str2 = num2.toString();
  if(str1.length !== str2.length){
      return false;
  }

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let num = str1[i];
    // if num exists, increment, otherwise set to 1
    lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < str2.length; i++) {
    let num = str2[i];
    // can't find num or num is zero then it's not an anagram
    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }
  return true
}
same(188, 881)



// Solution 2
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

sameFrequency(4735, 5743)