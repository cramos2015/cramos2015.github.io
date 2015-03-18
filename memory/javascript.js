$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]//creates a name for the cards
  var thecard;
  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');//hols the card
  }
  var first_click="none"; //stores the first click
  var click_counter=0;
  $(".card").click(function(){
    thecard = $(this).find("p");
    thecard.css("opacity", "1");  
    if(click_counter==0){// lets you know what click your in 
      click_counter = 1;
    	first_click = $(this).find("p").html();
    }
    else{
      var second_click = $(this).find("p").html();
      if(first_click===second_click){ // If first click equals second click, then everything in the function happens. 
     		thecard.css("opacity", "0")}// I was trying to make the cards flip over again. 
    click_counter=0;// sets the clicks back to zero 

    }
  });
});
