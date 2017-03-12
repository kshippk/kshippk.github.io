$(document).ready(function(){
    $("button").on("click", 
      function() {
      var inside = $(this);
      if (inside.text() == inside.data("text-swap")) {
        inside.text(inside.data("text-original"));
      } else {
        inside.data("text-original", inside.text());
        inside.text(inside.data("text-swap"));
      }
    });
});