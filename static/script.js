//accessing date and time
var d = new Date();
document.getElementById("h").innerHTML = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();

const container = document.createElement('div');
container.setAttribute('class', 'container');

var dayKey = d.getFullYear() + d.getMonth() + d.getDate();



// Create a request variable and assign a new XMLHttpRequest object to it.
var foods = [];
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://pingrytoday.pingry.org:3001/v1/lunch?api_key=TnJontBtyAP5rAI9CtbOvZBuucKQDtrY1ggWLQx5');

request.responseType = 'json';

request.onload = function () {



}

// Send request
request.send();

//window.alert( foods[0] );
foods.push("fwfaev");
//window.alert( foods[0] );


// trying to access JSON data of lunch menu items by sending request?

var myArray = ["Blackened catfish", "Mashed Potatoes", "Rice", "Gumbo Soup"];

var clicks = [];
for(var i = 0; i < myArray.length; i++){
  clicks.push({
      key: myArray[i],
      value: 0
  });
}

function downClick(s) {
  clicks[s].value -= 1;
  window.alert(clicks[s]);
  document.getElementById("clicker").innerHTML = clicks[s].value;
}

function upClick(s) {
  clicks[s].value += 1;
  document.getElementById("clicker").innerHTML = clicks[s].value;
}


function makeTableHTML(myArray) {
    var result = "<ol border=\"10\"> ";
    for(var i=0; i<myArray.length; i++) {
        result += "<li>"
        result += "<img type = \"button\" onclick = \"downClick(" + myArray[i] + ")\" src=\"down.jpg\" alt=\"d\" width = \"30\">";
        result += "   " + myArray[i] + clicks + "   ";
        result += "<img type = \"button\" onclick = \"upClick(" + myArray[i] + ")\" src=\"up.jpg\" alt=\"u\" width = \"30\">";
        result += "<div id = \"clicker\"> </div>"
        result += "</li>"
    }
    result += "</ol>";
    document.getElementById("vote").innerHTML = result;
}
makeTableHTML(foods);
