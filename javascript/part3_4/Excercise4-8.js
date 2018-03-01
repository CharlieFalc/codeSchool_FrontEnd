var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  addRanger: function (name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  } 

};

// call addRanger three times to add the new rangers
lighthouseRock.addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
lighthouseRock.addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
lighthouseRock.addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);

lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
}

lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);

console.log(lighthouseRock);