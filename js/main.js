//NAV
$(document).ready(function(){
	$('.toggle').click(function(){
		$('.toggle').toggleClass('activeToggle')
    	$('nav ul').toggleClass('active-navigation')
	})
});

//JQUERY TEAMS
$(document).ready(function($){
	$('.member-1').on({
	    'click': function(){
		    $('#change-image').attr("src", "images/team1.png");
		    $(".team-member").removeClass("active-member");
		    $("#"+$(this).attr("alt")).addClass("active-member");
	    }
	});
	$('.member-2').on({
	    'click': function(){
	        $('#change-image').attr("src", "images/team2.png")
	        $(".team-member").removeClass("active-member");
	        $("#"+$(this).attr("alt")).addClass("active-member");
	    }
	});
	$('.member-3').on({
	    'click': function(){
	        $('#change-image').attr("src", "images/team3.png");
	        $(".team-member").removeClass("active-member");
	        $("#"+$(this).attr("alt")).addClass("active-member");
	    }
	});
	$('.member-4').on({
	    'click': function(){
	       	$('#change-image').attr("src", "images/team4.jpg");      
	        $(".team-member").removeClass("active-member");
	        $("#"+$(this).attr("alt")).addClass("active-member");
	    }
	});
});

// GALERY SLIDER
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
	        [...active].forEach((activeSlide) => {
	            activeSlide.classList.remove('active');
	        });

	        slides[i].classList.add('active');
	        btns[i].classList.add('active');
	        i++;

	        if(slides.length == i){
	          	i = 0;
	        }
	        if(i >= slides.length){
	          	return;
	        }
	        repeater();
      	}, 3000);
    }
    repeater();
}
repeat();

//REVEAL SCROLL
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight - revealpoint){
          	reveals[i].classList.add('active2');
        }
        else{
        	reveals[i].classList.remove('active2');
        }
    }
}

// BACK TO TOP
$(document).on('click','#toptobottom',function(){
	$('html,body').animate({scrollTop:0},500);
	return false; 
});

$(document).scroll(function(e){
	var scrollPos = $(this).scrollTop();
	if(scrollPos < 100){
	    $('#toptobottom').addClass('scroll-hide');
	}else{
	    $('#toptobottom').removeClass('scroll-hide');
	}
});