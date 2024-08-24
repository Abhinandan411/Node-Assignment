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

// for finding the maximum value in an array
export function max(array) {
    return Math.max(...array);
}

// for finding the minimum value in an array
export function min(array) {
    return Math.min(...array);
}

// for reversing the elements of an array
export function reverse(array) {
    return array.slice().reverse();  // slice() is used to avoid mutating the original array
}

// for removing a specific element from an array
export function remove(array, element) {
    return array.filter(el => el !== element);
}

// for getting the first n elements of an array
export function firstN(array, n) {
    return array.slice(0, n);
}


// for checking if an array is empty
export function isEmpty(array) {
    return array.length === 0;
}

// for adding an element to the end of an array
export function add(array, element) {
    array.push(element);
    return array;
}


// for removing the last element of an array
export function removeLast(array) {
    array.pop();
    return array;
}