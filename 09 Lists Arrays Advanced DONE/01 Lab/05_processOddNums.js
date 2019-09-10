function processOddNums(input) {
    let result = input
    .map(Number)
    .filter((el, i) => i % 2 !== 0)
    .map(x => 2 * x)
    .reverse();
    

    console.log(result.join(" "));
    
}
// processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);


// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// /**
//  * Filter array items based on search criteria (query)
//  */
// const filterItems = (arr, query) => {
//   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
// };

// console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']