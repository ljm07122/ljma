// 各種定義
var table = document.getElementById('table');
var search = document.getElementById('search');
var searchbtn = document.getElementById('searchbtn');
var ddl = document.getElementById('ddl');
var ddl1 = document.getElementById('ddl1')
var message = document. getElementById('message');



// サーバー上のファイル読み取り
var request = new XMLHttpRequest(); 
csv_data('https://ljm07122.github.io/ljma/ginkositen.csv');
function csv_data(dataPath) {
	      request.addEventListener('load', function() { 
		    const response = request.responseText; 
        let tableresult = response.split('\r\n');
        let td = response.split(/\r\n|,/);
        for(let i=0;i<=tableresult.length; i++){
           let as = td[i*5+3].replaceAll('"','')        
           if(td[i*5+4] == 1){ddl1.innerHTML += `<option value= "${td[i*5]}" > ${as}</option>`};message.innerHTML = `読み取り完了`;}});
        request.open('GET', dataPath, true);
        request.send();}
      

// 銀行選択時の動作（当該銀行の全支店の情報表示）
ddl.addEventListener('change',function(){
        const response = request.responseText;
        let tableresult = response.split('\r\n');
        let td = response.split(/\r\n|,/)
        table.innerHTML = `<tr style="background-color: yellow;"><th class="gincode">金融機関コード</th><th class="sitencode">支店コード</th><th class="sitennamekana">支店名カナ</th><th class="sitenname">支店名</th></tr>`
        console.log(search.value)
        for(let i = 0; i <= tableresult.length; i++){
          let ab = td[i*5+2].replaceAll('"','')
          let as = td[i*5+3].replaceAll('"','')
          if (tableresult[i] === undefined){ none = "none"}
             else{none = "null"}
          if(td[i*5] == ddl.value){if(td[i*5+4] == 2){
             table.innerHTML += `<tr style="display:${none}; text-align: center;"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}}}})

         

// 支店名検索時の動作
searchbtn.addEventListener('click',function(){
        const response = request.responseText;
        let tableresult = response.split('\r\n');
        let td = response.split(/\r\n|,/);
        if(search.value == ""){alert('検索キーワードを設定してください')}else{
          table.innerHTML = `<tr style="background-color: yellow;"><th class="gincode">金融機関コード</th><th class="sitencode">支店コード</th><th class="sitennamekana">支店名カナ</th><th class="sitenname">支店名</th></tr>`
          for(let i = 0; i <= tableresult.length; i++){
             let ab = td[i*5+2].replaceAll('"','')
             let as = td[i*5+3].replaceAll('"','')
             if(ddl.value == ""){
                if(td[i*5+3].indexOf(search.value) !== -1){table.innerHTML += `<tr style="text-align: center"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}
                   else{if(td[i*5+1].indexOf(search.value) !== -1){
                      table.innerHTML += `<tr style="text-align: center"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}}}
                else{if(td[i*5] == ddl.value){
                   if (td[i*5+3].indexOf(search.value) !== -1){
                      table.innerHTML += `<tr style="text-align: center"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}
                      else{if(td[i*5+1].indexOf(search.value) !== -1){
                         table.innerHTML += `<tr style="text-align: center"><td>${td[i*5]}</td><td>${td[i*5+1]}</td><td>${ab}</td><td>${as}</td></tr>`;}}}}}}})
