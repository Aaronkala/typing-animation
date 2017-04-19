var counter = 0;
var script = ["Simple, beautiful typing animation."];
var textToAnim = document.getElementById("animate");
var text = script[0];
var displayText = "";
function clearText(){
  textToAnim.innerHTML = "";
  displayText = "";
  counter = 0;
  animateText();
}
function animateText(){
  setTimeout(function(){
    if(counter == text.length){
      console.log("done");
    } else {
      displayText = displayText + text.charAt(counter);
      textToAnim.innerHTML = displayText;
      counter++;
      animateText();
    }
  }, randomTime());
}

function randomTime(){
  var rand = Math.round(Math.random() * (120)) + 30;
  return rand;
}

var infocounter = 0;
function information(){
    if (infocounter == 0){
        document.querySelector("#infoButton").className = "fa fa-times-circle fa-2x";
        document.querySelector(".informationBox").style.height = "110px";
        infocounter = 1;
    } else if (infocounter == 1) {
        document.querySelector("#infoButton").className = "fa fa-info-circle fa-2x";
        document.querySelector(".informationBox").style.height = "0px";
        infocounter = 0;
    }
}