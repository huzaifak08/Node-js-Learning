// ES6 Module One:

// Example 1:
import { simpleFunc2 } from "./08_ES6_moduleOne.mjs";
simpleFunc2();

// Example 2: Using 'as' Keyword
import { simpleFunc2 as simple } from "./08_ES6_moduleOne.mjs";
simple();

// Example 3: Multiple Imports
// import { simpleFunc1, simpleFunc2 } from "./08_ES6_moduleOne.mjs";

// Example 4: Import Everything
import * as all from "./08_ES6_moduleOne.mjs";
console.log(all);
console.log(all.simpleFunc2());