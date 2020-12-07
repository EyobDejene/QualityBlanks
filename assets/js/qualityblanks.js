
/**
 * Header functions
 * Shows submenu if exists and changes header colors
 * @type {Element}
 */
//let header = document.querySelector('nav li');
let navWithMenu = document.querySelectorAll('header li');
// console.log(navWithMenu);
let dropdownMenu  = document.querySelector(".dropdownmenu");

for (let i = 0; i < navWithMenu.length; i++) {
  if(navWithMenu[i].parentNode.classList.contains('main__menu')){
    navWithMenu[i].addEventListener("mouseenter", checkHasMenu);
  }
}

function checkHasMenu(){
 if(this.querySelector('.dropdownmenu')){
   headerOpen();
   dropdownMenu.classList.add('dropdownmenu--active');
   console.log('header open');

 }else{
   dropdownMenu.classList.remove('dropdownmenu--active');
   headerClose();
 }

}

dropdownMenu.addEventListener("click", dropdownClose);

function headerOpen(){
  changeHeaderColors(false);
}

function headerClose(){
  changeHeaderColors(true);
}

function dropdownClose() {
  console.log('click');
  dropdownMenu.classList.remove('dropdownmenu--active');
  changeHeaderColors(true);
}


function ChangeHeaderToBlack(transparent){
  dropdownMenu.style.display = '';
  let header = document.querySelector('header');
  // add active state to header nav items
  let navLinks = document.querySelectorAll('header li a');
  if(!transparent) {
    header.classList.add('active');
  }
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('header__navigation--black');
    navLinks[i].classList.remove('header__navigation--white');
  }

  // change logo color black
  let logo = document.querySelectorAll('.logo .st0');
  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.add('header__navigation--black');
  }


  // change searchbar to black
  document.querySelector(".header__searchbar input").classList.add('header__navigation--black');
  document.querySelector(".header__searchbar .input__group--addon").classList.add('header__navigation--black');

  //change loupe to black
  document.querySelector(".header__loupe .st0").classList.add('header__navigation--black');

  //change mobile menu to black
  document.querySelector("#hamburger__menu path").classList.add('black--stroke');
  document.querySelector(".cart__amount").classList.add('header__navigation--white');
  let cartIcon = document.querySelectorAll("#cart__menu path");
  for (let i = 0; i < cartIcon.length; i++) {
    cartIcon[i].classList.add('black--stroke');
  }


}


function ChangeHeaderToWhite(){
  let header = document.querySelector('header');
  header.classList.remove('active');

  // remove active state to header nav items
  let navLinks = document.querySelectorAll('header li a');
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('header__navigation--black');
    navLinks[i].classList.add('header__navigation--white');
  }

  // change logo color to default
  let logo = document.querySelectorAll('.logo .st0');
  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.remove('header__navigation--black');
    logo[i].classList.add('header__navigation--white');
  }

  // change searchbar to default
  document.querySelector(".header__searchbar input").classList.remove('header__navigation--black');
  document.querySelector(".header__searchbar .input__group--addon").classList.remove('header__navigation--black');

  //change loupe to black
  document.querySelector(".header__loupe .st0").classList.remove('header__navigation--black');

  //change mobile menu to default
  document.querySelector("#hamburger__menu path").classList.remove('black--stroke');
  document.querySelector(".cart__amount").classList.remove('header__navigation--white');
  let cartIcon = document.querySelectorAll("#cart__menu path");
  for (let i = 0; i < cartIcon.length; i++) {
    cartIcon[i].classList.remove('black--stroke');
  }
}



// function check if page homepage and change header colors
function changeHeaderColors(state){
  if(state) {
    if (!checkIfHomePage()) {
      ChangeHeaderToWhite();
      ChangeHeaderToBlack(state);
    } else {
      ChangeHeaderToWhite();
      console.log('add white');
    }
  }else{
    if(checkIfHomePage()){
      ChangeHeaderToBlack(state);
    }else{
      ChangeHeaderToWhite();
      ChangeHeaderToBlack(state);
    }
  }
}


