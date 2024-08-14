var productinfo = document.querySelector(".product-info-item1");
var productimg = document.querySelector(".product-img-item1");
var productlocation = document.querySelector(".location-menu-item1");

function productInfo() {
  productinfo.style.display ="block";
  productimg.style.display ="none";
  productlocation.style.display ="none"
}

function productImg() {
  productinfo.style.display ="none";
  productimg.style.display ="block";
  productlocation.style.display ="none"
}

function productLocaiton() {
  productinfo.style.display ="none";
  productimg.style.display ="none";
  productlocation.style.display ="block"
}