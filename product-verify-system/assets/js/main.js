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
// genuin product===
const genuinSction = document.querySelector(".geneuin-product-container");
const hideShowItem = genuinSction.querySelector(".product-details");
const hideShowItemIcon = genuinSction.querySelector(".show-hide-btn i");

function geneuinProductHideShowButton() {
 if(hideShowItem.style.transform ==="translateY(0px)") {
  hideShowItem.style.transform ="translateY(265px)";
  hideShowItemIcon.style.transform ="rotate(180deg)";
 }
 else{
  hideShowItem.style.transform ="translateY(0px)"
  hideShowItemIcon.style.transform ="rotate(0deg)";
 }
};
// product sold 
const productSoldSction = document.querySelector(".product-sold-container");
const soldHideShowItem = productSoldSction.querySelector(".product-details");
const soldHideShowItemIcon = productSoldSction.querySelector(".show-hide-btn i");
const soldLocationIcon = productSoldSction.querySelector(".arrow3");
soldLocationIcon.style.display ="block"
soldLocationIcon.style.color ="red"
function productSoldHideShowButton() {
  if(soldHideShowItem.style.transform ==="translateY(0px)") {
   soldHideShowItem.style.transform ="translateY(265px)";
   soldHideShowItemIcon.style.transform ="rotate(180deg)";
  }
  else{
   soldHideShowItem.style.transform ="translateY(0px)"
   soldHideShowItemIcon.style.transform ="rotate(0deg)";
  }
 };
// no product 
const noProductSction = document.querySelector(".noproduct-container");
const noProductHideShowItem = noProductSction.querySelector(".product-details");
const noProductshowItemIcon = noProductSction.querySelector(".show-hide-btn i");
function noProductSoldHideShowButton() {
  if(noProductHideShowItem.style.transform ==="translateY(0px)") {
    noProductHideShowItem.style.transform ="translateY(265px)";
    noProductshowItemIcon.style.transform ="rotate(180deg)";
  }
  else{
    noProductHideShowItem.style.transform ="translateY(0px)"
    noProductshowItemIcon.style.transform ="rotate(0deg)";
  }
 };

