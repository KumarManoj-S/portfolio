
$( document ).ready(function(){

$('.parallax').parallax();
	$(".button-collapse").sideNav();
});


$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});






$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




// $(document).ready(function(){
//       $('.carousel').carousel();
//     });


// var colors = ['#11243A', '#04443a', '#0f0444']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
// var active = 0;
// setInterval(function(){
//     document.querySelector('nav').style.background = colors[active];
//     active++;
//     if (active == colors.length) active = 0;
// }, 1000);




// function pulse(mytag){

// 	$(mytag).animateCss('fadeIn');

// }