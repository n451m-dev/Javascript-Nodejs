
spinalCase('thisIs_Spinal Tap');
function spinalCase(str) {
    var newarr=[];
    var regex = /[_ ]|(?=[A-Z])/;
    newarr=str.split(regex);
    console.log(newarr.join("-").toLowerCase());
  }
  
  