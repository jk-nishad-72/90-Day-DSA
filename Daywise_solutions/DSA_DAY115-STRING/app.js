

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let map1 = new Map();
    let map2 = new Map();

    
    for (let i = 0; i < s.length; i++) {

        if (map1.has(s.charAt(i))) {
            map1.set(s.charAt(i), map1.get(s.charAt(i)) + 1)
        } else {
            map1.set(s.charAt(i), 1)
        }
    }
    
    for (let i = 0; i < t.length; i++) {

        if (map2.has(t.charAt(i))) {
            map2.set(t.charAt(i), map2.get(t.charAt(i)) + 1)
        } else {
            map2.set(t.charAt(i), 1)
        }
    }


     console.log( map1 , map2);
     
    for(let i = 0;i<s.length;i++){
         if(map1.get(s[i]) != map2.get(t[i])) return false
    }
    return true
};

console.log( isIsomorphic(s = "egg", t = "add"));


var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let mapST = {}; // s -> t
    let mapTS = {}; // t -> s

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];

        // CASE 1: c1 already mapped
        if (mapST[c1] !== undefined) {
            if (mapST[c1] !== c2) {
                return false; // conflict
            }
        } 
        // CASE 2: c1 not mapped yet
        else {
            // check if c2 already mapped to another char
            if (mapTS[c2] !== undefined) {
                return false; // two chars mapping to same
            }

            // create mapping both ways
            mapST[c1] = c2;
            mapTS[c2] = c1;
        }
    }

    return true;
};
