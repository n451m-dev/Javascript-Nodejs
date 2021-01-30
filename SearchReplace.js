function myReplace(str, before, after) {
 var aa = str.search(new RegExp(before, "i"));
 var bb=str.charAt(aa);
 var newstr;
    if (bb==bb.toUpperCase()) {
         var newafter=after.charAt(0).toUpperCase()+after.slice(1);
         newstr=str.replace(new RegExp(before, "i"), newafter);
        console.log(newstr);
    } else {
        var newafter = after.charAt(0).toLowerCase()+after.slice(1)
        newstr=str.replace(new RegExp(before, "i"), newafter);
        console.log(newstr);
    }
  }
  myReplace
  ("A Quick brown fox jumped over the lazy dog", "quick", "leaped");