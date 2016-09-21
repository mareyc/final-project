$(document).ready(function(){

	var interval = window.setInterval(rotateSlides, 3000)

	function rotateSlides() {
		var $firstSlide = $('#carousel').find('div:first')
		var width = $firstSlide.width()

		$firstSlide.animate({marginLeft: -width}, 1000, function(){
		var $lastSlide = $('#carousel').find('div:last')
		$lastSlide.after($firstSlide);
		$firstSlide.css({marginLeft: 0});
		})
	}

	// $(".read-more").click(showMore);
	// $(".read-less").click(showLess);
	// $(".learn-more").click(showMoreLearn);
	
	// $("img").mouseover(function(){
 //    	$("img").css("border", "5px solid #033048");
 //    });

 //    $("img").mouseout(function(){
 //    	$("img").css("border", "none");
 //    });

 //    $(".button").click(function(){
	// 	event.preventDefault();
 // 		alert( "We're Not Ready For Sign-Ups...Yet." );
 // 	});
    	
	// function showMore(){
	// 	event.preventDefault();
	// 	$("#show-this-on-click").slideDown();
	// 	$(".read-more").hide();
	// 	$(".read-less").show();
	// 	}

	// function showLess(){
	// 	event.preventDefault();
	// 	$("#show-this-on-click").slideUp("fast");
	// 	$(".read-less").hide();
	// 	$(".read-more").show();
	// 	}

	// function showMoreLearn(){
	// 	event.preventDefault();
	// 	$("#learn-more-text").slideDown();
	// 	$(".learn-more").hide();
	// 	}

})