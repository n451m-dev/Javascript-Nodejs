function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var T=0;
    var rounded_orbital_value=0;
    arr.forEach(element => {
        var  semi_major_axis=earthRadius+element.avgAlt;
        T=2*Math.PI*Math.sqrt(Math.pow(semi_major_axis, 3)/GM);  
        rounded_orbital_value=Math.round(T);
        element.orbitalPeriod=rounded_orbital_value;
        delete element.avgAlt;     
    });
    console.log(rounded_orbital_value);
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);