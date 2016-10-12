$(document).ready( function() {
  $('#Myphoto').mouseover(function() {
    $('#Myphoto').attr('src','pic/Background2.jpg');
  });
  
  $('#Myphoto').mouseout(function() {
    $('#Myphoto').attr('src', 'pic/Me.jpg');
  });
});
