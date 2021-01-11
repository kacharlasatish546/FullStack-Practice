var itemsListElm = document.getElementById("items");

let itemsList1 = require('/Users/skacharla/Desktop/Project/Practice/07Jan2021/carList.json');
//var itemsList = JSON.parse(itemsList1);
console.log(itemsList1);
itemsListElm = itemsList1[0].name;


// var itemsList = [
//     {
//         name: "Tiago",
//         price: "₹ 4.70 Lakh",
//         image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tata-tiago-right-front-three-quarter3.jpeg?q=85",
//         rating: "4"
//     },
//     {
//         name: "Tigor",
//         price: "₹ 5.39 Lakh",
//         image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tata-tigor-right-front-three-quarter3.jpeg?q=85",
//         rating: "4"
//     },
//     {
//         name: "Altroz",
//         price: "₹ 5.44 Lakh",
//         image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg?q=85",
//         rating: "4"
//     },
//     {
//         name: "Harrier",
//         price: "₹ 13.84 Lakh",
//         image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/32958/tata-harrier-right-front-three-quarter58.jpeg?q=85",
//         rating: "4"
//     },
//     {
//         name: "Indica",
//         price: "Rs.2.77 Lakh - 4.25 Lakh",
//         image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tata-Indica/864/1563257207175/front-left-side-47.jpg?tr=w-456",
//         rating: "4"
//     },
//     {
//         name: "Nexon",
//         price: "₹ 7.00 Lakh",
//         image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=85",
//         rating: "4"
//     },
//     {
//         name: "Gravitas",
//         price: "₹ 18.00 - 23.00 Lakh",
//         image: "https://imgd.aeplcdn.com/664x374/cw/ec/40027/Tata-Buzzard-Exterior-170046.jpg?wm=0&q=85",
//         rating: "4"
//     },
//     {
//         name: "HBX",
//         price: "₹ 5.00 - 8.00 Lakh",
//         image: "https://imgd.aeplcdn.com/664x374/cw/ec/39015/Tata-H2X-Exterior-170093.jpg?wm=0&q=85",
//         rating: "4"
//     }
// ];



// displayAllCars();

// function displayAllCars() {
//     var index = 0;
//     itemsListElm.innerHTML = "";
//     while (index < itemsList.length) {
//         var item = itemsList[index];
//         itemsListElm.innerHTML += "<li>" + item.name + " : " + 
//             "<Strong>"+item.price +"</Strong>"+ "<span>" + item.rating + "*</span>" + "<br><img src='" + item.image + "'>" + "</li>";
//         index++;
//     }
// }

// function displayCars() {
//     var index = 0;
//     var selectedCar = document.getElementById("car_id").value;
//     itemsListElm.innerHTML = "";
//     while (index < itemsList.length) {
//         var item = itemsList[index];
//         console.log(item.name + " Selected Car : " + selectedCar);
//         if (selectedCar == item.name) {
//             itemsListElm.innerHTML += "<li>" + item.name + " : " + item.price + "<span>" + item.rating + "*</span>" + "<br><img src='" + item.image + "'>" + "</li>";
//             break;
//         }
//         if (selectedCar == "All Cars") {
//             displayAllCars();
//             break;
//         }
//         index++
//     }
 //}