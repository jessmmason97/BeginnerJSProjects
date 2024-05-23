function changeColour()
{
  var hexNumbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

  var hexcode = '';
  
  for(var i = 0; i<6; i++){
    var randomIndex = Math.floor(Math.random() * hexNumbers.length);
    hexcode += hexNumbers[randomIndex];
  }

  document.getElementById("hexCode").innerHTML = hexcode;
  document.body.style.backgroundColor = '#' + hexcode;
}