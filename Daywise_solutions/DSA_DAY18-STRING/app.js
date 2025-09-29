

let prompt = require('prompt-sync')();

/**
 * 
 */

function AcceptArray(){
    let BASize = Number(prompt('Enter Outer Array size : '))

let OArr = new Array(BASize)

for(let i = 0;i<OArr.length;i++){
     let SASize = Number(prompt('Enter Inner Array size: '))

     OArr[i] = new Array(SASize)

     for(let j = 0;j<OArr[i].length;j++){

        OArr[i][j] = Number(prompt('Enter Array Elements : '))
     }
     
}

return OArr
}
//  let image = (AcceptArray());

//  console.log(image);
 

//—Q 35. 832.Flipping an Image [Homework]


var flipAndInvertImage = function(image) {
 for(let i = 0;i<image.length;i++){
      let j = 0;let k = image[i].length-1;
      while(j<k){
        let temp = image[i][j] 
        image[i][j] = image[i][k]
        image[i][k] = temp
        j++
        k--
      } }
  for(let i = 0;i<image.length;i++){
    for(let j = 0;j<image[i].length;j++){
        if(image[i][j]===0) image[i][j] = 1;
        else if(image[i][j]===1) image[i][j]=0;
    }
  }
return image  
};

// console.log(flipAndInvertImage(image));


//*— Q 55. Accept a string from user and print its each character on a new line


function AccptStrAndPrintEachChar(){
    let s = prompt('Enter any String value : ')

for(let i = 0;i<s.length;i++){

    // console.log(s[i]);
    console.log(s.charAt(i));

    // process.stdout.write( ' '+ s[i])
    
}

}

// AccptStrAndPrintEachChar()


//* — Q 56. Accept a string and print it in reverse order

function AccptStrAndPrintEachCharRvrse(){

     let st = prompt('Enter any String value : ')

     for(let i=st.length-1;i>=0;i--){
        console.log(st[i]);

        
     }
}

// AccptStrAndPrintEachCharRvrse()



//* — Q 57. Pallindromic String  using Two pointer algorithm (hint: Array reverse algo) [Homework]
















