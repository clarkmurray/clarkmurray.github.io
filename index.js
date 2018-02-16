var year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});


// Smooth Scroll

function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

var locationPath = filterPath(location.pathname);
$('a[href*="#"]').each(function () {
  var thisPath = filterPath(this.pathname) || locationPath;
  var hash = this.hash;
  if ($("#" + hash.replace(/#/, '')).length) {
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(hash), target = this.hash;
      if (target) {
        $(this).click(function (event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: ($target.offset().top) - 74}, 2000, function () {
          	var x = window.scrollX, y = window.scrollY;
            location.hash = target; 
            $target.focus();
            window.scrollTo(x, y);
            if ($target.is(":focus")){ //checking if the target was focused
              return false;
            }else{
              $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
              $target.focus(); //Setting focus
              window.scrollTo(x, y);
            };
          });       
        });
      }
    }
  }
});

$(document).ready(function(){
// run on DOM ready
// grab target from URL hash (i.e. www.example.com/page-a.html#target-name)
 
  var target = window.location.hash;
 
// only try to scroll to offset if target has been set in location hash
 
  if ( target != '' ){
      var $target = jQuery(target); 
      $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 74}, // set offset value here i.e. 50
      1, 
      'swing',function () {
      window.location.hash = target;
      });
  }
});

// End Smooth Scroll