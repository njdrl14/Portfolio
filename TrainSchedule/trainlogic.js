
  // Initialize Firebase
  var url ="https://train-922e2.firebaseio.com" 
  var fbRef = new Firebase(url);

  var trainName = '';
  var destination = '';
  var firstTrain = '';
  var frequency = '';

  $('#addTrain').on('click', function() {
  		trainName = $('#trainName').val().trim();
  		destination = $('#destination').val().trim();
  		firstTrain = $('#firstTrain').val().trim();
  		frequency = $('frequency').val().trim();

  		var firstTrainChange = moment(firstTrain,"hh:mm").subtract(1, "years");

  		var currentTime = moment();
  		console.log("Current Time: " + moment(currentTime).format("hh:mm"));

  		var diffTime = moment().diff(moment(firstTrainChange), "minutes");
  		console.log("Difference in Time: " + diffTime);

  		var timeApart = diffTime % frequency;
  		console.log(timeApart);

  		var minTillTrain = frequency - timeApart;
  		console.log("Minutes till Train: " + minTillTrain);

  		var nextTrain = moment().add(minTillTrain, "minutes")
  		console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"))

  		fbRef.push({
  			trainName: trainName,
  			destination: destination,
  			firstTrain: firstTrain,
  			frequency: frequency,
  			minutesAway: minTillTrain,
  			nextTrain:moment(nextTrain).format("hh:mm"),
  			dateAdded: Firebase.ServerValue.TIMESTAMP
  		})
  		return false;
  		fbRef.on("child_added", function(childSnapshot) {
  			var tname = childSnapshot.val().trainName;
  			var dest = childSnapshot.val().destination;
  			var fChange = childSnapshot.val().firstTrainChange;
  			var fQuency = childSnapshot.val().frequency;
  			var timeStamp = childSnapshot.val().dateAdded;
  			var minutesLeft = childSnapshot.val().minutesAway;
  			var ntrain = childSnapshot.val().nextTrain;
  			$('#trainTable > tbody').append("<tr><td>"+tname+"</td><td>"+dest+"</td><td>"+fQuency+"</td><td>"+ 
  				ntrain+"</td><td>"+minutesLeft+"</td><td>");


  		});
  		dataRef.orderByChild("dateAdded").limitToLast(2).on("child_added", function(snapshot){
  			$"#trainName".html(snapshot.val().trainName);
  			$"#destination".html(snapshot.val().destination);
  			$"#firstTrain".html(snapshot.val().firstTrain);
  			$"#frequency".html(snapshot.val().frequency);
  	});




