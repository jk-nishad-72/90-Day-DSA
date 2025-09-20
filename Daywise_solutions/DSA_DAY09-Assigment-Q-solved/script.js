
// * Q1.  Problem Statement: Indian Currency Notes Breakdown


var prompt = require('prompt-sync')()
let amount  = Number(prompt('Enter Rupees : '))

let Cnotes =0;

function PrintCurrentNotes(amount,Cnotes){
    
if(amount>=2000){
    Cnotes = Math.floor(amount/2000)
    amount = amount-(2000*Cnotes)
    console.log( '2000 * '+Cnotes)
   
 }
 if(amount>=500){
    Cnotes = Math.floor(amount/500)
    amount = amount-(500*Cnotes)
    console.log( '500 * '+Cnotes)
   
}
 if(amount>=200){
    Cnotes = Math.floor(amount/200)
    amount = amount-(200*Cnotes)
    console.log( '200 * '+Cnotes)
   
}
 if(amount>=100){
    Cnotes = Math.floor(amount/100)
    amount = amount-(100*Cnotes)
    console.log( '100 * '+Cnotes)
   
}
 if(amount>=50){
    Cnotes = Math.floor(amount/50)
    amount = amount-(50*Cnotes)
    console.log( '50 * '+Cnotes)
   
}
 if(amount>=20){
    Cnotes = Math.floor(amount/20)
    amount = amount-(20*Cnotes)
    console.log( '20 * '+Cnotes)
   
}
 if(amount>=10){
    Cnotes = Math.floor(amount/10)
    amount = amount-(10*Cnotes)
    console.log( '10 * '+Cnotes)
   
}
 if(amount>=5){
    Cnotes = Math.floor(amount/5)
    amount = amount-(5*Cnotes)
    console.log( '5 * '+Cnotes)
   
}
 if(amount>=2){
    Cnotes = Math.floor(amount/2)
    amount = amount-(2*Cnotes)
    console.log( '2 * '+Cnotes)
   
}
 if(amount>=1){
    Cnotes = Math.floor(amount/1)
    amount = amount-(1*Cnotes)
    console.log( '1 * '+Cnotes)
   
}



}

// console.log(PrintCurrentNotes(amount,Cnotes))



//* Que  2.Write a program to accept rating of the movie as double and Movie name as String. 
/**
 * Check and print the category of movie based on rating.
 *  Example 
 *  INPUT
 *  4.9 
 * RRR 
 * OP - RRR is a Super Hit.
 */

// let prompt = require('prompt-sync')()
 let movieName = prompt('Give any Movie Name : ')
 let rating = Number(prompt('Give Rating to Movie (0.0 to 5.0) :'))


 function MovieRating(r,n){
    if(isNaN(r) || r > 5.0) return 'Invalid Output '

    if(r<=5.0 && r>=4.6) return `${n} is a Super Hit.`
    else   if(  r<=4.5 && r>=3.5) return `${n} is a  Hit.`
    else   if(  r>=2.1 && r<=3.5) return `${n} is a Semi Hit.`
    else   if(  r>=0.0 && r<=2.0) return `${n} is a Flop.`
   else return `${n} is a Disaster`

 }
console.log(MovieRating(rating,movieName));



// * Que . 3   write a programm to calculate  Salary  as per the followign table 

let prompt = require('prompt-sync')();

console.log(" kown your salary ")

let gender = prompt("Enter Your Gender(male/female): ")
let experiece ;
let graduation;


if(gender==='male'){

        
    graduation = prompt("Enter your Graduation (Post-Graduate/Graduate): ")

    experiece = Number(prompt("Enter Your experience (in Year): "))

    if(graduation ==='post-graduate' && experiece >=10){

        console.log(" your salary is : 15000");

    }else if(graduation ==='post-graduate' && experiece <10){

        console.log(" your salary is : 10000");
        
    } else if(graduation ==='graduate' && experiece >=10){

        console.log(" your salary is : 10000");
        
    } else if(graduation ==='graduate' && experiece<10){

        console.log(" your salary is : 7000");   
    }
}
else 

if(gender==='female'){

        
    graduation = prompt("Enter your Graduation (Post-Graduate/Graduate): ")

    experiece = Number(prompt("Enter Your experience (in Year): "))

    if(graduation ==='post-graduate' && experiece >=10){

        console.log(" your salary is : 12000");

    }else if(graduation ==='post-graduate' && experiece <10){

        console.log(" your salary is : 10000");
        
    } else if(graduation ==='graduate' && experiece >=10){

        console.log(" your salary is : 9000");
        
    } else if(graduation ==='graduate' && experiece<10){

        console.log(" your salary is : 6000");
        
    }



}






