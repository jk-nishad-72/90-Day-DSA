
let prompt = require('prompt-sync')();

let n = Number(prompt('Enter a Number : '))

// for(let i = 1;i<=n;i++){
//     for(let j = 1;j<=n-i;j++){
//          process.stdout.write(' ')
//     }
//     for(let j = 1;j<=i;j++){
//          process.stdout.write('*'+' ')
//     }
//     console.log();
    
// }

// for(let i = 1;i<=n;i++){
//     for(let j = 1;j<=n*2-1;j++){
//          if(i===j ||  i+j === n*2){
//              process.stdout.write('*' + " ")
//          }else{
//             process.stdout.write(' ')
//          }
         
//     }
//     console.log();
    
// }

for(let i = 1;i<=n*2-1;i++){
    for(let j = 1;j<=n*2-1;j++){
         if(i===j ||  i+j === n*2){
             process.stdout.write('*' + " ")
         }else{
            process.stdout.write(' ')
         }
         
    }
    console.log();
    
}

