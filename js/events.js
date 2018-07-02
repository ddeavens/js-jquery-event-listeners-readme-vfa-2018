//define functions here

$(document).ready(function(){

// call functions here

});

$('p').on("click",function(){"Hey!"});

$('img').on('load', function(){
  border: red;
});

$(document).on('keydown', function() {
  if(key.which == G){
      alert('s was pressed');
  }
});

$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
});


