function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // add each location to the zones array
    zones.push(location);
    // add each zone to the list string
    for (var i=0, len=zones.length; i<len; i++){
      list +=  "\n" + zones[i];
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          // finish the warning message here
          "Current danger zones are:"+
          list
    );
  };
}

var cougarWarning = warningMaker("cougar");
cougarWarning(4, "silicon valley");

var bearWarning = warningMaker("bear");
bearWarning(2, "peaky peak");