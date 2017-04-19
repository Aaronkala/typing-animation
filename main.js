var counter = 0;
var script = ["Copy, art, and typography."]
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


function information(){
    if (counter == 0){
        document.querySelector("#infoButton").className = "fa fa-times-circle fa-2x";
        document.querySelector(".informationBox").style.height = "110px";
        counter = 1;
    } else if (counter == 1) {
        document.querySelector("#infoButton").className = "fa fa-info-circle fa-2x";
        document.querySelector(".informationBox").style.height = "0px";
        counter = 0;
    }
}