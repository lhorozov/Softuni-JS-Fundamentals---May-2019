function maxSequenceOfEqualElements(arr) {
    let longestSequence = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let tempSequence = [];
        tempSequence.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                tempSequence.push(arr[i]);
            } else {
                break;
            }
        }
        if (longestSequence.length < tempSequence.length) {
            longestSequence = tempSequence;
        } 
    }
    console.log(longestSequence.join(' '));
}
maxSequenceOfEqualElements([4, 4, 4, 4]);













// function maxSequenceOfEqualElements(input) {
//     let currentSequence = [];
//     let maxSequence = [];
//     let resultArr = input[0].split(" ");
    
//     currentSequence.push(Number(resultArr[0]));
    
//     for (let i = 1; i < resultArr.length; i++) {
//         if (resultArr[i] === resultArr[i-1]) {
//             currentSequence.push(resultArr[i]);
//         } else {
//             currentSequence = [];
//             currentSequence.push(resultArr[i]);
//         }
//         if (currentSequence.length > maxSequence.length) {
//             maxSequence = currentSequence;
//         }
//     }
//     console.log(maxSequence.join(" "));
// }
// maxSequenceOfEqualElements([`2 1 1 2 3 3 2 2 2 1`]);

