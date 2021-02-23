
 telephoneCheck("555-555-5555");

function telephoneCheck(str) {

    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
     console.log(regex.test(str));
  }
  
//copied soluion