/**
 * Header functions
 * Shows submenu if exists and changes header colors
 * @type {Element}
 */
var header = document.querySelector('nav li');

header.addEventListener("mouseenter", headerOpen);
header.addEventListener("mouseleave", headerClose);
document.querySelector(".dropdownmenu").addEventListener("click", dropdownClose);

function headerOpen(){
  ChangeHeaderToBlack(false);
}

function headerClose(){
  ChangeHeaderToWhite();
}

function dropdownClose() {
  console.log('click');
  document.querySelector(".dropdownmenu").style.display = 'none';
}


function ChangeHeaderToBlack(transparent){
  document.querySelector(".dropdownmenu").style.display = '';
  var header = document.querySelector('header');
  // add active state to header nav items
  var navLinks = document.querySelectorAll('header li a');
  if(!transparent) {
    header.classList.add('active');
  }
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('black');
  }

  // change logo color black
  var logo = document.querySelectorAll('.logo .st0');
  for (var i = 0; i < logo.length; i++) {
    logo[i].classList.add('black');
  }

  //change mobile menu to black
  document.querySelector("#hamburger__menu path").classList.add('black--stroke');
  document.querySelector(".cart__amount").classList.add('white');
  var cartIcon = document.querySelectorAll("#cart__menu path");
  for (var i = 0; i < cartIcon.length; i++) {
    cartIcon[i].classList.add('black--stroke');
  }


}


function ChangeHeaderToWhite(){
  var header = document.querySelector('header');
  header.classList.remove('active');

  // remove active state to header nav items
  var navLinks = document.querySelectorAll('header li a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('black');
  }

  // change logo color to default
  var logo = document.querySelectorAll('.logo .st0');
  for (var i = 0; i < logo.length; i++) {
    logo[i].classList.remove('black');
  }

  //change mobile menu to default
  document.querySelector("#hamburger__menu path").classList.remove('black--stroke');
  document.querySelector(".cart__amount").classList.remove('white');
  var cartIcon = document.querySelectorAll("#cart__menu path");
  for (var i = 0; i < cartIcon.length; i++) {
    cartIcon[i].classList.remove('black--stroke');
  }
}



/**
 * Scrolling functions
 * checks if hero is in viewport change header colors
 * @type {Element}
 */

// check scroll position
window.addEventListener('scroll', function() {
  var hero = document.querySelector('.hero');
  isScrolledIntoView(hero);
});

// check if element is in viewport
function isScrolledIntoView(element) {

  var scroll = window.scrollY;
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  var header = document.querySelector('header');
  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;

  if (isVisible) {
    // console.log(scroll);
    if(!header.classList.contains('active')){
      ChangeHeaderToWhite();
    }

  } else {
    // console.log('hero is not visible');
    ChangeHeaderToBlack(true);
  }

}



/**
 * Change variant option bg color
 * Gets variant url and change color of variant
 * @type {Element}
 */

var products = document.querySelectorAll('.product');
for (var i = 0; i < products.length; i++) {
  products[i].addEventListener('pointerenter', checkVariant);
}

function checkVariant(){
  var productVariant = this.querySelector('.product__variants');
  var variantsColorList = [];
  var variantsList = this.querySelectorAll('.product__variants li');



  var productHasVariants = this.querySelector('.product__variants');
  if(!productHasVariants){
    this.querySelector('.product__inner').classList.add('visible');
  }

  if(productVariant)
  {
    var variants = productVariant.querySelectorAll('li a');
    for (var i = 0; i < variants.length; i++) {
      //get value of last dash in url
      var variantURL = variants[i].getAttribute("href");
      var uri = variantURL;
      var lastslashindex = uri.lastIndexOf('-');
      var result= uri.substring(lastslashindex  + 1);

      //push values to array
      variantsColorList.push(result);
    }

    changeVariantColor(variantsList,variantsColorList);
  }
}
// set color of variant list on product
function changeVariantColor(variantsList,variantsColorList){
  for (var i = 0; i < variantsList.length; i++) {
    variantsList[i].classList.add("bg-"+variantsColorList[i]);
  }
}







