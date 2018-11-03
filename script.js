
//Background with random emoji
function makeRandomShape($shape){

    var divsize = ((Math.random()*100) + 20).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $($shape).css({

        'color': '#414141'
    });

    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px'
            }).appendTo( 'body' );
}
for (i = 0; i < 15; i++) {
     makeRandomShape('<i class="fas fa-frown-open"></i>');
     makeRandomShape('<i class="far fa-frown-open"></i>');
     makeRandomShape('<i class="fas fa-flushed"></i>');
 }

// Generating random emotion cards for the landing page

 const emotionCard = document.getElementsByClassName("emotions");

 const background = ["#ff9478", "#913d88", "#81cfe0", "#fff68f", "#c8f7c5"];

 let random = () => {
   return background[Math.floor(Math.random() * background.length)];
 }

 for (let i = 0; i < emotionCard.length; i++) {
   emotionCard[i].style.backgroundColor = random();
 }
