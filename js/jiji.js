





$(function(){



  var $animation_elements = $('.animation-element');
var $window = $(window);


 var lastScrollTop = 0;
 var direction = "up"

  window.addEventListener("scroll", function(){ 
       var st = window.pageYOffset || document.documentElement.scrollTop; 
       if (st > lastScrollTop){
          console.log("down")
          direction = "down"
       } else {
          direction = "up"
          console.log("dup")
       
       }
       lastScrollTop = st <= 0 ? 0 : st; 
    }, false);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      // $element.addClass('in-2');
   
     if($element.hasClass('up'))  { 
        // debugger;
        $element.removeClass('up')
        

      }
       if($element.hasClass('down'))  {
        
        $element.removeClass('down')}
    } else {

      // if($element.hasClass('in-2')) {$element.removeClass('in-2') }
      if(direction == "down" &&  !$element.hasClass('up') &&  !$element.hasClass('down') ){
        $element.addClass('down');
      
    }
    if(direction == "up" &&  !$element.hasClass('down') &&  !$element.hasClass('up')){
        $element.addClass('up');
       
    }
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



});