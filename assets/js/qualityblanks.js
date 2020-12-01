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
}



/**
 * Scrolling functions
 * checks if hero is in viewport change header colors
 * @type {Element}
 */





window.addEventListener('scroll', function() {
  var hero = document.querySelector('.hero');
  isScrolledIntoView(hero);
});


function isScrolledIntoView(element) {

  var scroll = window.scrollY;
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;

  if (isVisible) {
    console.log(scroll);
    ChangeHeaderToWhite();
  } else {
    // console.log('hero is not visible');
    ChangeHeaderToBlack(true);
  }

}



