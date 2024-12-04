var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  

    this.getFullName = function() {
        console.log( fullName);
      };

    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
   
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  //this is the same solution as avalable in the freecodecamp, tff
  var bob = new Person("Bob Ross");
  bob.getFullName();