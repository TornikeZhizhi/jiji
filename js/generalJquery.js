$(".scrollup").click(function(){
	$('.content').animate({ scrollTop: 0 }, 300);
});

$(".input-select select").focus(function(){
	$(".input-select i").css("transform", "rotate(90deg)");
});

$(".input-select select").click(function(){
	$(".input-select i").css("transform", "rotate(90deg)");
});

$(".input-select select").blur(function(){
	$(".input-select i").css("transform", "rotate(-90deg)");
});

function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

$(".content").scroll(function() {
  var scrolled = $(".content").scrollTop();

  // $(".slider-box").css("transform", "translate3d(0,"+(scrolled*0.7)+"px,0)");
 
  // $('.carousel-item').each(function(index, element) {
  //   var initY = $(this).offset().top
  //   var height = $(this).height()
  //   var endY  = initY + $(this).height()

  //   // Check if the element is in the viewport.
  //   var visible = isInViewport(this);
  //   if(visible) {
  //     var diff = scrolled - initY
  //     var ratio = Math.round((diff / height) * 100)
  //     $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
  //   }
  // });

  // $('.content .yourhouse .container .g-img').each(function(index, element) {
  //   var initY = $(this).offset().top
  //   var height = $(this).height()
  //   var endY  = initY + $(this).height()

  //   // Check if the element is in the viewport.
  //   var visible = isInViewport(this);
  //   if(visible) {
  //     var diff = scrolled - initY
  //     var ratio = Math.round((diff / height) * 100)
  //     $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
  //   }
  // });


  // $(".content .yourhouse .container .g-img").each(function(index, element) {
  //   var visible = isInViewport(this);
  //   if(visible) {
  //     $(".content .yourhouse .container .g-img").css({"-webkit-transform":"translateZ(0)","transform":"translateZ(0)"});
  //     $(".content .yourhouse .container .g-text").css({"-webkit-transform":"translateZ(0)","transform":"translateZ(0)"});
  //   }else{
  //     $(".content .yourhouse .container .g-img").css({"-webkit-transform":"translate3d(0,120px,0)","transform":"translate3d(0,120px,0)"});
  //     $(".content .yourhouse .container .g-text").css({"-webkit-transform":"translate3d(0,120px,0)","transform":"translate3d(0,120px,0)"});
  //   }
  // });

  // $(".advantage").each(function(index, element) {
  //   var visible = isInViewport(this);
  //   if(visible) {
  //     $(".advantage .row").css({"-webkit-transform":"translateZ(0)","transform":"translateZ(0)"});
  //   }else{
  //    $(".advantage .row").css({"-webkit-transform":"translate3d(0,120px,0)","transform":"translate3d(0,120px,0)"});
  //   }
  // });


});


$(document).ready(function(){

  $('.carousel').carousel({
    interval:5000
  }); 

  $(".nav-link").hover(function(){
    $(this).click();
  });

  $("#google-map").click(function(){
    $(this).removeClass("overlay");
  })

  // setTimeout(function(){
  //   $(".carousel-item").css("background-attachment", "fixed");
  // }, 2000);

  $(".content .aboutus .inner form .input label").click(function(){
    if($("#agree").prop("checked")){
      $("#agree").prop("checked", false);
      $(this).removeClass("active");
    }else{
      $("#agree").prop("checked", true);
      $(this).addClass("active");
    }
  });

  $(".datalink").mouseenter(function(){
    var dt = $(this).attr("data-link");
    $("."+dt).css({"background-color":"black"});
    $("i", this).css({"background-color":"white", "color":"black"});
  });

  $(".datalink").mouseleave(function(){
    var dt = $(this).attr("data-link");
    $("."+dt).css({"background-color":"#71D82C"});
    $("i", this).css({"background-color":"#71D82C", "color":"white"});
  });

});
