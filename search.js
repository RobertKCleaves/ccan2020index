$(document).ready(function(){
  $("#searchbar").on("keyup", function() {
    console.log('hello?')
    var value = $(this).val().toLowerCase();
    $("h3").filter(function() {
      $("a").toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
