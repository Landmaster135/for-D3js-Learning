
// 一次元配列の場合
var list = [10, 30, 23, 45, 65, 30, 67];
var tbl = d3.select("#result")  // div#result内に出力
    .append("table")    // table要素を追加
    .selectAll("tr")    // tr要素を対象にする
    .data(list) // 出力するデータ
    .enter()    // データ数だけ要素を生成
    .append("tr")
    .append("td")
    .text(String)   // データ内容を出力

// 一次元配列でデータを加工する場合
var list = [10, 30, 23, 45, 65, 30, 67];
var tbl = d3.select("#result")  // div#result内に出力
    .append("table")    // table要素を追加
    .selectAll("tr")    // tr要素を対象にする
    .data(list) // 出力するデータ
    .enter()    // データ数だけ要素を生成
    .append("tr")
    .append("td")
    .text(function(d){  // データ内容を出力
        return d+" cm";
    })

// 二次元配列の場合①
var list = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], ];
var tbl = d3.select("#result")  // div#result内に出力
    .append("table")    // table要素を追加
    .attr("border", "1") // 枠線表示
    .append("tbody")
    .selectAll("tr")    // tr要素を対象にする
    .data(list) // 出力するデータ
    .enter()    // データ数だけ要素を生成
    .append("tr")
    .selectAll("td")
    .data(function(row){    // 1行ごとにデータを返す
        return d3.entries(row); // key, valueを返す
    })
    .enter()
    .append("td")   // td要素を追加
    .text(function(d){ 
        return d.value + " cm"; // valueが配列要素の値
    })
    ;

// 二次元配列の場合②
var list = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], ];
d3.select("#result")
    .append("table")
    .attr("border", "3") // 枠線表示
    .append("tbody") // 入れても入れなくても描画できる。デザインを細分化したい場合に使おう。
    .selectAll("tr")
    .data(list)
    .enter()
    .append("tr")
    .selectAll("td")
    .data(function(row) { return row; }) // 1行ごとにデータを返す
    .enter()
    .append("td")
    .text(function(d) { return d + " cm"; })
    ;


// オブジェクトの場合
var list = [
    { "name": "A", "para1": 0, "para2": 5 },
    { "name": "B", "para1": 1, "para2": 6 },
    { "name": "C", "para1": 2, "para2": 7 },
    { "name": "D", "para1": 3, "para2": 8 },
    { "name": "E", "para1": 4, "para2": 9 }
]
     
var names = d3.keys(list[0]);

var table = d3.select("#result")
.append("table")
.attr("border", "1") // 枠線表示;

table.append("thead")
.append("tr")
.selectAll("th")
.data(names)
.enter()
.append("th")
.text(function(d) { return d; });

table.append("tbody")
.selectAll("tr")
.data(list)
.enter()
.append("tr")
.selectAll("td")
.data(function(row) { return d3.entries(row); })
.enter()
.append("td")
.text(function(d) { return d.value; });

