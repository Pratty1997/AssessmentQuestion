// Do not remove duplicates as the required difference could be zero.
const arr = [1,1,1,1];

// Sort the array, time complexity O(nlogn)
arr.sort();

// Since zero difference operated on the same value would not count as a pair.
let i=0;
let j=1;

const diff = -1;

// Count of the number of pairs
let count = 0;

// The pairs that satisfy the required difference.
let pairs = {}; 

// Check if the required difference is greater than or equal to zero
if(diff >= 0){

    while(j<arr.length){
        // Check if the difference between two numbers is equal to the required difference.
        if( (arr[j] - arr[i]) === diff ){
            count += 1;
            const pair = [arr[j], arr[i]]
            pairs[count] = pair;
            j += 1;
        }
        // If the difference is greater than the required difference, move the smaller forward.
        else if( (arr[j]-arr[i]) > diff ){
            i += 1;
        }
        // If the difference is less than the required difference, move the larger value forward.
        else{
            j += 1;
        }

    }

    if(count === 0){
        console.log("No pairs satisfying the required difference value");
    }

    else{
        console.log( 'number of pairs : ' + count );
        console.log( 'pairs : ')
        for(let i in pairs ){
            console.log(pairs[i]);
        }
    }
}

else{
    console.log('The required difference can not be less than zero.')
}

// Test cases checked:
// 1. [1,2,3,4] diff = 1
// 2. [3,4,1,2] diff = 1
// 3. [2,4,6,8] diff = 1
// 4. [2,4,6,8] diff = 2
// 5. [2,4,6,9] diff = 2
// 6. [1,1,1,1] diff = 0
// 7. [1,1,1,1] diff = -1