// sorting is the process of rearranging items in a collection in some kind of order
// very common task -> that's why it's good to konw about different sorting algos


// .sort() --> if empty (): very bizare because converts everything in string and unses unicode to sort.

// .sort() --> accepts a comparator function to tell JS how to sort
// example:
function numCompare(num1, num2){
  return num1 - num2;
}

[6, 17, 4, 11].sort(numCompare);




function lengthCompare(str1, str2){
  return str1.length - str2.length;
}

['lean', 'cod', 'boomerang', 'apple'].sort(lengthCompare);