    function extractCharacters(str) {
      var res = str.split('');
      return res.map(el => el.toLowerCase())
                //make all elements to be in lowercase
                .filter((el, i, res) => res.indexOf(el) == i);
                //filter array for uniq values
    }


//=============================================================================

function objectToString(data,str) {

for(var key in data) {
  str += key;
  str += ": ";
  if(typeof data[key] === "object" && !(data[key] instanceof Array)) {
    str += "{";
    str = objectToString(data[key], str);
    str += "}";
  } else {
    str += data[key];
  }
  str += ",";
}
str = str.substring(0, str.length-1);
return str;
}

function myLogger(prefix) {
  var stringObject = '';
  if(!prefix) {
    throw new Error("enter logger info");
  }
  return function() {
    if(arguments.length === 0) {
      throw new Error("enter arguments to custom logger");
    }
    var res = new Date().toISOString();
    res += " ";
    res += prefix;
    res += ": ";
    for(var i = 0; i < arguments.length; i++) {
      if(typeof arguments[i] === "object" && !(data[key] instanceof Array)) {
        res += "Object {";
        res += objectToString(arguments[i], stringObject);
        res += "}";
      } else if(Array.isArray(artguments[i]))
       else {
        res += arguments[i];
      }
      res += " ";
    }
    res += stringObject;
    res = res.trim()
    console.log(res);
  }
}
var log = myLogger("sadasdasd");
// log({data: 3, dra}, function data() {return 2;}, {catch: ['data', 3]});
log({data: 3, test: {inner: 1}}, [1,23,3]);
log({top: 1, level1: {level2: {level3: 3}}, level1_1: {level2_1: 21}, level2_2: 22})
