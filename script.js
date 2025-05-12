function convertToRoman(num) {
    // Define all Roman numeral mappings, including subtractive cases
    const romanMap = [
        ['M', 1000],
        ['CM', 900], // 1000 - 100
        ['D', 500],
        ['CD', 400], // 500 - 100
        ['C', 100],
        ['XC', 90],  // 100 - 10
        ['L', 50],
        ['XL', 40],  // 50 - 10
        ['X', 10],
        ['IX', 9],   // 10 - 1
        ['V', 5],
        ['IV', 4],   // 5 - 1
        ['I', 1]
    ];
    
    // Handle edge case of 0
    if (num === 0) return '';
    
    let result = '';
    // Iterate through each symbol-value pair
    for (let [symbol, value] of romanMap) {
        // While the number is at least as large as the current value
        while (num >= value) {
            result += symbol; // Append the symbol
            num -= value;     // Subtract the value
        }
    }
    
    return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman;