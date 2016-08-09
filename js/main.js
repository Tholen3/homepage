//Character & Lorebook Windows ================================================
//=============================================================================

function characterWindow() {
  window.open("page/characterWindow.html");
}

function loreBook() {
  var loreBook = window.open("page/loreBook.html");
}

//Hamburger Menu ==============================================================
$(document).ready(function($) {
  if ($(window).width() < 750) {
    $('.container-fluid').hide();
  } else {
    $('.mobile-nav').hide();
  }
  $('.menu-btn').click(function() {
    $('.responsive-menu').toggleClass('expand')
  });
});

//Screen resize testing =======================================================
$(window).resize(function() {
  if ($(window).width() < 750) {
    $('.container-fluid').hide();
    $('.mobile-nav').show();
  } else {

    $('.mobile-nav').hide();
    $('.container-fluid').show();
  }
});

//Scroll onClick Buttons ======================================================

$("#homeButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#title").offset().top
    }, 2000);
});
