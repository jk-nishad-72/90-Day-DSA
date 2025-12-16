
var prompt = require('prompt-sync')();


var pangram = function(){

let s = prompt("Enter letter to check (Pangram or not ): ");

   let set = new Set(s)

   return set.size === 26

}

console.log(pangram());



let set = new Set();

set.add(1);
set.add(2);
set.add(2);     
set.add('jaykishan')

console.log(set);


var numJewelsInStones = function(jewels, stones) {
    
     let count = 0 ;

     for(let i = 0;i<jewels.length;i++){

         for(let j = 0 ; j< stones.length;j++){

              if(jewels[i] === stones[j]){
                  count++;
              }
         }
     }

    console.log(count);
};

// numJewelsInStones("aA","aAAbbbb");

var isHappy = function(n) {
    
    let set = new Set();

     while(true){
        
         let sum = 0;
          while(n > 0){
              let digit = n % 10;
              sum += (  digit * digit );
              n = Math.floor(n / 10);
          }

          if(sum === 1) return true;
          if(set.has(sum)) return false;
          else set.add(sum);
          n = sum;
     }
    
    return false;
};

console.log(isHappy(2)); 



