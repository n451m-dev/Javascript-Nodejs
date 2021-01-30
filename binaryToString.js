function binaryAgent(str) {
     //Split string in array of binary chars
     let newstr = str.split(' ');
    chararr =newstr.map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
    outputStr=chararr.join(''); //Join the array back to a string
    console.log(outputStr);
  }

  binaryAgent("1010011 1110100 1100001 1100011 1101011");
 