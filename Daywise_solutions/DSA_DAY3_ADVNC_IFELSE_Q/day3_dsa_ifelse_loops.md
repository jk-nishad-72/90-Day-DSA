# Day 3 DSA Advance (if-else and loop)

## Q1. Leap Year

A leap year is divisible by 4 but not by 100, unless it is also
divisible by 400.

### Solution (JavaScript)

``` javascript
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is NOT a Leap Year.");
    }
}

// Example:
isLeapYear(2024);
isLeapYear(1900);
isLeapYear(2000);
```

------------------------------------------------------------------------

## Q2. Shop Discount Calculator

Accept amount and discount, then calculate final amount.

### Solution (JavaScript)

``` javascript
function shopDiscount(amount, discount) {
    let discountAmount = (amount * discount) / 100;
    let finalAmount = amount - discountAmount;

    console.log("Discount Amount: Rs. " + discountAmount);
    console.log("Final Amount after Discount: Rs. " + finalAmount);
}

// Example:
shopDiscount(1000, 10);
```

------------------------------------------------------------------------

## Q3. Electricity Bill (Bijli Bill)

Conditions: - Up to 100 units → Rs. 4.2/unit - 101--200 → Rs. 6/unit -
201--400 → Rs. 8/unit - More than 400 → Rs. 13/unit

### Solution (JavaScript)

``` javascript
function electricityBill(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 4.2;
    } else if (units <= 200) {
        bill = (100 * 4.2) + (units - 100) * 6;
    } else if (units <= 400) {
        bill = (100 * 4.2) + (100 * 6) + (units - 200) * 8;
    } else {
        bill = (100 * 4.2) + (100 * 6) + (200 * 8) + (units - 400) * 13;
    }

    console.log("Total Electricity Bill = Rs. " + bill);
}

// Example:
electricityBill(50);
electricityBill(150);
electricityBill(250);
electricityBill(450);
```

------------------------------------------------------------------------

## Loop Introduction

### For Loop (Entry Control)

``` javascript
for (let i = 1; i <= 5; i++) {
    console.log("Hello " + i);
}
```

### While Loop (Entry Control)

``` javascript
let i = 1;
while (i <= 5) {
    console.log("Hello " + i);
    i++;
}
```

### Do-While Loop (Exit Control)

``` javascript
let j = 1;
do {
    console.log("Hello " + j);
    j++;
} while (j <= 5);
```
