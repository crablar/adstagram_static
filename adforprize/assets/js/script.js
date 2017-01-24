
$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: true,
		anchors: ['home', 'screens', 'hiring', 'privacy_policy', 'get_app'],
		menu: '#menu',
		onLeave: function(index, nextIndex, direction){
		 
			  if(index==1 && direction =='down'){
				  $('.navbar').addClass('scrolled');
				  
				}
				
				else if(nextIndex == 1 && direction == 'up'){
					$('.navbar').removeClass('scrolled');
				}
		  
		  
		  
			
		},
		navigation: true,
		navigationPosition: 'right',
		scrollOverflow: true,
		controlArrows: false,
	});
	
	
	
	
	  $('header ul>li a').on('click', function(){
		  setTimeout(function(){
			$(".hamburger").removeClass("is-active");
			$(".menu_nav").removeClass("is-active");
			}, 1000);
    });
	
	$(".hamburger").click(function(){
		$(".hamburger").toggleClass("is-active");
		$(".menu_nav").toggleClass("is-active");
		

	}); 
	
	
	$('.owl-carousel').owlCarousel({
		center: true,
		items:5,
    	nav:true,
		loop:true,
		  responsive:{
        0:{
            items:1
        },
		
        600:{
            items:1
        },
		1199:{
			items:3
		},
        1680:{
            items:5
        }
    }

	});
	
	
});


