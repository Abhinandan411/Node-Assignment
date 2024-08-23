// index.js

// for sum nof array
export function sum(array) {
    return array.reduce((acc, val) => acc + val, 0);
}

// for finding uniqe element
export function unique(array) {
    return [...new Set(array)];
}

// for clear all element from the array
export function clear(array) {
    array.length = 0;
    return array;
}