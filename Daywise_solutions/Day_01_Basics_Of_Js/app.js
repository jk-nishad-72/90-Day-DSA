



// * Q1 sum of two integer 

let a = 10 ;
let b = 20 ;

console.log(a+b);

// * guess the output 
console.log(a+"addition "+ a + b)


// * Q2 take input from user and greet them with their name

let Name = prompt('Enter your Name :- ');



console.log('namaste 🙏 '+Name)

 const container = document.querySelector('.container');
    container.innerHTML = `<h1> Namaste 🙏 ${Name} </h1>` 



 /*
  * Q3 swapping of two numbers 
  *  It can be solved in 3 ways
  *  1. using third variable 
  *  2. without using third variable (arithmetic operation)
  *  3. using destructuring 

 */

// 1. using third variable

let x  = 5;
let y = 10 ;

let temp = x ;
x = y ;
y = temp;

console.log('the values of x and y after swapping is '+x +'and'+ y);

// 2. without using third variable (arithmetic operation) {now the x = 10 and y = 5}

  x = x + y;
  y = x -y;
  x = x-y;
console.log('the values of x and y after swapping is '+x +'and'+ y);

// 3. using destructuring { now the x = 5 and y = 10}
    [x,y]=   [y ,x]

console.log('the values of x and y after swapping is '+x +'and'+ y);





/*


-- 7 Operators and theire que.

 ---# Arithmatic operators ' + ','-', ' * ','/', '%' ..
console.log(a+b)  // Addition add two number 
console.log(a-b)  //  Substraction  of number 
console.log(a*b)  // Multiply of number
console.log(a%b) //  Remainder ( Shesfal) 
console.log(a/b)//  Quetient ( Bhagfal)  


--# Logical operators ->  '&&' , '|| '

  && multiple conditioning  

if (10>5 && 5<6 ){

  console.log("hello ")
}


if both the conditio is true than it print code written inside the if statement 
yadi koi bhi sirf ek condtition fals to ye nahi chalega 


 ' || '   OR  Operators

if( 10>5 || 5>9 ){  //  one is true and  5>9 is false 


  console.log("hell i am or ");

}

yadi isme se koi  sirf ek condition true hai to code ko execute kardo



--# Relational Operators  '>' ,'<' ,'>=' , '<=' , != , == , !== , === 

  these are use to compar and comparition 

exmaple 

 '>'  -- Greater than Operator

if(a>b){

  console.log("a is greater:"+a);
}


*/





//  '>='  -- Greater than equal  Operator (bada nahi h to chack kro equal hai kya )

 if(a>=b){

  console.log("a is greater:"+a);
}


 //  '<'  -- Less than Operator

if(a<b){

  console.log("a is lesser:"+a);
}


 //  '<='  -- less than equal  Operator (chhota nahi h to chack kro equal hai kya )

if(a<=b){

  console.log("a is lesser:"+a);
}


// != (not equal to )  ,  == (equal to )

//  this are not check the data type 
// yadi ham b = "23 "  and a = 45;  to bhi campar kr dega  jo ki sahi nhi h

if( a!=b){

  console.log("a b ke barabr nhi h:")
}

 // yadi a = "3" b = 3  to ye true smjta hai 

if( a==b){

  console.log("a b ke barabr nhi h:")
}


// isliye ham in dono ka use krte hai !== , === 


// ab ye compare ke sath sath dono ki datatypes bhi check krega 


// if( a!==b){

//   console.log("a b ke barabr nhi h:")
// }

 // yadi a = "3" b = 3  to ye true smjta hai 

if( a===b){

  console.log("a b ke barabr nhi h:")
}

   // --# Unary operators ++ , -- 
/*
      Increament ++ 
      Decreament -- 
      1) Increment                           |       2) Decrement 
       1.a) post Increment  i++              |        2.a) post Decrement  i++ 
       1.b) pre Increment   ++i              |           2.b) pre Decrement ++i  
         
       post                                  |  pre 
        
       eg - dhaba ;                          | eg- zamato 

          pahle hem khana                    |   pahle paisa dete fir khana khane ko milta hai
          kha lete hai                       |
          fir paise dete hai                 | 
         
        ase hi 
        let i = 1;                           |           let i = 1;
         console.log(i++);                   |               console.log(++i)
                                             |
         1 = khana                     
         console.log = use                   |             pahle paise dena hai 
     i++ =  paise dena ;(i = i+1 =>2)        |        ++i =  paise dena ;(i = i+1 =>2)
         to hm pahle 1 ko use               ||         ++i = 2  khana 
         krenge  1                           |                        
         then paisa denge                    |           ab use karna hai 2 ko 
         ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

       */ 




 



  













 
 
 

