// implement a function that accepts a vriable number of arguments
// check if there are any duplicates

// Solution 1 
function duplicates(a,b,c){
  let str1 = a.toString();
  let str2 = b.toString();
  let str3 = c.toString();  
  let arg = str1.concat('', str2 ,str3)
  
  let lookup = {};
  
    for (let val in arg) {
      lookup[arg[val]] ? lookup[arg[val]] += 1 : lookup[arg[val]] = 1;
    }
    console.log(lookup)
  
    for (let key in lookup) {
     
      if (lookup[key] > 1) {
        return true;
      } 
    }
    return false
  }
  
  duplicates('a', 'b', 'b')
  duplicates(1, 1, 3)



// Solution 2 Frequency counter
  function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }


// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}