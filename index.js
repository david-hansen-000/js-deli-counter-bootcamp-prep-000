function takeANumber(line, newName) {
  line.push(newName);
  return "Welcome, "+newName+". You are number "+(line.length+1)+" in line.";
}

function nowServing(line) {
  var num=line.length;
  var result;
  if (num===0) {
    result="There is nobody waiting to be served!";
  } else if (num>0) {
    var name=line.pop();
    result = "Currently serving "+name+".";
  }
  return result;
}

function currentLine(line) {
  var result;
  if (line <= 0) {
    result="The line is currently empty.";
  } else {
    for (var i=0; i<line.length; i++) {
      result = result + " " + (i+1) +". "+line[i]+", ";
    }
    result = "The line is currently: "+result.substring(0, result.length-1);
  }
  return result;
}