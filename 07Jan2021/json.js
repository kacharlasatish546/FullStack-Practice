// var array = ["154","123","36","32","24","23","13","14"];

// // function sortValues(a, b) {
   
// //     let comparison = 0;
// //     if (a > b) {
// //         comparison = 1;
// //     } else if (a < b) {
// //         comparison = -1;
// //     }
// //     return comparison;
// // }

// function s(){
//     array.sort(function(a, b){
//         return a - b;
//     });
// }

// s();

// //array.sort(sortValues);
// console.log(array);


var points = [40, 100, 1, 5, 25, 10];
//document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function(a, b){return a-b});
  console.log(points);
  //document.getElementById("demo").innerHTML = points[0];
}

myFunction();