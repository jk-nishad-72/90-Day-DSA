


// * ✅ Q 1)leap year 

function checkLeapYear(year){

  if(year%4 == 0 && year%100!==0 || year%400==0) return "leap Year"
  else return "Not Leap Year"

}

// let year = Number(prompt("Enter a Year : "))
//  var leap = (checkLeapYear(year))

// var yearcontainr = document.querySelector('.year')

// yearcontainr.innerHTML = `<h2> ${year} is ${leap}</h2>`

 

 // * ✔️✅Q2) shop discount 

function calculateFinalAmount(amount) {
    
    let discount ;
    if(amount>=0&&amount<=5000) discount = 0;
    else if(amount>=5001&&amount<=7000) discount = 5;
    else if(amount>=7001&&amount<=9000) discount = 10;
     else discount = 20;
    return  amount-((discount/100)*amount)
}


console.log(calculateFinalAmount(9000))


  
//* ✅✔️Q 3) bijli bill


function calculateElectricyBil(unit){

       let bil = 0;

       if(unit>400)
        { bil = (unit-400)*13 , unit = 400  }
        if(unit>=201&&unit<=400)
        { bil = bil+(unit-200)*8, unit = 200  }
         if(unit>=101&& unit<=200)
        { bil = bil+(unit-100)*6 , unit = 100  }
           
         bil = bil+unit*4.2

         return bil.toFixed(1)

       
     
}

console.log(calculateElectricyBil(500))
