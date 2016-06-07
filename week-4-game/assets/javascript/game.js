var wins =0;
var losses =0;
//current score
var score =0;

//updates score

var updateScore = function(){
	$('.score').empty();
	$('.score').append(score);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

//reset
var reset = function(){
	score = 0;
	total = Math.floor((Math.random()*100) + 20);

	$('.total').empty();
	$('.total').append(total);

	green = Math.floor((Math.random()* 12) + 1);
	red = Math.floor((Math.random()* 12) + 1);
	purple = Math.floor((Math.random()* 12) + 1);

	updateScore();
}

var logic = function(){
	if (score == total) {
		wins = wins + 1;

		reset();
	}else if(score > total) {
		losses = losses + 1;

		reset();
	}else{
		updateScore();
	}
}
$('.total').append(total);
$('.score').append(score)
//end of logic function

$(document).ready(function(){
	$('#green').click(function(){
		score = score + green;
		logic();
	})

	$('#red').click(function(){
		score = score + red;
		logic();
	})

	$('#purple').click(function(){
		score = score + purple;
		logic();
	})
});


//selects random number from 20 to 100
var total = Math.floor((Math.random()* 100) + 20);

//gives random value to crystals from 1-12
var green = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);