//pseudo-classical inheritance example

//create function with capital name to indicate others will intend to run the new keyword
var Giraffe = function(name, height) {
    //create properties to object
    this.name = name;
    this.height = height;
    this.hunger = 10;
  };
  
  //creates new instance of Giraffe with arguements passed
  var Stanley = new Giraffe('stanley', 5);

  console.log(Giraffe)
  console.log(Stanley)