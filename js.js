$(document).ready(function() {
	$('.pix').mouseleave(function() {
		$(this).css('background-color', 'black');});
	});

function clearpad() {
	$('.pix').css('background-color', 'white');
}

function start() {
	$('.pix').remove();
	gridsize = prompt("How many squares are needed on each side?")
	i = 1;
		for (i=1; i<(gridsize*gridsize)+1; i++) {
			$('#pad').append("<div class='pix'></div>")
		}
	
	$('.pix').css({"width": 460/gridsize, "height": 460/gridsize});
	$('.pix').mouseenter(function() {
		$(this).css('background-color', 'black');});
}

