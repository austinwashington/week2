let btn4 = document.getElementById("btn4");
let facts = [
    "I have an older sister",
    "I have 2 Belgian Malinois",   
    "I was season champ at jiu jitsu world league",
    "I want to be a mechanical engineer as my retirement career",
    "I enjoy playing video games in my free time",
    "Former top 500 in valorant",


];
function fbutton() {
    let randomIndex = Math.floor(Math.random() * facts.length);
    alert(facts[randomIndex]);
}

btn4.addEventListener("click", fbutton);