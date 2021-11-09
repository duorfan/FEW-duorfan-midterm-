

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var btnClick = document.getElementById("clickme");
var btnClick2 = document.getElementById("clickme2");
var btnClick3 = document.getElementById("clickme3");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;

}

var onButtonClick = function() {
    btnClick.textContent = "Oh wow, you clicked me! Contact me and have fun with me!";
};
    btnClick.addEventListener("click", onButtonClick);

btnClick2.addEventListener("click", function() {
    btnClick2.textContent = "Here's my amazing works!";
 });

btnClick3.addEventListener("click", function() {
    btnClick3.textContent = "Look at my vlogs!";
 });