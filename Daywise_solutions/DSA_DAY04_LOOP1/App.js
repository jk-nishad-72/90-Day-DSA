
//*✅ Q1. Print "Hello World" N Times

var hello = document.querySelector('.say-hello')
let sum = ''


let n = Number(prompt("Enter a Number: "))
for(let i = 1;i<=5;i++){
     sum += ' <h1> Namaste coders🎉 </h1>'
}

hello.innerHTML = sum



//*✅ Q2. Print Natural Numbers up to N [use 'process.stdout.write(i+ " ") for print in one line']



for(let j =1;j<=n;j++){
  console.log(j + " ")

}

//*✅ Q3. Reverse Loop (Print N to 1)

for(let k =n;k>0;k--){
  console.log(k + " ")

}


// * ✅ Q4. Table of a Number (up to 10 terms)

  for (let i = 1; i <=10; i++) {
    console.log(n + "* "+ i + " =>" + n*i )
    
  }


// *✅ Q5. Sum Up to N Terms

let sumOfNTerm =0;
 for(let i = 1;i<=n;i++){
 
    sumOfNTerm +=i;
 }
 console.log(sumOfNTerm)


// * ✅ Q6. Factorial of a Number
let fact =1;
 for(let i = 1;i<=n;i++){
 
    fact *=i;
 }
 console.log(fact)


// *✅ Q7. Sum of Even and Odd Numbers in Range

 let EvenSum =0 ,OddSum= 0;
for(let i =1;i<=n;i++){
    if(i%2==0) EvenSum += i
    else OddSum +=i 
}
console.log(EvenSum,OddSum)



//* ✅ Q8. All Factors of a Number

 for(let i =1;i<=n/2;i++)
 {
     if(n%2==0) {console.log(i) }
 }

// ✅ Q9. Check Prime (Three Methods) 











