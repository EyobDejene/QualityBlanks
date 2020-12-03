/*JS way for setting height: 100vh to slides' height*/
/*const $slides = $(".owl-carousel .owl-slide");
$slides.css("height", $(window).height());
$(window).resize(() => {
$slides.css("height", $(window).height());
 });*/


var hero = document.querySelector('.hero');
if(hero) {

  $(".owl-carousel").on("initialized.owl.carousel", () => {
    setTimeout(() => {
      $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
      $("section").show();
    }, 200);
  });

  const $owlCarousel = $(".hero .owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    navText: [
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */]
  });

  $owlCarousel.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");

    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

    const $target = $currentOwlItem.find(".hero__text");
    doDotsCalculations($target);
  });

  $owlCarousel.on("resize.owl.carousel", () => {
    setTimeout(() => {
      setOwlDotsPosition();
    }, 50);
  });

  /*if there isn't content underneath the carousel*/
//$owlCarousel.trigger("refresh.owl.carousel");

  setOwlDotsPosition();

  function setOwlDotsPosition() {
    const $target = $(".owl-item.active .hero__text");
    doDotsCalculations($target);
  }

  function doDotsCalculations(el) {
    const height = el.height();
    const {top, left} = el.position();
    const res = height + top + 20;

    $(".owl-carousel .owl-dots").css({
      top: `${res}px`,
      left: `${left}px`
    });

  }
}

/**
 * Product detail product carousel
 * @type {Element}
 */
var productSliderMobile = document.querySelector('.product__details__images--mobile');
if(productSliderMobile) {
  const $owlCarousel = $(".product__details__images--mobile .owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    navigation:true,
    navText: [
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.3649 23.8472C17.5721 24.0474 17.9023 24.0416 18.1025 23.8344C18.2977 23.6323 18.2977 23.3118 18.1025 23.1097L6.99658 12.0028L18.1035 0.896959C18.3107 0.696814 18.3164 0.366642 18.1163 0.159405C17.9161 -0.0477829 17.586 -0.0535049 17.3787 0.146593C17.3744 0.150799 17.3701 0.155052 17.3659 0.159405L5.89076 11.6346C5.68714 11.8382 5.68714 12.1684 5.89076 12.3721L17.3649 23.8472Z" fill="#F44336"/> <path d="M17.7343 0.00585365C18.0224 0.00531578 18.2563 0.238468 18.2568 0.526537C18.2571 0.665413 18.2019 0.798664 18.1036 0.896757L6.99669 12.0026L18.1036 23.1084C18.3075 23.3124 18.3075 23.6431 18.1036 23.847C17.8996 24.051 17.569 24.051 17.365 23.847L5.88984 12.3719C5.68623 12.1682 5.68623 11.838 5.88984 11.6343L17.365 0.159203C17.4628 0.06106 17.5957 0.00585365 17.7343 0.00585365Z" fill="black"/> </svg> ',
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6351 0.152772C6.42792 -0.0473748 6.0977 -0.0416047 5.89755 0.165584C5.70234 0.367735 5.70234 0.688175 5.89755 0.890278L17.0034 11.9972L5.89652 23.103C5.68933 23.3032 5.68361 23.6334 5.88371 23.8406C6.08386 24.0478 6.41403 24.0535 6.62127 23.8534C6.62562 23.8492 6.62987 23.8449 6.63408 23.8406L18.1092 12.3654C18.3129 12.1618 18.3129 11.8316 18.1092 11.6279L6.6351 0.152772Z" fill="#F44336"/> <path d="M6.26571 23.9941C5.97764 23.9947 5.7437 23.7615 5.74316 23.4735C5.74292 23.3346 5.79808 23.2013 5.89642 23.1032L17.0033 11.9974L5.89642 0.891553C5.69246 0.687592 5.69246 0.356932 5.89642 0.152971C6.10038 -0.0509902 6.43104 -0.0509902 6.635 0.152971L18.1102 11.6281C18.3138 11.8318 18.3138 12.162 18.1102 12.3657L6.635 23.8408C6.5372 23.9389 6.40429 23.9941 6.26571 23.9941Z" fill="black"/> </svg> ' /* icons from https://iconmonstr.com */]
  });
}