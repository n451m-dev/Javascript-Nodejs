fearNotLetter("defghijklmnopqrstuvwxy");
function fearNotLetter(str) {
  var missing = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
      missing = String.fromCharCode(str.charCodeAt(i) + 1);
      break;
    }
  }
  if (missing) {
    console.log(missing);
  } else {
    console.log(undefined);
  }
}
