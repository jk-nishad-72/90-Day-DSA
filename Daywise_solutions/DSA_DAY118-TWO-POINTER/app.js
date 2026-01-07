

/**844. Backspace String Compare
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;

    let skipS = 0;
    let skipT = 0;

    while (i >= 0 || j >= 0) {

        // Find next valid character in s
        while (i >= 0) {
            if (s[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }

        // Find next valid character in t
        while (j >= 0) {
            if (t[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }
        // Compare characters
        let charS = i >= 0 ? s[i] : null;
        let charT = j >= 0 ? t[j] : null;
        if (charS !== charT) return false;
        i--;
        j--;
    }

    return true;
};



