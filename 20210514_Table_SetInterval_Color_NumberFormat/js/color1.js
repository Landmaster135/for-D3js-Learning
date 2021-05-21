var list = [5, 5, 12, 3, 2, 3, 8, 12, 17, 7, 3, 10, 8, 5];
var color = d3.scale.category20();  // 20色を指定
var svgWidth = 320; // SVG領域の横幅
var svgHeight = 240;    // SVG領域の縦幅
// SVGの表示領域を生成
var svg = d3.select("#myGraph").append("svg")
    .attr("width", svgWidth).attr("height", svgHeight)
// 円グラフを生成
var pie = d3.layout.pie()
    .value(function(d){ return d; })
// 円グラフのサイズを指定
var arc = d3.svg.arc().innerRadius(40).outerRadius(100);
// 円グラフを描画
svg.selectAll("path")
    .data(pie(list))
    .enter()
    .append("path") // 円弧はパスで指定する
    .attr("d", arc) // 円弧を設定
    .attr("stroke", "white")    // 円グラフの区切り線を白色にする
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("transform", "translate("+svgWidth/2+", "+svgHeight/2+")")    // 円グラフをSVG領域の中心にする