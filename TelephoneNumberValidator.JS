
 telephoneCheck("555-555-5555");

function telephoneCheck(str) {

    var regex = /(?:1 555 555 |\(555\) ?555\-|555(?: 555 |555)|555\-555\-)5555/;
     console.log(regex.test(str));
  }
  
 