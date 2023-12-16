// sort algorithm
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap arr[i] and arr[minIndex]
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
// Given list
const ssNums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const ssResult = selectionSort(ssNums);
console.log('Result of 1.1 => ' + ssResult);

// linear search
function linearSearch(arr, target) {
    for (let num of arr) {
        if (num === target) {
            return true;
        }
    }
    return false;
}

// Given list
const linearNums = [5, 9, 3, 1, 2, 8, 4, 7, 6];
const targetNumber = 7;

const linearResult = linearSearch(linearNums, targetNumber);
const displayResult = linearResult ? 'true' : 'false';
console.log('Result 1.2 => ' + displayResult);

// binary search
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return true; // Target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search in the right half
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    return false; // Target not found
}

// Given list
let list = [5, 9, 3, 1, 2, 8, 4, 7, 6];

// Sort the array
list.sort((a, b) => a - b);

// Test the binary search
let targetNum = 7;

let binaryResult = binarySearch(list, targetNum);
const displayBinaryResult = binaryResult ? 'true' : 'false';
console.log('Result 1.3 => ' + displayBinaryResult);
