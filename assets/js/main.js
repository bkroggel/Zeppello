$(document).ready(function(){


// WOW.js Effects
    // every class wow-standart 
    $('.wow-standart').addClass('wow fadeIn').attr('data-wow-duration', '0.8s');
    // the blog cols
    $('.blog .row .wow:nth-child(odd)').addClass('fadeInLeft').attr('data-wow-duration', '0.5s');
    $('.blog .row .wow:nth-child(even)').addClass('fadeInRight').attr('data-wow-duration', '0.5s');

  wow = new WOW(
    {
    mobile: false,
  }
  )
  wow.init();

  // looks for all links in :blog-posts--content and adds the attribute target:_blank to open the link in another window
  //$('.blog-posts--content a').attr('target', '_blank');
  $('.blog-posts--content a.reversefootnote').removeAttr('target', '_blank');

  
  // adds zoom option to all pictures within blog post EXCEPT for cover-images
  $('.blog-posts--content img').attr('data-action', 'zoom');
  $('.blog-posts--content .cover img').removeAttr('data-action', 'zoom');
  $('.blog-posts--content .img100 img').removeAttr('data-action', 'zoom');

  //scroll function to show a smooth animation while automatically scrolling to item
  var $root = $('html, body');
  $('.paradeiser .scroll-nav, nav a, .blog-posts--content a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });


// calc screen hight (small and normal screens)
  var $header = $('.big-picture, .one-picture');
  if($(window).width() >= 768) {
    var h = (window.innerHeight - 30)
  } else {
    var h = (window.innerHeight)
  }
  $header.css('min-height', h);

// snowflakes for chirstmas (just 100 on mobile and 400 on bigger screens)
if($(window).width() >= 768) {
    $('.big-picture').snowfall({flakeCount : 200, maxSize : 3});
  } else {
    $('.big-picture').snowfall({flakeCount : 100, maxSize : 2});
  }
  
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
  

});



// this code would force the page to alway load on top(0)
// $(window).on('beforeunload', function(){
//   $(window).scrollTop(0);
//   $('html').text(''); 
// });