// write a function that accepts a base and an exponent.
// return the power of the base to the exponent.
// shold mimic the Math.pow() 

function power(base, expo){
  if(expo === 0)return 1;
  return base * power(base,expo-1);
  }
  
  power(2,2)