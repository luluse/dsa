// write a recursive function called fib which accepts a number and return the nth number in the fibonacci sequence

// fib(4) // 3 -- 1,1,2,3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

fib(4)


// not clear yet