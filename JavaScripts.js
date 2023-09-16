// PRODUCT DISPLAY
var products = [
  { img: "assets/products/1.jpg", name: "PIPES" },
  { img: "assets/products/2.jpg", name: "PIPES" },
  { img: "assets/products/3.jpg", name: "PIPES" },
  { img: "assets/products/4.jpg", name: "PIPES" },
  { img: "assets/products/5.jpg", name: "PIPES" },
  { img: "assets/products/6.jpg", name: "PIPES" },
  { img: "assets/products/7.jpg", name: "PIPES" },
  { img: "assets/products/8.jpg", name: "PIPES" },
];

var gridContainer = document.getElementById("products");

for (var i = 0; i < products.length; i++) {
  var product = products[i];

  var productDiv = document.createElement("div");
  productDiv.classList.add("products-image");

  var imgElement = document.createElement("img");
  imgElement.src = product.img;
  imgElement.alt = "PIPES";
  imgElement.classList.add("img");

  var nameElement = document.createElement("h6");
  nameElement.classList.add("h6");
  nameElement.textContent = product.name;

  productDiv.appendChild(imgElement);
  productDiv.appendChild(nameElement);

  gridContainer.appendChild(productDiv);
}
