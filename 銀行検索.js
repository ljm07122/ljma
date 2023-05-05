// 各種定義
var upload = document.getElementById('upload-file');
var reader = new FileReader();
var table = document.getElementById('table');
var search = document.getElementById('search');
var searchbtn = document.getElementById('searchbtn');
var ddl = document.getElementById('ddl');
let message = document. getElementById('message');


windows.onload = function(){
  var req = new XMLHttpRequest();
  req.open("get","ginkositen.csv",true);
  req.send(null);
  req.onload = function(){
      req.readAsText(file,'shift-jis');
      var tableresult = str.split('\r\n'); 
      var td = str(/\r\n|,/);
        for(let i=0;i<=tableresult.length; i++){
          let as = td[i*5+3].replaceAll('"','')
          if(td[i*5+4] == 1){ddl.innerHTML += `<option value= "${td[i*5]}"> ${as}</option>`};};



// 銀行選択時の動作（当該銀行の全支店の情報表示）
ddl.addEventListener('change',function(){
        let none = "a";
        let tableresult = reader.result.split('\r\n');
        let td = reader.result.split(/\r\n|,/);
        table.innerHTML = `<tr style="background-color: yellow;"><th class="gincode">金融機関コード</th><th class="sitencode">支店コード</th><th class="sitennamekana">支店名カナ</th><th class="sitenname">支店名</th></tr>`
         for(let i = 0; i <= tableresult.length; i++){
            let ab = td[i*5+2].replaceAll('"','')
            let as = td[i*5+3].replaceAll('"','')
            if (tableresult[i] === undefined){ none = "none"}
            else{none = "null"}
            if(td[i*5] == ddl.value){if(td[i*5+4] == 2){
              table.innerHTML += `<tr style="display:${none}; text-align: center;"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}    }}})

         

// 支店名（漢字）検索時の動作
searchbtn.addEventListener('click',function(){
      let tableresult = reader.result.split('\r\n');
      let td = reader.result.split(/\r\n|,/);
      table.innerHTML = `<tr style="background-color: yellow;"><th class="gincode">金融機関コード</th><th class="sitencode">支店コード</th><th class="sitennamekana">支店名カナ</th><th class="sitenname">支店名</th></tr>`

            for(let i = 0; i <= tableresult.length; i++){
              let ab = td[i*5+2].replaceAll('"','')
              let as = td[i*5+3].replaceAll('"','')
              if(td[i*5] == ddl.value){
              if (td[i*5+3].indexOf(search.value) !== -1){
                table.innerHTML += `<tr style="text-align: center"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}
                else{if(td[i*5+1].indexOf(search.value) !== -1){
                table.innerHTML += `<tr style="text-align: center"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}
              }
          }}})}}
