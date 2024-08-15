var productinfo = document.querySelector(".product-info-item1");
var productimg = document.querySelector(".product-img-item1");
var productlocation = document.querySelector(".location-menu-item1");
var locationIcon = document.querySelector(".location-icon");
var downOne = document.querySelector(".arrow1")
var downTwo = document.querySelector(".arrow2")
var downThree = document.querySelector(".arrow3")
var btnOne = document.querySelector(".product-info-menu");
var btnTwo = document.querySelector(".product-img-menu");
var btnThree = document.querySelector(".location-menu");
downOne.style.display ="block";
btnOne.style.color ="#3ace4f";
function productInfo() {
  productinfo.style.display ="block";
  productimg.style.display ="none";
  productlocation.style.display ="none"
  btnOne.style.color ="#3ace4f";
  btnTwo.style.color ="#23215c";
  btnThree.style.color ="#23215c";
  locationIcon.style.backgroundColor ="#23215c"
  downOne.style.display ="block";
  downTwo.style.display ="none";
  downThree.style.display ="none";
}

function productImg() {
  productinfo.style.display ="none";
  productimg.style.display ="block";
  productlocation.style.display ="none"
  btnOne.style.color ="#23215c";
  btnTwo.style.color ="#3ace4f";
  btnThree.style.color ="#23215c";
  locationIcon.style.backgroundColor ="#23215c"
  downOne.style.display ="none";
  downTwo.style.display ="block";
  downThree.style.display ="none";
}

function productLocaiton() {
  productinfo.style.display ="none";
  productimg.style.display ="none";
  productlocation.style.display ="block"
  btnOne.style.color ="#23215c";
  btnTwo.style.color ="#23215c";
  btnThree.style.color ="#3ace4f";
  locationIcon.style.backgroundColor ="#3ace4f"
  downOne.style.display ="none";
  downTwo.style.display ="none";
  downThree.style.display ="block";
}
// hide show btn 
const hideShowItem = document.querySelector(".product-details");
const hideShowItemIcon = document.querySelector(".product-details i");
function hideShowButton() {
 if(hideShowItem.style.marginTop ==="") {
  hideShowItem.style.marginTop ="36rem";
 }
 else{
  hideShowItem.style.marginTop =""
  console.log("err")
 }
  
}