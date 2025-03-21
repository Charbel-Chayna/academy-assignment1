function findMissingNumber(arr) {
    if (arr.length === 0 || arr[0] !== 1) {
        return "It should start with 1 and not be empty.";
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
    
    return "The array is complete.";
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));
console.log(findMissingNumber([]));
console.log(findMissingNumber([2, 3, 4]));
console.log(findMissingNumber([1, 2, 3, 4, 5])); 