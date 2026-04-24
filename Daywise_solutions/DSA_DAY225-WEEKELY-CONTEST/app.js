
var furthestPointFromOrigin = function(moves){

     let frequency = new Map();

     for(let move of moves){
         frequency.set(move, (frequency.get(move) || 0) + 1);
     } 
     let l = frequency.get("L") || 0;
     let r = frequency.get("R") || 0;
     let s = frequency.get("_") || 0;
     
     if(l === r || (l===0 && r===0)) moves = moves.replaceAll("_" , "R") ;
    else if(l > r) moves = moves.replaceAll("_" , "L") ;
     else moves = moves.replaceAll("_" , "R") ;

     let position = 0;
        for(let move of moves){
            if(move === "L") position--;
            else if(move === "R") position++;
        }
     return Math.abs(position);
     
}

console.log(furthestPointFromOrigin("L_RL__R")) // 3
console.log(furthestPointFromOrigin("_R__LL_")) // 5