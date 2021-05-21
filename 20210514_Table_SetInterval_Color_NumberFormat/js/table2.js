let count = 0;
const countUp = () =>{
    console.log(count++);
}
const intervalId = setInterval(function(){
    var list = [];
    // ランダムな個数でランダムなデータを生成
    var n = Math.floor(Math.random() * 10) + 1;
    for(var i=0; i<n; i++){
        list.push(Math.floor(Math.random() * 1000));
    }
    outputData(); // 生成
    removeData(); // 削除
    updateData(); // 更新
    // 要素を出力する関数
    function outputData(){
        d3.select("#result") // table要素を選択
            .selectAll("tr") // tr要素を__data__保存の対象にする
            .data(list)      // 対象になるデータ
            .enter()         // データの数だけ以下の続く要素を追加
            .append("tr")    // tr要素を追加
            .append("td")    // td要素を追加
        console.log(list);
    }
    // 要素（とデータ）を削除する関数
    function removeData(){
        d3.select("#result") // table要素を選択
            .selectAll("tr") // tr要素を削除対象にする
            .data(list)      // 対象になるデータ
            .exit()          // 「要素数がリスト数より多い場合」は以下の処理を実行
            .remove();       // データ数に対して余剰の要素を削除する
            console.log(list);
    }
    // 要素の内容を更新する関数
    function updateData(){
        d3.select("#result") // table要素を選択
            .selectAll("td") // データの出力先をtd要素を対象にする
            .data(list)      // 対象になるデータ
            .text(String);   // 内容をそのまま文字列で出力
            console.log(list);
    }

    // 本関数の自動実行をキャンセルする。
    countUp();
    if(count > 5){　
        clearInterval(intervalId); //intervalIdをclearIntervalで指定している
    }
}, 2000);


