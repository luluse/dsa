// Iterative

function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
      total *= i
  }
  return total;
}



// Recursive

function factorial(num){
  if( num === 1) return 1;
  return num * factorial(num-1)
}


function factorial(x){
  if (x < 0 ) return 0;
  if (x <= 1 ) return 1;
  return x * factorial(x-1);
}