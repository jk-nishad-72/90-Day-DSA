/*
 *859. Buddy Strings
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;

    if (s === goal) {   
        const charSet = new Set();
        for (let char of s) {
            if (charSet.has(char)) {
                return true; 
            }
            charSet.add(char);
        }   


        return false;    } else {
        const diff = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                diff.push(i);
            }
        }
        return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
    }   



    
};

console.log(buddyStrings(s = "ab", goal = "ba"));
