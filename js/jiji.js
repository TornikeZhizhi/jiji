





$(function(){

  $(window).scroll(function(){
    var aTop = $(this).scrollTop() / 20 + "px"
    	console.log(aTop)


    	$(".text").css("transform","translate3d(0px, "+aTop+", 0px)")
  });
});