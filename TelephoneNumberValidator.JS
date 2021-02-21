
 telephoneCheck("555-555-5555");

function telephoneCheck(str) {

    var regex = /(?:1 555 555 |\(555\) ?555\-|555(?: 555 |555)|555\-555\-)5555/;
     console.log(regex.test(str));
  }
  
 //x-github-desktop-auth://oauth?code=4644e461a60b002f1964&state=39c84176-8861-4346-9012-1c1fc441c66c