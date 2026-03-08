/**1232. Check If It Is a Straight Line
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
    if(coordinates.length <= 2) return true;
    
    let x1 = coordinates[0][0];
    let y1 = coordinates[0][1];
    let x2 = coordinates[1][0];
    let y2 = coordinates[1][1];
    
    // Calculate the slope of the first two points
    let slope = (y2 - y1) / (x2 - x1);
    
    // Check if all other points have the same slope
    for(let i = 2; i < coordinates.length; i++) {
        let xi = coordinates[i][0];
        let yi = coordinates[i][1];
        
        // Calculate the slope between the current point and the first point
        let currentSlope = (yi - y1) / (xi - x1);
        
        // If the slope is different, it's not a straight line
        if(currentSlope !== slope) {
            return false;
        }
    }
    
    return true;    
};

console.log(checkStraightLine(coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
