$(document).ready( function() {
  $('#Myphoto').mouseover(function() {
    $('#Myphoto').attr('src','pic/Surfing1.jpg');
  });
  
  $('#Myphoto').mouseout(function() {
    $('#Myphoto').attr('src', 'pic/Me.jpg');
  });
});
