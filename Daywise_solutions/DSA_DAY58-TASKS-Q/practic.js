
let prompt = require('prompt-sync')();


let shap = prompt("Enter the shape you want to calculate Area (cicle/squar/rectangle/triangle): ").toLowerCase();

function area_circle(){
    let radius = parseFloat(prompt("Enter the radius of the circle: "));
    let area = Math.PI * radius * radius;
    return area;

}
function area_squar(){
    let side = parseFloat(prompt("Enter the side of the squar: "));
    let area = side * side;
    return area;
}


function arearectangle(){
    let length = parseFloat(prompt("Enter the length of the rectangle: "));
    let breadth = parseFloat(prompt("Enter the breadth of the rectangle: "));
    let area = length * breadth;
    return area;
}

function areatriangle(){
    let base = parseFloat(prompt("Enter the base of the triangle: "));
    let height = parseFloat(prompt("Enter the height of the triangle: "));
    let area = 0.5 * base * height;
    return area;
}

switch(shap){
    case('circle'):
       let Area_of_circle = area_circle();
       console.log("Area of Circle is: " + Area_of_circle.toFixed(2));
       break;
    case('square'):
       let Area_of_squar = area_squar();
       console.log("Area of Circle is: " + Area_of_squar.toFixed(2));
       break;
    case('rectangle'):
       let area_rectangle = arearectangle();
       console.log("Area of Rectangle is: " + area_rectangle.toFixed(2));
       break;
   case('triangle'):
          let area_triangle =  areatriangle();
          console.log("Area of Triangle is: " + area_triangle.toFixed(2));
          break;
    default:
        console.log("Invalid shape!");
}


//* linearSearch 

function linearSearch(arr, target) {
    for(let i = 0;i<arr.length;i++){
         if(arr[i] == target){
              return i
         }
    }
    return -1
}
let arr = [10,20,30,40,50];
let target = 30;
let result = linearSearch(arr, target); 
console.log("Element found at index: " + result);

// Binary Search

function BinarySearch(arr,target){

let first = 0;
let last = arr.length -1;
while(first<=last){
     
     let mid = Math.floor((first+last)/2)

     if(arr[mid] == target) return mid;
     else if(arr[mid] < target) first = mid + 1;
     else last = mid -1;
}
}
let arr1 = [10,20,30,40,50,60,70,80,90];
let target1 = 70;
let result1 = BinarySearch(arr1,target1);
console.log("Element found at index: " + result1);


