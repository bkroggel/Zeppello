$(document).ready(function(){

// WOW.js Effects
    // every class wow-standart 
    $('.wow-standart').addClass('wow fadeIn').attr('data-wow-delay', '0s');
    // the blog cols
    $('.blog .row .wow:nth-child(odd)').addClass('fadeInLeft').attr('data-wow-delay', '0s');
    $('.blog .row .wow:nth-child(even)').addClass('fadeInRight').attr('data-wow-delay', '0s');

  wow = new WOW(
    {
    mobile:       false,
  }
  )
  wow.init();

// calc screen hight (small and normal screens)
  var $header = $('.big-picture');
  if($(window).width() >= 768) {
    var h = (window.innerHeight - 30)
  } else {
    var h = (window.innerHeight)
  }
  $header.css('min-height', h);
  
// adds stuck or removes stuck class (waypoint)
  var nav_container = $('.nav-height');
  var navigation = $('.navbar')

  nav_container.waypoint({
    handler: function(direction) { 
      if (direction === 'down') { 
        navigation.stop().addClass('stuck');
    } else { 
        navigation.stop().removeClass('stuck'); 
      } 
    } 
  });

// hide or shows navbar
  var stickyWrap = $('.nav-height').one();
  var menuAppearBuffer = $('.nav-height').position().top + 600;
  var lastScrollTop = 0;
    
  $(window).scroll(function(){
    if ( $(navigation).hasClass('stuck') ) {
      var st = $(this).scrollTop();
      if (st > menuAppearBuffer && st > lastScrollTop){
        stickyWrap.addClass('navbar-hidden');

      } else {
        stickyWrap.removeClass('navbar-hidden');
      }
      lastScrollTop = st;
    }
  });

  //scroll function to show a smooth animation while automatically scrolling to item
  var $root = $('html, body');
  $('.paradeiser .scroll-nav, nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
});

// this code would force the page to alway load on top(0)
// $(window).on('beforeunload', function(){
//   $(window).scrollTop(0);
//   $('html').text(''); 
// });