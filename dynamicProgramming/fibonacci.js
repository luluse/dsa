// full recursion solution
// Fib(n) = Fib(n-1) + Fib(n-2)

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2)
}

// Big O
// gets really large very quickly
// time : O(2^n) - very bad

// problem of using recursion: we are repeating things over and over again

// solution to make it more efficient: remember the old values. store them somewhere and go back to it when needed. 
// => MEMOISATION: storing the result of expensive function calls and returning the cached result when the same inputs occur again

// 
 