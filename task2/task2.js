function extractCharacters(str) {
    var res = str.split('');
    return res.map(el => el.toLowerCase())
            //make all elements to be in lowercase
            .filter((el, i, res) => res.indexOf(el) == i);
            //filter array for uniq values
}

//=============================================================================

function createLogger(prefix) {
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
      if(typeof arguments[i] === "object") {
        res += "Object {";
        res += objectToString(arguments[i]);
        res += "}";
      } else {
        res += arguments[i];
      }
      res += " ";
    }
    res = res.trim()
    console.log(res);
  }
}


function objectToString(data,str) {
  if(!str) { var str = ""; }
  for(var key in data) {
    str += key;
    str += ": ";
    if(typeof data[key] === "object" && !(data[key] instanceof Array)) {
      str += "{";
      str = objectToString(data[key], str);
      str += "}";
    } else if(Array.isArray(data[key])) {
      str += "[";
      for(var j = 0; j < data[key].length; j++) {
        if(typeof data[key][j] === 'object' && !(data[key][j] instanceof Array)) {
          str += "{";
          str = objectToString(data[key][j], str);
          str += "}";
        } else {
          str += data[key][j];
          str += ',';
        }
      }
      str = str.substring(0, str.length-1);
      str += ']';
    } else {
      str += data[key];
    }
    str += ",";
  }
  str = str.substring(0, str.length-1);
  return str;
}
