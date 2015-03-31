$(document).ready(function(){
  $('#add').on('click',function(){//when the button is clicked....
    var val1 = $('input').val();//sets var val1 equal to the user input
    $('#mydiv').append("<p>"+val1+"</p>");//adding html to the the end of the string and makes a list 
    console.log(val1);//checks if the code is working 
  $('#clear-button').on('click',function(){
  $('#mydiv').empty();//clears everything and reset the entire list 
  });
  });
})
