function greet(){
    alert("Assalam O Aliakum");
}


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


var fullPara =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option hidden ratione debitis temporibus id recusandae labore maiores iure, ullam dicta velit ipsam possimus laborum fugit. In, nemo ad! Nobis, id. Deserunt ab accusantium iure suscipit culpa fugit quaerat asperiores. <a href='Javascript: void(0)' onclick='shrinkPara()'>see less</a>";
var shortpara =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option  <a href='Javascript: void(0)' onclick='expandPara()'>see more</a>";

var para = document.getElementById("para");
function expandPara() {
    // console.log(para.innerText);
    // console.log(para.innerHTML);

  para.innerHTML = fullPara;
}
function shrinkPara() {
  para.innerHTML = shortpara;
}

var fullPara2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option hidden ratione debitis temporibus id recusandae labore maiores iure, ullam dicta velit ipsam possimus laborum fugit. In, nemo ad! Nobis, id. Deserunt ab accusantium iure suscipit culpa fugit quaerat asperiores. <a href='Javascript: void(0)' onclick='shrinkPara2()'>see less</a>";
var shortPara2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, recusandae maxime. Ullam repellat voluptatem porro quibusdam option  <a href='Javascript: void(0)' onclick='expandPara2()'>see more</a>";

var para2 = document.getElementById("para2");
function expandPara2(){
    para2.innerHTML = fullPara2;
}
function shrinkPara2(){
    para2.innerHTML = shortPara2;
}

