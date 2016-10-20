$(document).ready( function() {
  $('#Myphoto').mouseover(function() {
    $('#Myphoto').attr('src','pic/1010.jpg');
  });
  
  $('#Myphoto').mouseout(function() {
    $('#Myphoto').attr('src', 'pic/Me.jpg');
  });
});
