var c = d3.select("#myText");

c.style("color","#00dd00");

var d = c.style("color");
d3.select("#result")
    .select("div")
    .data("1")
    .enter()
    .append("div")
    .text(d);

c.style("color", "red");

var e = c.style("color");
d3.select("#result")
    .select("div")
    .data("1")
    .enter()
    .append("div")
    .text(e);
