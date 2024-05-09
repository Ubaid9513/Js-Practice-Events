// function greet(){
//     alert("Assalam O Aliakum");
// }


// function changebg(element) {
//     element.style.backgroundColor = "#f69223";
//     }

// function bg(color){
//     color.style.backgroundColor = "cyan";
// }

// function getProduct() {
//   var product = document.getElementById("product");

//   console.log(product.value);
// }
// var emailInp = document.getElementById("email");
// function checkAddress(event) {
//   event.preventDefault();
//   console.log(emailInp.value);
// }
// function setDefault() {
//   emailInp.value = "Enter Email";
// }
// setDefault();
// var form = document.getElementById("productForm");
// form.addEventListener("submit", checkAddress);
// var form = document.getElementById("productForm");
// form.addEventListener("submit", checkAddress);

  // ---X---

// var fullPara =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option hidden ratione debitis temporibus id recusandae labore maiores iure, ullam dicta velit ipsam possimus laborum fugit. In, nemo ad! Nobis, id. Deserunt ab accusantium iure suscipit culpa fugit quaerat asperiores. <a href='Javascript: void(0)' onclick='shrinkPara()'>see less</a>";
// var shortpara =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option  <a href='Javascript: void(0)' onclick='expandPara()'>see more</a>";

// var para = document.getElementById("para");
// function expandPara() {
//     // console.log(para.innerText);
//     // console.log(para.innerHTML);

//   para.innerHTML = fullPara;
// }
// function shrinkPara() {
//   para.innerHTML = shortpara;
// }

// var fullPara2 =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option hidden ratione debitis temporibus id recusandae labore maiores iure, ullam dicta velit ipsam possimus laborum fugit. In, nemo ad! Nobis, id. Deserunt ab accusantium iure suscipit culpa fugit quaerat asperiores. <a href='Javascript: void(0)' onclick='shrinkPara2()'>see less</a>";
// var shortPara2 =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option  <a href='Javascript: void(0)' onclick='expandPara2()'>see more</a>";

// var para2 = document.getElementById("para2");
// function expandPara2(){
//     para2.innerHTML = fullPara2;
// }
// function shrinkPara2(){
//     para2.innerHTML = shortPara2;
// }

  // ---X---

//   function getName(){
//   var name = document.getElementById("xyz")
//   console.log(name.value);
//   name.value = "";
// }


// function setName(){
//   var name = document.getElementById("xyz");
//   name.value = "Ubaid";
//   var para = document.getElementById("para");
//   para.innerHTML = "Hello! This is example"
// }
// setName();

// ---X---

function readMore(){
  var text =document.getElementById("text").innerHTML;
  var para = document.getElementById("para");
  para.innerHTML = text;
}

// ---X---
// Swapping images chapter

// function changeImg(){
//   var car = document.getElementById("car");
//   car.src = "./images/img02.jpg";
  
// } 
// function changeImgBefore(){
//   var car = document.getElementById("car");
//   car.src = "./images/img01.jpg"

// }

// function changeImage(id,src){
//   var image = document.getElementById(id);
//   image.src = src;
// }

// ---X---
//  Target all elements by tag name


// var para = document.getElementsByTagName("p");
// para[0].style.color = "red";
// for (var i = 0; i<para.length; i++){
//   para[i].style.color = "blue";
// }


// var parent = document.getElementById("parent");
// var para = parent.getElementsByTagName("p");
// for (i = 0; i<para.length; i++){
//   para[i].style.color = "red";
// }


// var parent = document.getElementById("parent");
// var para = parent.getElementsByTagName("p");
// for(var i = 0; i<para.length; i++){
//   para[i].style.color = "blue";
// }

// ---X---
// set interval

// function timer(){
//   console.log("running...");
// }
// setInterval(timer,1000);

// set timeout

// function timeOut(){
//   console.log("Time up");
// }
// setTimeout(timeOut,2000);

// ---next---

// var count = 0;
// var interval;
// function timer(){
//   count++
//   console.log(count);
// }
// interval = setInterval(timer,1000);

// setTimeout(function(){
//   clearInterval(interval);
// },5000);