/**
 * Scrolling functions
 * checks if hero is in viewport change header colors
 * @type {Element}
 */

// check scroll position
window.addEventListener('scroll', function() {
  let hero = document.querySelector('.hero');
  if(hero){
    isScrolledIntoView(hero);
  }

});

// check if element is in viewport
function isScrolledIntoView(element) {

  let scroll = window.scrollY;
  let rect = element.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;
  let header = document.querySelector('header');
  // Only completely visible elements return true:
  let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

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
let products = document.querySelectorAll('.product');
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('pointerenter', checkVariant);
}

// product touch end reset variant info
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('touchend', resetVariant);
}

// product touch start show variant info
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('touchstart', showVariant);
}

//redirect to product with hammerjs
for (let i = 0; i < products.length; i++) {
  // products[i].addEventListener('touchend', openUrl);
  var mc = new Hammer.Manager(products[i]);
  mc.add( new Hammer.Tap({ event: 'singletap' }) );
  mc.on("singletap", function(e) {
    let $this = e.target.offsetParent;
    openUrl($this);
  });

}




let productVariant = document.querySelector('.product__details');
if(productVariant){
  checkVariant(true);
}

function checkVariant(detail) {
  let $this = this;
  if (detail === true){
    $this = document.querySelector('.product__details');
  }
  let productVariant = $this.querySelector('.product__variants');
  let variantsColorList = [];
  let variantsList = $this.querySelectorAll('.product__variants li');



  let productHasVariants = $this.querySelector('.product__variants');
  if(!productHasVariants){
    let productInner = $this.querySelector('.product__inner');
    if(productInner){
      productInner.classList.add('visible');
    }

  }

  if(productVariant)
  {
    let variants = productVariant.querySelectorAll('li a');
    for (let i = 0; i < variants.length; i++) {
      //get value of last dash in url
      let variantURL = variants[i].getAttribute("href");
      let uri = variantURL;
      let lastslashindex = uri.lastIndexOf('-');
      let result= uri.substring(lastslashindex  + 1);

      //push values to array
      variantsColorList.push(result);
    }

    changeVariantColor(variantsList,variantsColorList);
  }
}
// set color of variant list on product
function changeVariantColor(variantsList,variantsColorList){
  for (let i = 0; i < variantsList.length; i++) {
    variantsList[i].classList.add("bg-"+variantsColorList[i]);
  }
}


// set product to default state
function resetVariant(){
  this.querySelector('.product .product__inner').style.visibility = 'visible';
  if(this.querySelector('.product .product__variants')){
    this.querySelector('.product .product__variants').style.visibility = 'hidden';
  }
  this.querySelector('.product .product__image--second').style.display = 'none';

}

// reset first image to default state
function showVariant(){
  this.querySelector('.product .product__inner').style.visibility = 'hidden';
  if(this.querySelector('.product .product__variants')){
    this.querySelector('.product .product__variants').style.visibility = 'visible';
  }
  this.querySelector('.product .product__image--second').style.display = 'block';

}

// function to call when product is clicked
function openUrl($this){
  let productUrl = $this.querySelector('.product a').getAttribute("href");
  window.location.href = productUrl;
}



/**
 * Activate searchbar
 * When user clicks on search logo will
 * disappear and searchbar showsup
 * @type {Element}
 */

let searchBtn = document.querySelector('.header__usernav--search');
searchBtn.addEventListener('click', activateSearchBar);

