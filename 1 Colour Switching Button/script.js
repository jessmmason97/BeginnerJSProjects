var index = 0;

function changeColour(){
    var colours = ["red", "blue", "yellow", "pink", "green", "orange", "purple","white","black"];
    document.getElementsByTagName("body")[0].style.background = colours[index++]

    if(index > colours.length -1)
        index = 0;
}