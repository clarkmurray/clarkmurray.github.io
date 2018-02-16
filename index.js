var year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});