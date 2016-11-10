
$(document).ready(function() {

	var ul = $('ul');
	$("ul").css({ "width": "180px", "height": "50px"});

	$("li").hover(function() {
		opacity: '0.25';
	});

	$("li").click(function(){
		$("li").css({"background-color":  "red"});
		$('li: contains "Home", "About", "Contact", "My Porfolio", "Resume/Cred"').text('Clicked!');
	});

	
})