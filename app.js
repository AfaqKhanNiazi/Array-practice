function findPairs(arr, target) {
    // Scenario 1: Output all pairs (includes duplicates and reversed ordered pairs)
    let allPairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                allPairs.push([arr[i], arr[j]]);
            }
        }
    }

    // Scenario 2: Output unique pairs only once (removes duplicates but includes reversed ordered pairs)
    let uniquePairs = [];
    let seen = new Set();
    for (let pair of allPairs) {
        let pairString = JSON.stringify(pair);
        if (!seen.has(pairString)) {
            uniquePairs.push(pair);
            seen.add(pairString);
        }
    }

    // Scenario 3: Output the same combo pair only once (removes reversed ordered pairs)
    let comboPairs = [];
    let seenCombo = new Set();
    for (let pair of allPairs) {
        let sortedPair = JSON.stringify(pair.slice().sort((a, b) => a - b));
        if (!seenCombo.has(sortedPair)) {
            comboPairs.push(pair);
            seenCombo.add(sortedPair);
        }
    }

    return { allPairs, uniquePairs, comboPairs };
}

// Example usage
let arr = [2, 3, 4, 4, 5, 5, 7, 8, 9, 10];
let target = 12;
let { allPairs, uniquePairs, comboPairs } = findPairs(arr, target);

console.log("All pairs:");
console.log(allPairs);

console.log("\nUnique pairs (including reversed ordered pairs):");
console.log(uniquePairs);

console.log("\nCombo pairs (removing reversed ordered pairs):");
console.log(comboPairs);