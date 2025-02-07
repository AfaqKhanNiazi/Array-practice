
// // function allPairs(arr , target){
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let i = 0; a < arr.length; a++) {
// //             if (arr[i] = arr[a] ===target) {
// //                 allPairs.push([arr[i] , arr[a]]);
// //             }
// //         }
        
// //     }
// // }



// // let uniquePair = [];
// // let seem = new set ();
// // for (let pair of allPairs) {
// //     let pairString = JSON.stringify(pair);
// //     if (!seen.has(pairString)) {
// //         uniquePairs.push(pair);
// //         seen.add(pairString);
// //     } 
// // }



// // let comboPair = [];
// // let seenCombo = new set();
// // for (let pair of allPairs) {
// //     let sortedPair = JSON.stringify(pair.slice().sort((a , b) => a + b));
// //     if (!seenCombo.has(sortedPair)) {
// //         comboPairs.push(pair);
// //         seenCombo.add(sortedPair);
        
// //     }

// //     return {allPairs , uniquePairs , comboPairs };
    
// // }

// // let arr = [2, 3, 4, 4, 5, 5, 7, 8, 9, 10]
// // let target = 12;
// // let { allPairs, uniquePairs, comboPairs } = findPairs(arr,target);

// // console.log(allPairs);
// // console.log(uniquePairs);
// // console.log(comboPairs);



// function findTriplets(arr, target) {
//     // Scenario 1: Output all triplets (includes duplicates and different orderings)
//     let allTriplets = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             for (let k = 0; k < arr.length; k++) {
//                 if (arr[i] + arr[j] + arr[k] === target) {
//                     allTriplets.push([arr[i], arr[j], arr[k]]);
//                 }
//             }
//         }
//     }

//     // Scenario 2: Output unique triplets only once (removes duplicates but includes different orderings)
//     let uniqueTriplets = [];
//     let seen = new Set();
//     for (let triplet of allTriplets) {
//         let tripletString = JSON.stringify(triplet);
//         if (!seen.has(tripletString)) {
//             uniqueTriplets.push(triplet);
//             seen.add(tripletString);
//         }
//     }

//     // Scenario 3: Output the same combo triplet only once (removes different orderings)
//     let comboTriplets = [];
//     let seenCombo = new Set();
//     for (let triplet of allTriplets) {
//         let sortedTriplet = JSON.stringify(triplet.slice().sort((a, b) => a - b));
//         if (!seenCombo.has(sortedTriplet)) {
//             comboTriplets.push(triplet);
//             seenCombo.add(sortedTriplet);
//         }
//     }

//     return { allTriplets, uniqueTriplets, comboTriplets };
// }

// // Example usage
// let arr = [1, , 3, 4, 5, 6, 7, 8, 9];
// let target = 12;
// let { allTriplets, uniqueTriplets, comboTriplets } = findTriplets(arr, target);

// console.log("All triplets:");
// console.log(allTriplets);

// console.log("\nUnique triplets (including different orderings):");
// console.log(uniqueTriplets);

// console.log("\nCombo triplets (removing different orderings):");
// console.log(comboTriplets);