// set color of letiant list on product
function activateSearchBar(event){
  event.preventDefault();

  let searchBar = document.querySelector('.header__searchbar');
  let headerLogo = document.querySelector('.header__logo .logo');

  headerLogo.classList.toggle('fadeOut');
  searchBar.classList.toggle('fadeIn');



  let initial;
  function invocation() {
    console.log('invoked');
    initial = window.setTimeout(
        function() {
          resetHeader();
        }, 5000);
  }
  invocation();


  let searchForm = document.querySelector(".header__searchfield");
  searchForm.addEventListener("keypress",function() {
    clearTimeout(initial);

  });


  function resetHeader(){
    headerLogo.classList.toggle('fadeOut');
    searchBar.classList.toggle('fadeIn');

  }


}






/**
 * Submit search form
 * When user hits enter key form submitted
 * @type {Element}
 */
let searchForm = document.querySelector(".header__searchfield");
searchForm.addEventListener("keypress",submitForm);

function submitForm(e){
  let code = e.keyCode || e.which;
  let searchField = document.querySelector(".header__searchfield");

  if (code == 13) {
    e.preventDefault();
    let inputLenght = searchField.value.length;
    if(inputLenght > 0 ){
      document.querySelector("#search").submit();
    }else{
      return false;
    }
  }
}



/**
 * Check if page is home page
 * Change header colors
 * @type {Element}
 */
checkIfHomePage();
function checkIfHomePage() {
  let isHomepage = document.querySelector('body').classList.contains('home');
  console.log(document.location.pathname);
  if(isHomepage){
    return true;
  }else{
    document.querySelector('.header__navigation').classList.add('header__navigation--border');
    // first parameter sets header to transparent
    ChangeHeaderToBlack(true);
    return false;
  }

}



/**
 * Detail page accordion
 * Detail page open / close accordion
 * @type {Element}
 */
let accordion =  document.querySelector('.accordion');
if(accordion){
  CheckAccordion();
}

function CheckAccordion(){
  console.log('click accordion');
 let accordionItem = document.querySelectorAll('.accordion');
 for (let i = 0; i < accordionItem.length; i++) {
  accordionItem[i].addEventListener("click", accordionToggle);
  }
}

function accordionToggle(){
  console.log(this);
  this.querySelector('.accordion__content').classList.toggle('accordion__content--show');
}



/**
 * Cart page functions
 * remove products from cart and add quantity of products
 * @type {Element}
 */

let removeBtn = document.querySelectorAll('.product__remove');

if(removeBtn){
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProductFromCart);
  }
}else{
  showContinueShoppingBtn();
}

function removeProductFromCart(){
  event.preventDefault();
  this.parentNode.parentNode.remove();
  checkProductsInCart();
}

function checkProductsInCart(){
  let cartProducts = document.querySelectorAll('.cart__product');
  console.log(cartProducts.length);
  if(cartProducts.length < 1 ){
    showContinueShoppingBtn();
  }
}

function showContinueShoppingBtn(){
  location.reload();
}






/**
 * Content page functions
 * read content data of request and place in content
 * @type {Element}
 */

let contentNavItems = document.querySelectorAll('aside ul li a');

for (let i = 0; i < contentNavItems.length; i++) {
  contentNavItems[i].addEventListener('click',getContentData)
}

function getContentData(){
  // event.preventDefault();//check if page contains accordion
  // let url = this.getAttribute('href');
  // let navItem = this;
  // if(url) {
  //   let xhttp = new XMLHttpRequest(contentNavItems,navItem);
  //   xhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       for (let i = 0; i < contentNavItems.length; i++) {
  //         contentNavItems[i].classList.remove('active');
  //       }
  //       navItem.classList.add('active');
  //       let contentTitle = navItem.innerHTML;
  //       let content = document.querySelector(".article__content");
  //       document.querySelector('article h1').innerHTML = contentTitle;
  //       content.innerHTML = this.responseText;
  //       console.log("Load was performed.");
  //     }else if(!this.status == 200){
  //       console.log("Content can't be loaded.");
  //     }
  //   };
  //   xhttp.open("GET", url, true);
  //   xhttp.send(contentNavItems,navItem);
  // }

}



