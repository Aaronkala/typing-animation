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