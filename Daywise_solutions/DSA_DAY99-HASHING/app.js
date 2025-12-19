
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    let map = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--.."
    }

    console.log(map);
    
  let set = new Set()
      for(let i = 0;i< words.length;i++){
             let word = words[i];
             let ans = '';
             for(let j = 0;j<word.length;j++){

                  ans +=  map[word.charAt(j)];
             }

             set.add(ans);
      }

       console.log(set)


};

uniqueMorseRepresentations(["a"])

/**2062. Count Vowel Substrings of a String
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let seen = new Set();

        for (let j = i; j < word.length; j++) {
            if (!vowels.has(word[j])) break;

            seen.add(word[j]);

            if (seen.size === 5) {
                count++;
            }
        }
    }

    return count;  
};