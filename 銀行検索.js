// 各種定義
var upload = document.getElementById('upload-file');
var reader = new FileReader();
var table = document.getElementById('table');
var search = document.getElementById('search');
var searchbtn = document.getElementById('searchbtn');
var ddl = document.getElementById('ddl')



// csvファイル読み込み時の動作
upload.addEventListener('change', function () {
    var file = upload.files[0];
    if (!file) alert('ファイルを選択してください。');
    reader.readAsText(file, 'shift-jis');

  //銀行の選択肢の生成 
    reader.onload = function () {
        let tableresult = reader.result.split('\r\n');
        let td = reader.result.split(/\r\n|,/);
        for(let i=0;i<=tableresult.length; i++){if(td[i*5+4] == 1){ddl.innerHTML += `<option value= "${td[i*5]}"> ${td[i*5+3]}</option>`}}}



// 銀行選択時の動作（当該銀行の全支店の情報表示）
ddl.addEventListener('change',function(){
        let none = "a";
        let tableresult = reader.result.split('\r\n');
        let td = reader.result.split(/\r\n|,/);
        table.innerHTML = `<tr style="background-color: yellow;"><th class="gincode">金融機関コード</th><th class="sitencode">支店コード</th><th class="sitennamekana">支店名カナ</th><th class="sitenname">支店名</th></tr>`
         for(let i = 0; i <= tableresult.length; i++){
            if (tableresult[i] === undefined){ none = "none"}
            else{none = "null"}
            if(td[i*5] == ddl.value){if(td[i*5+4] == 2){
         table.innerHTML += `<tr style="display:${none}; text-align: center;"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${td[i*5+2]}</td><td>${td[i*5+3]}</td></tr>`;}    }}})

         

// 支店名（漢字）検索時の動作
searchbtn.addEventListener('click',function(){
      let tableresult = reader.result.split('\r\n');
      let td = reader.result.split(/\r\n|,/);
      table.innerHTML = `<tr style="background-color: yellow;"><th class="gincode">金融機関コード</th><th class="sitencode">支店コード</th><th class="sitennamekana">支店名カナ</th><th class="sitenname">支店名</th></tr>`

            for(let i = 0; i <= tableresult.length; i++){
              if(td[i*5] == ddl.value){
              if (td[i*5+3].indexOf(search.value) !== -1){ table.innerHTML += `<tr style="text-align: center"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${td[i*5+2]}</td><td>${td[i*5+3]}</td></tr>`;}
          }}})})