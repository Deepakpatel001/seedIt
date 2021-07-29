var que = ["HTML stands for -", "What is the correct syntax of doctype in HTML5?", "The <hr> tag in HTML is used for -"];
var opt1 = ["HighText Machine Language", "<!doctype html>", "new line"]
var opt2 = ["HyperText and links Markup Language", "<doctype html!>", "vertical ruler"]
var opt3 = ["HyperText Markup Language", "<doctype html>", "new paragraph"]
var opt4 = ["None of these", "</doctype html>", "horizontal ruler"]


function next() {
    var count = 0
    document.getElementById("que").innerText = que[count];
    document.getElementById("option1").innerText = opt1[count];
    document.getElementById("option2").innerText = opt2[count];
    document.getElementById("option3").innerText = opt3[count];
    document.getElementById("option4").innerText = opt4[count];
    count++;

}