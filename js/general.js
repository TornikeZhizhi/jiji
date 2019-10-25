var openFloor = (floor) => {
	document.getElementById("floor-title").innerHTML = floor;
	document.getElementsByClassName("the2")[0].classList.add("the2-open");
};

var closeFloor = () => {
	document.getElementsByClassName("the2")[0].classList.remove("the2-open");
};

var detectmob = () => { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

(function(){

	if(
		detectmob() && 
		typeof document.getElementsByClassName("mobile-order")[0] !== "undefined"
	){
		var orders = document.getElementsByClassName("mobile-order");

		for(var i = 0; i < orders.length; i++){
			if(typeof orders[i] !== "undefined"){
				let order = orders[i].getAttribute("data-order");
				orders[i].classList.add("order-"+order);
			}
		}
	};

	if(typeof document.getElementsByClassName("content")[0] !== "undefined"){
		setTimeout(function(){
			document.getElementsByClassName("content")[0].classList.add("content-up");
		}, 1500);
	};

	if(typeof document.getElementsByClassName("sliderText")[0] !== "undefined"){
		// setTimeout(function(){
		// 	document.getElementsByClassName("sliderText")[0].classList.add("sliderText-open");
		// }, 2000);
	};

	if(typeof document.getElementsByClassName("nav-btn")[0] !== "undefined"){
		document.getElementsByClassName("nav-btn")[0].addEventListener("click", (e) => {
			var opned = document.getElementsByClassName("nav-btn")[0].getAttribute("data-opened");

			if(opned=="false"){
				document.getElementsByClassName("nav-btn")[0].classList.add("line-clicked");
				document.getElementsByClassName("nav-btn")[0].setAttribute("data-opened", "true");
				document.getElementsByClassName("nav")[0].classList.add("nav-open");
			}else{
				document.getElementsByClassName("nav-btn")[0].classList.remove("line-clicked");
				document.getElementsByClassName("nav-btn")[0].setAttribute("data-opened", "false");
				document.getElementsByClassName("nav")[0].classList.remove("nav-open");
			}
		});
	};

})();