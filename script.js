let alertbtn = document.getElementById("alertbtn");
let choices = [
    "josh should be slimed",
    "josh needs to be deatomized",
    "josh should be eliminated",
    "josh should be banished",
    "josh should be terminated",
    "sentance josh to eterniy in azkaban",
    "send josh to muken",
    "send josh to dantes inferno",
    "josh should be sent to the shadow realm",
    "josh should be sent to the upside down",
    "josh should be sent to the void",
    "josh should be sent to the nether",
    "josh should be sent to the end",
    "josh should be sent to the dark side of the moon",
    "josh should be sent to the sun",
    "josh should be sent to the center of the earth",
    "josh should be sent to rock bottom",
    

];
function jalert() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    alert(choices[randomIndex]);
}
alertbtn.addEventListener("click", jalert);