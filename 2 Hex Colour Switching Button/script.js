const hexCharacters = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

function changeColour()
{
  var hexcode = '';
  
  // generate a random 5 character hexcode using the characters from the hexCharacters array
  for(var i = 0; i<6; i++){
    var randomIndex = Math.floor(Math.random() * hexCharacters.length);
    hexcode += hexCharacters[randomIndex];
  }

  document.getElementById("hexCode").innerHTML = hexcode;
  document.body.style.backgroundColor = '#' + hexcode;
}