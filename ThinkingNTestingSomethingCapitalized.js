function testit(s){
return s.toLowerCase().replace(/.\b/g, function(match) {
      return match.toUpperCase();
    });
}
