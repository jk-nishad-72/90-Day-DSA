
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