# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: a type mismatch. The `add` function expects two numbers, but it's called with a string and a number.  TypeScript correctly identifies this as an error, preventing runtime surprises.

## How to Reproduce

1. Clone this repository.
2. Compile the code using the TypeScript compiler (tsc bug.ts).
3. Observe the compiler error indicating the type mismatch.

## Solution

The `bugSolution.ts` file provides a corrected version where input validation prevents the type error. This could involve a runtime check or stricter type guards to ensure the function is used correctly.

This example highlights the benefits of TypeScript's static typing; it catches errors during development rather than at runtime.