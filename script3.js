let btn3 = document.getElementById("btn3");
let Night = false;
function NightMode() {
document.body.style.background = "black";
document.body.style.color = "white";
}
function DayMode() {
document.body.style.background = "white";
document.body.style.color = "black";
}
function ChangeMode() {
if (Night == false) {
NightMode();
Night = true;
 } else {
    DayMode();
    Night = false;
    }
}
btn3.addEventListener("click", ChangeMode);