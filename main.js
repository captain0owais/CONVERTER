function calculate2(){
let decimal = document.getElementById("decimal_num").value;
document.getElementById("results").innerHTML = Number(decimal).toString(2);
}

function calculate(){
var binary = document.getElementById("decimal_num1").value;
var int = parseInt(binary, 2);
document.getElementById("results1").innerHTML = " " + int + " ";
}
