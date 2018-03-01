var sweetAnnouncement = function() { alert("Attention\nCUPCAKES\nThat is all.")};
// sweetAnnouncement();

//how to return a function from a function
var parkRides = [["birch bumpers", 40], ["pines plunge", 55], 
["cedar coaster",20], ["ferris wheel of firs",90]];

//queue method
var fastPassQueue = ["cedar coaster", "pines plunge", "birch bumpers", "pines plunge"];

// fastPassQueue.shift(); //cedar coaster will be returned

// fastPassQueue.length(); //shows 3 after shift

// var firstFastPass = fastPassQueue.shift();
// console.log(firstFastPass);

function buildTicket(allRides, passRides, pick) {
	if (passRides[0] == pick) {
		var pass = passRides.shift();
		return alert("Quick you have a fast pass to " + pass);
	} else {
		for (var i = 0; i<allRides; i++){
			if (allRides[i][0] == pick) {
				return function () { alert("A ticket is printing for " + pick +
					"\nWait time is " + allRides [i][1]);
				};
			}
		}
	}
}

var wantsRide = "birch bumpers";

buildTicket(parkRides, fastPassQueue, wantsRide);

