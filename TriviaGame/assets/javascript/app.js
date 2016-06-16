var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
  		["who is the lead singer of Led Zeppelin?", "Jimmy Page", "Robert Plant", "Mick Jagger", "John Paul Jones", "B" ],
		["When Jimi Hendrix moved to England, which guitarist took him in and watched him become famous within a week?", "Paul McCartney", "Peter Frampton", "Kieth Richards", "Eric Clapton", "D" ],
		["Which band has the single most sold album of all time?", "The Who", "The Eagles", "Van Halen", "The Beatles", "B" ],
		["What year did the beatles come to America?", "1967", "1954", "1964", "1969", "C" ],
		["Eric Clapton wrote the song Layla, for which musicians wife?", "George Harrison", "Bob Dylan", "John Lennon", "Chris Martin", "A"] 
		["Which band has the longest-running fan club according to the Guinness Book of World Records?", "Nirvana", "Led Zeppelin", "Pink Floyd", "Queen", "D" ]

];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);