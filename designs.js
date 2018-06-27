// Select color input
// Select size input
var height,width,color;
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
    event.preventDefault();
   
    makeGrid(height,width);
});


   function makeGrid() {
    $('tr').remove();

    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    for (var i = 0 ; i <= height; i++) {
        $('#pixelCanvas').append('<tr></tr>');
    for(var j = 0; j<=width; j++){
            $('tr:last').append('<td></td>');

        }
    }
    $('td').click(function addColor(){
          color= $('#colorPicker').val();

          if ($(this).attr('style')){
              $(this).removeAttr('style');
          } else {
              $(this).attr('style' , 'background-color:' + color);
          }
    });
}










