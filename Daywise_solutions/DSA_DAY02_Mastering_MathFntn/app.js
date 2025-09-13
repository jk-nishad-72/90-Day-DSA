
console.log(Math.round(12.4))
console.log(Math.round(12.6))

console.log(Math.ceil(45.90))
console.log(Math.floor(45.90))

console.log(Math.trunc(189.9098394))

console.log(Math.pow(45,9))
console.log(Math.sqrt(81))
console.log(Math.cbrt(27))
console.log(Math.abs(-90))
console.log(Math.max(27,70))
console.log(Math.min(27,70))
console.log(Math.random())
console.log((27.900870).toFixed(3))
console.log((27.900870).toFixed(0))
console.log(Math.PI)



  //* Math Problems 

  /* 
   1 calculate compount Interest 

    formula 
    CI = A - P , WHERE A = P * ((1 + R/100)^T)
     
  */


let  p = Number(prompt("Enter value of Principle : "))
let  r = Number(prompt("Enter value of rate : "))
let  t = Number(prompt("Enter value of time : "))

 let a = p * (Math.pow((1 + r/100),t))

 console.log((a-p).toFixed(2))


 //* 2 area of triangle by  Herons formula 

 function calculateTriangleArea(a, b, c) {
   
    
    if(a+b <= c && a+c <= b && c+b <= a){
        console.log("Invalid Input")
    }else{
        let s = (a+b+c)/2
        
         let A = Math.sqrt(s*(s-a)*(s-b)*(s-c))
         
         return A.toFixed(2)
    }
}

console.log(calculateTriangleArea(5,6,7))


//* Q3 generate OTP (4-digit)


 function generateOTP(){

     return Math.floor(1000 +Math.random()*9000)
 }

console.log(generateOTP())


// * Q4 Circumference  and area of Circle

function calculateCircleProperties(r) {
  
    
     let  c = (2 * Math.PI * r).toFixed(2);
     let a = (Math.PI * r * r).toFixed(2);
     
     return [c,a]
}

console.log(calculateCircleProperties(9))



//*🔁 IF-ELSE Problems

//*✅ Q5. Print Greatest of Two Numbers


function greater(a, b) {
     
     if(a>b) return a
     else return b
   
}
console.log(greater(5, 10))


//*✅ Q6. Even or Odd
function evenOdd(n) {
  if (n % 2 === 0) console.log("Even");
  else console.log("Odd");
}


console.log(evenOdd(7))

//* ✅ Q7. Voter Eligibility

function checkVoterEligibility(name, age) {

    
    if(age === 18 || age > 18) return name+" is a valid voter."
    else return name+" is not a valid voter."
}

console.log(checkVoterEligibility("jay" , 20))



//*✅ Q8. Greatest Among Three Numbers


function greatest(a, b, c) {

    if(a>=b && a>=c) return a
    else if(b>=a && b>=c) return b
    else return c
    
  
}

console.log(greatest(10, 30, 20))


// * ✅Q9 Homework  Accept year and print is leap year or not 

function isLeapYear(year) {
    
    if(year%400 ===0 || year%4==0 && year%100!=0) return "Leap Year"
    else return "Not a Leap Year"
    
}

console.log(isLeapYear(1900))












