function generateQuote() {
    var quoteDictionary = {
    "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
    "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"'
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // author = key, value = quote (key/value pairs)
    // grab all the keys in the dictionary (authors) and store in an array
    var authorsArray = Object.keys(quoteDictionary);
    var author = authorsArray[Math.floor(Math.random) * authorsArray.length]
    var quote = quoteDictionary[author];

    document.getElementById("quoteText").innerHTML = quote;
    document.getElementById("authorText").innerHTML = author;
}