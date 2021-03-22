// buttom-up solution

// TABULATION : storing the result of the previous result in a 'table'(usually an array)
// usually done using iteration
// better space complexity

function fib(n){
  if(n <= 2) return 1;
  let fibNums = [0,1,1];
  for(let i = 3; i<=n ; i++){
    fibNums[i] = fibNums(i-1) + fibNums(i-2)
  }
  return fibNums[n];
}

// Big O of TABULATION solution
// time : O(n)
// space : more efficient that memoization
