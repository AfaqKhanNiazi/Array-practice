// // // function findPairs(arr, target) {
// // //     // Scenario 1: Output all pairs (includes duplicates and reversed ordered pairs)
// // //     let allPairs = [];
// // //     for (let i = 0; i < arr.length; i++) {
// // //         for (let j = 0; j < arr.length; j++) {
// // //             if (arr[i] + arr[j] === target) {
// // //                 allPairs.push([arr[i], arr[j]]);
// // //             }
// // //         }
// // //     }

// // //     // Scenario 2: Output unique pairs only once (removes duplicates but includes reversed ordered pairs)
// // //     let uniquePairs = [];
// // //     let seen = new Set();
// // //     for (let pair of allPairs) {
// // //         let pairString = JSON.stringify(pair);
// // //         if (!seen.has(pairString)) {
// // //             uniquePairs.push(pair);
// // //             seen.add(pairString);
// // //         }
// // //     }

// // //     // Scenario 3: Output the same combo pair only once (removes reversed ordered pairs)
// // //     let comboPairs = [];
// // //     let seenCombo = new Set();
// // //     for (let pair of allPairs) {
// // //         let sortedPair = JSON.stringify(pair.slice().sort((a, b) => a - b));
// // //         if (!seenCombo.has(sortedPair)) {
// // //             comboPairs.push(pair);
// // //             seenCombo.add(sortedPair);
// // //         }
// // //     }

// // //     return { allPairs, uniquePairs, comboPairs };
// // // }

// // // // Example usage
// // // let arr = [2, 3, 4, 4, 5, 5, 7, 8, 9, 10];
// // // let target = 12;
// // // let { allPairs, uniquePairs, comboPairs } = findPairs(arr, target);

// // // console.log("All pairs:");
// // // console.log(allPairs);

// // // console.log("\nUnique pairs (including reversed ordered pairs):");
// // // console.log(uniquePairs);

// // // console.log("\nCombo pairs (removing reversed ordered pairs):");
// // // console.log(comboPairs);





// // function findAllPairs(arr, target) {
// //     let pairs = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = 0; j < arr.length; j++) {
// //             if (i !== j && isValidNumber(arr[i]) && isValidNumber(arr[j]) && arr[i] + arr[j] === target) {
// //                 pairs.push([arr[i], arr[j]]);
// //             }
// //         }
// //     }
// //     return pairs;
// // }

// // function findUniquePairs(arr, target) {
// //     let pairs = [];
// //     let seen = new Set();
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = i + 1; j < arr.length; j++) {
// //             if (isValidNumber(arr[i]) && isValidNumber(arr[j]) && arr[i] + arr[j] === target) {
// //                 let pairStr = `${arr[i]},${arr[j]}`;
// //                 if (!seen.has(pairStr)) {
// //                     pairs.push([arr[i], arr[j]]);
// //                     seen.add(pairStr);
// //                 }
// //             }
// //         }
// //     }
// //     return pairs;
// // }

// // function findDistinctPairs(arr, target) {
// //     let pairs = [];
// //     let seen = new Set();
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = i + 1; j < arr.length; j++) {
// //             if (isValidNumber(arr[i]) && isValidNumber(arr[j]) && arr[i] + arr[j] === target) {
// //                 let sortedPair = [arr[i], arr[j]].sort((a, b) => a - b);
// //                 let pairStr = `${sortedPair[0]},${sortedPair[1]}`;
// //                 if (!seen.has(pairStr)) {
// //                     pairs.push(sortedPair);
// //                     seen.add(pairStr);
// //                 }
// //             }
// //         }
// //     }
// //     return pairs;
// // }

// // // Helper function to check if a value is a valid number
// // function isValidNumber(value) {
// //     return typeof value === 'number' && !isNaN(value);
// // }

// // // Example usage with a mixed array
// // const mixedArray = [2, "hello", 3, true, 4, 4, null, 5, "world", 7, 8, 9, 10, {}, [], 12, "5"];
// // const targetSum = 12;

// // console.log("All Pairs:", findAllPairs(mixedArray, targetSum));
// // console.log("Unique Pairs:", findUniquePairs(mixedArray, targetSum));
// // console.log("Distinct Pairs:", findDistinctPairs(mixedArray, targetSum));







// function findPairs(arr, target, unique = false, distinct = false) {
//     let pairs = [];
//     let seen = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (typeof arr[i] === 'number' && typeof arr[j] === 'number' && arr[i] + arr[j] === target) {
//                 let pair = [arr[i], arr[j]];
                
//                 if (distinct) {
//                     pair.sort((a, b) => a - b); // Ensure order is consistent
//                 }

//                 let pairStr = pair.toString();

//                 if (!unique || !seen.has(pairStr)) {
//                     pairs.push(pair);
//                     seen.add(pairStr);
//                 }
//             }
//         }
//     }

//     return pairs;
// }

// // Example usage with a mixed array
// const mixedArray = [2, "hello", 3, true, 4, 4, null, 5, "world", 7, 8, 9, 10, {}, [], 12, "5"];
// const targetSum = 12;

// console.log("All Pairs:", findPairs(mixedArray, targetSum)); // Includes duplicates and reversed pairs
// console.log("Unique Pairs:", findPairs(mixedArray, targetSum, true)); // Removes duplicates
// console.log("Distinct Pairs:", findPairs(mixedArray, targetSum, true, true)); // Removes reversed pairs too






function findPairs(arr, target, unique = false, distinct = false) {
    let pairs = [];
    let seen = new Set();

    // Filter only numbers
    let numbers = arr.filter(item => typeof item === 'number');

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                let pair = [numbers[i], numbers[j]];
                
                if (distinct) {
                    pair.sort((a, b) => a - b); // Ensure consistent order
                }

                let pairStr = pair.toString();

                if (!unique || !seen.has(pairStr)) {
                    pairs.push(pair);
                    seen.add(pairStr);
                }
            }
        }
    }

    return pairs;
}

// Example usage with a mixed array
const mixedArray = [2, "hello", 3, true, 4, 4, null, 5, "world", 7, 8, 9, 10, {}, [], 12, "5"];
const targetSum = 12;

console.log("All Pairs:", findPairs(mixedArray, targetSum)); // Includes duplicates and reversed pairs
console.log("Unique Pairs:", findPairs(mixedArray, targetSum, true)); // Removes duplicates
console.log("Distinct Pairs:", findPairs(mixedArray, targetSum, true, true)); // Removes reversed pairs too
