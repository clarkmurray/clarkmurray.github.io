$(window).scroll(function(){
    if ($(window).scrollTop() > window.innerHeight) {
       $('nav').addClass('fixed');
    }
    else {
       $('nav').removeClass('fixed');
    }
});


$('body').scrollspy({ target: '#myNavbar' });

// filter handling for a /dir/ OR /indexordefault.page
function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
};

$('a[href^="#"]').on('click',function (e) {
     e.preventDefault();
     var target = this.hash,
     $target = $(target);
     $('html, body').stop().animate({
          'scrollTop': $target.offset().top
     }, 500, 'swing', function () {
          window.location.hash = target;
     });
});



$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");

      $('html, body').animate({
          scrollTop:$(the_id).offset().top
      }, 'slow');

  return false;

});

$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

