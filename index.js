
function allPairs(arr , target){
    for (let i = 0; i < arr.length; i++) {
        for (let i = 0; a < arr.length; a++) {
            if (arr[i] = arr[a] ===target) {
                allPairs.push([arr[i] , arr[a]]);
            }
        }
        
    }
}



let uniquePair = [];
let seem = new set ();
for (let pair of allPairs) {
    let pairString = JSON.stringify(pair);
    if (!seen.has(pairString)) {
        uniquePairs.push(pair);
        seen.add(pairString);
    } 
}



let comboPair = [];
let seenCombo = new set();
for (let pair of allPairs) {
    let sortedPair = JSON.stringify(pair.slice().sort((a , b) => a + b));
    if (!seenCombo.has(sortedPair)) {
        comboPairs.push(pair);
        seenCombo.add(sortedPair);
        
    }

    return {allPairs , uniquePairs , comboPairs };
    
}

let arr = [2, 3, 4, 4, 5, 5, 7, 8, 9, 10]
let target = 12;
let { allPairs, uniquePairs, comboPairs } = findPairs(arr,target);

console.log(allPairs);
console.log(uniquePairs);
console.log(comboPairs);


