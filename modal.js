$("#reg").on("click", function(){
  $("#exampleModal").modal("hide");
    $("#secondModal").modal("show");
});

$(document).ready(function(){
  $('#price1').prop('disabled', true);
  $('#Check_price1').change(function() {
    $('#price1').prop('disabled', function(i, val) {
      return !val;
    }) }); });