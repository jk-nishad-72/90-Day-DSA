/*
 *451. Sort Characters By Frequency
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

    const freqMap = new Map();

    // Count frequency of each character
    for( char of s ) {
        freqMap.set(char , (freqMap.get(char) || 0) +1 );
    }

    // Convert map to array and sort by frequency
    let arr = []
    for( let [char, freq] of freqMap ) {
        // console.log(char, freq);
        arr.push( [char, freq] );
    }
    arr.sort( (a,b) => b[1] - a[1] );

    // Build the result string
    return arr.map( e => e[0].repeat(e[1]) ).join('');

};

console.log(frequencySort("cccaaa"));
