/**
 * Header functions
 * Shows submenu if exists and changes header colors
 * @type {Element}
 */
let header = document.querySelector('nav li');
let navWithMenu = document.querySelectorAll('header li');

for (let i = 0; i < navWithMenu.length; i++) {
  navWithMenu[i].addEventListener("mouseenter", checkHasMenu);
}

function checkHasMenu(){
 if(this.querySelector('.dropdownmenu')){
   headerOpen();
   document.querySelector(".dropdownmenu").classList.add('dropdownmenu__active');
   console.log('header open');
 }else{
   document.querySelector(".dropdownmenu").classList.remove('dropdownmenu__active');
 }

}

// let navWithSubmenu = document.querySelector('nav li');
// let nav = document.querySelector('nav ul li');
//
// navWithSubmenu.addEventListener("mouseenter",function() { document.querySelector('.dropdownmenu').classList.add('dropdownmenu--show')});
// nav.addEventListener("mouseleave",function() { document.querySelector('.dropdownmenu').classList.remove('dropdownmenu--show')});

header.addEventListener("mouseenter", headerOpen);
header.addEventListener("mouseleave", headerClose);
document.querySelector(".dropdownmenu").addEventListener("click", dropdownClose);

function headerOpen(){
  if(checkIfHomePage()){
    ChangeHeaderToBlack(false);
  }else{
    ChangeHeaderToWhite();
    ChangeHeaderToBlack(false);
  }
}

function headerClose(){
  if(!checkIfHomePage()){
    ChangeHeaderToWhite();
    ChangeHeaderToBlack(true);
  }else{
    ChangeHeaderToWhite();
  }
}

function dropdownClose() {
  console.log('click');
  document.querySelector(".dropdownmenu").classList.remove('dropdownmenu__active');

}


function ChangeHeaderToBlack(transparent){
  document.querySelector(".dropdownmenu").style.display = '';
  let header = document.querySelector('header');
  // add active state to header nav items
  let navLinks = document.querySelectorAll('header li a');
  if(!transparent) {
    header.classList.add('active');
  }
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('black');
  }

  // change logo color black
  let logo = document.querySelectorAll('.logo .st0');
  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.add('black');
  }


  // change searchbar to black
  document.querySelector(".header__searchbar input").classList.add('black');
  document.querySelector(".header__searchbar .input__group--addon").classList.add('black');

  //change loupe to black
  document.querySelector(".header__loupe .st0").classList.add('black');

  //change mobile menu to black
  document.querySelector("#hamburger__menu path").classList.add('black--stroke');
  document.querySelector(".cart__amount").classList.add('white');
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
    navLinks[i].classList.remove('black');
  }

  // change logo color to default
  let logo = document.querySelectorAll('.logo .st0');
  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.remove('black');
  }

  // change searchbar to default
  document.querySelector(".header__searchbar input").classList.remove('black');
  document.querySelector(".header__searchbar .input__group--addon").classList.remove('black');

  //change loupe to black
  document.querySelector(".header__loupe .st0").classList.remove('black');

  //change mobile menu to default
  document.querySelector("#hamburger__menu path").classList.remove('black--stroke');
  document.querySelector(".cart__amount").classList.remove('white');
  let cartIcon = document.querySelectorAll("#cart__menu path");
  for (let i = 0; i < cartIcon.length; i++) {
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
 * Change letiant option bg color
 * Gets letiant url and change color of letiant
 * @type {Element}
 */

let products = document.querySelectorAll('.product');
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener('pointerenter', checkletiant);
}

function checkletiant(){
  let productletiant = this.querySelector('.product__letiants');
  let letiantsColorList = [];
  let letiantsList = this.querySelectorAll('.product__letiants li');



  let productHasletiants = this.querySelector('.product__letiants');
  if(!productHasletiants){
    this.querySelector('.product__inner').classList.add('visible');
  }

  if(productletiant)
  {
    let letiants = productletiant.querySelectorAll('li a');
    for (let i = 0; i < letiants.length; i++) {
      //get value of last dash in url
      let letiantURL = letiants[i].getAttribute("href");
      let uri = letiantURL;
      let lastslashindex = uri.lastIndexOf('-');
      let result= uri.substring(lastslashindex  + 1);

      //push values to array
      letiantsColorList.push(result);
    }

    changeletiantColor(letiantsList,letiantsColorList);
  }
}
// set color of letiant list on product
function changeletiantColor(letiantsList,letiantsColorList){
  for (let i = 0; i < letiantsList.length; i++) {
    letiantsList[i].classList.add("bg-"+letiantsColorList[i]);
  }
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
  let isHomepage = document.location.pathname === "/QB-skeleton/index.html";
  if(isHomepage){
    return true;
  }else{
    document.querySelector('.header__navigation').classList.add('header__navigation--border');
    // first parameter sets header to transparent
    ChangeHeaderToBlack(true);
    return false;
  }

}


