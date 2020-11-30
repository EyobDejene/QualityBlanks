var header = document.querySelector('nav li');

header.addEventListener("mouseenter", headerOpen);
header.addEventListener("mouseleave", headerClose);
document.querySelector(".dropdownmenu").addEventListener("click", dropdownClose);

function headerOpen(){
  var header = document.querySelector('header');
  document.querySelector(".dropdownmenu").style.display = '';

  // add active state to header nav items
  var navLinks = document.querySelectorAll('header li a');
  header.classList.add('active');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add('black');
  }

  // change logo color black
  var logo = document.querySelectorAll('.logo .st0');
  for (var i = 0; i < logo.length; i++) {
    logo[i].classList.add('black');
  }
}

function headerClose(){
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



function dropdownClose() {
  console.log('click');
  document.querySelector(".dropdownmenu").style.display = 'none';
}
