// d3.csv("data.csv", function(error, list){
//     console.log("Error found.");
//     if(error != null){
//         console.log("Error found.");
//         return;
//     }
//     d3.select("#result")
//         .append("table")
//         .selectAll("tr")
//         .data(list)
//         .enter()
//         .append("tr")
//         .append("td")
//         .text(function(d){
//             return d["value"];
//         })
// });

// データにヘッダを付けなかった場合、、、
// d3.select("#result")
//     .selectAll("div")
//     .data([200,100,150,200])
//         .enter()
//         .append("div")
//         .text(function(d){
//             return d;
//         })
// ;
// データにヘッダを付けた場合、、、
d3.select("#result")
    .append("table")
    .selectAll("tr")
        .data([{"value": 200},{"value": 100},{"value": 150},{"value": 200}])
        .enter()
        .append("tr")
    .append("td")
        .text(function(d){
            return d["value"];
        })
;

