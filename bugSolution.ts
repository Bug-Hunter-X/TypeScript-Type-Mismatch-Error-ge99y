function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : 0;
  const numB = typeof b === 'number' ? b : 0;
  return numA + numB; 
}

let result1 = addSafe("hello", 2); // Returns 2, handling the type mismatch
let result2 = add(1,2); // Returns 3
console.log(result1, result2);