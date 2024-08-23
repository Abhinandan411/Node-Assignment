import { sum, unique, clear } from './index.js';

const arr = [1, 2, 3, 4, 4, 5, 5, 6];

console.log('Sum of Array:', sum(arr));
console.log('Unique Array:', unique(arr));

clear(arr);
console.log('Cleared Array:', arr);