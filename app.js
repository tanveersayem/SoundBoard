const sound1 = document.querySelector("#myAudio1");
const sound2 = document.querySelector("#myAudio2");
const sound3 = document.querySelector("#myAudio3");
const sound4 = document.querySelector("#myAudio4");
const sound5 = document.querySelector("#myAudio5");
const sound6 = document.querySelector("#myAudio6");
const sound7 = document.querySelector("#myAudio7");
const sound8 = document.querySelector("#myAudio8");
const sound9 = document.querySelector("#myAudio9");
const applause = document.querySelector(".applause");
const baDumTiss = document.querySelector(".ba-dum-tiss");
const correct = document.querySelector(".correct");
const boo = document.querySelector(".boo");
const wrong = document.querySelector(".wrong");
const gasp = document.querySelector(".gasp");
const sadTrombone = document.querySelector(".sadTrombone");
const suspense = document.querySelector(".suspense");
const tada = document.querySelector(".tada");
const stop = document.querySelector("body");

//Event Listener
applause.addEventListener("click", playAudio1);
baDumTiss.addEventListener("click", playAudio2);
correct.addEventListener("click", playAudio3);
boo.addEventListener("click", playAudio4);
wrong.addEventListener("click", playAudio5);
gasp.addEventListener("click", playAudio6);
sadTrombone.addEventListener("click", playAudio7);
suspense.addEventListener("click", playAudio8);
tada.addEventListener("click", playAudio9);
// stop.addEventListener("keyup", (e) => {
//   if (e.keyCode === 65) {
//     sound1.play();
//   }
// });
stop.addEventListener("keyup", (e) => {
  if (e.keyCode === 32) {
    sound1.pause();
    sound2.pause();
    sound3.pause();
    sound4.pause();
    sound5.pause();
    sound6.pause();
    sound7.pause();
    sound8.pause();
    sound9.pause();
  }
});

function playAudio1() {
  sound1.play();
}
function playAudio2() {
  sound2.play();
}
function playAudio3() {
  sound3.play();
}
function playAudio4() {
  sound4.play();
}
function playAudio5() {
  sound5.play();
}
function playAudio6() {
  sound6.play();
}
function playAudio7() {
  sound7.play();
}
function playAudio8() {
  sound8.play();
}
function playAudio9() {
  sound9.play();
}
