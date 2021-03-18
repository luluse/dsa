// collection of key/value pairs

// used to store key/value pairs
// unlike arrays, keys in hash tables are not ordered
// unlike arrays, hash tables are fast for finding, adding, removing values.
// JS has a build in hash table structure: objects and Maps


// handling collisions
// separate chaining: nested array
// linear probing: only store one piece of data at each position. when there is a collision, we look ahead for the next empty slot


// pseudo code Set:
// accepts a key and a value
// hash the key
// store the key-value pair in the hash table
// go to the position of the key, check if there is already data in this bucket
// if there is, push pair in there
// if empty, create an empty array in there nd then push data inside that array 

// pseudo code Get:
// accepts a key
// hashed the key
// go to the position of they key
// if there are more than one pair in this bucket, loop through to find the pair you're looking for
// retrieve the pair
// if not found return undefined


class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")


// Big O time : average case
// insertion O(1)
// Deletion O(1)
// access O(1)