
let alertTheMedia = () => {

    var stringToSend = document.getElementById("string-to-send").value;

    console.log(stringToSend);

    if (!stringToSend) alert("Your string is empty");

    else alert("The string is: " + stringToSend);

}