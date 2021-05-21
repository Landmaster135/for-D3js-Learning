var fmtFunc = d3.format("-");
var n1 = fmtFunc(120.987654);
console.log(n1);
var n2 = fmtFunc(0.123);
console.log(n2);
var n3 = fmtFunc(-0.99);
console.log(n3);
d3.select("#result").html(n1+"<br>"+n2+"<br>"+n3);