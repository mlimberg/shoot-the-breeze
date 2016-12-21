function isOpposite(s1,s2) {
  if(s1.length != s2.length) {
    return false
  }
  var string1 = s1.split('');
  var string2 = s2.split('');
  for(i = 0; i < s1.length; i++) {
    if(s1[i].toLowerCase() === s2[i].toLowerCase()) {
      if(s1[i].toUpperCase() && !s2[i].toUpperCase()) {
        return true
      }
    } else {
      return false
    }
  }
}
