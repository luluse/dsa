// searching for a substring in a larger string

// define a function that takes the string and the pattern we're lookgin fore
// loop over longer string
// loop over pattern
// if character don't match break out of inner loop
// if match move on to the next character in pattern
// if all charaters of pattern match long string increment tally
// return count at the end


function naiveStr(str, sub){
  let tally = 0;
  
  for(let i=0; i<str.length; i++){
    for(let j=0; j<sub.length; j++){
      if(sub[j] !== str[i+j]){
        break;
      } 
      if(j === sub.length - 1){
        tally++;
      }
    }
  }
  return tally;
  }

  naiveStr('ruedeshirondelles', 'es')