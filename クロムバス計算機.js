var circulate = document.getElementById('circulate');
var clear = document.getElementById('Allclear');
var number1= document.getElementById('number1');
var number2= document.getElementById('number2');
var number3= document.getElementById('number3');
var ddl1= document.getElementById('ddl1');
var ddl2= document.getElementById('ddl2');
var imbolic_a = document.getElementById('imbolic');
var saoin_a = document.getElementById('saoin');
var basu_a = document.getElementById('basu');
var beltein_a = document.getElementById('beltein');
var lunasa_a = document.getElementById('lunasa');
var imbolic_button =document.getElementById('imbolic_copy');
var saoin_button =document.getElementById('saoin_copy');
var basu_button =document.getElementById('basu_copy');
var beltein_button =document.getElementById('beltein_copy');
var lunasa_button =document.getElementById('lunasa_copy');
var pluse_button_first = document.getElementById('pluse_button_first');
var minus_button_first = document.getElementById('minus_button_first');
var multiplication_button_first = document.getElementById('multiplication_button_first');
var pluse_button_second = document.getElementById('pluse_button_second');
var minus_button_second = document.getElementById('minus_button_second');
var multiplication_button_second = document.getElementById('multiplication_button_second');

var table1 = document.getElementById('table1');
var table2 = document.getElementById('table2');
var table3 = document.getElementById('table3');

var table1_1 = document.getElementById('table_1_1');
var table2_1 = document.getElementById('table_2_1');
var table3_1 = document.getElementById('table_3_1');

var table1_2 = document.getElementById('table_1_2');
var table2_2 = document.getElementById('table_2_2');
var table3_2 = document.getElementById('table_3_2');

var table1_3 = document.getElementById('table_1_3');
var table2_3 = document.getElementById('table_2_3');
var table3_3 = document.getElementById('table_3_3');

var table1_4 = document.getElementById('table_1_4');
var table2_4 = document.getElementById('table_2_4');
var table3_4 = document.getElementById('table_3_4');

var table1_5 = document.getElementById('table_1_5');
var table2_5 = document.getElementById('table_2_5');
var table3_5 = document.getElementById('table_3_5');

var table1_6 = document.getElementById('table_1_6');
var table2_6 = document.getElementById('table_2_6');
var table3_6 = document.getElementById('table_3_6');

var table1_7 = document.getElementById('table_1_7');
var table2_7 = document.getElementById('table_2_7');
var table3_7 = document.getElementById('table_3_7');

var table1_8 = document.getElementById('table_1_8');
var table2_8 = document.getElementById('table_2_8');
var table3_8 = document.getElementById('table_3_8');

var table1_9 = document.getElementById('table_1_9');
var table2_9 = document.getElementById('table_2_9');
var table3_9 = document.getElementById('table_3_9');

var table1_0 = document.getElementById('table_1_0');
var table2_0 = document.getElementById('table_2_0');
var table3_0 = document.getElementById('table_3_0');

var number1_clear = document.getElementById('clear1');
var number2_clear = document.getElementById('clear2');
var number3_clear = document.getElementById('clear3');





circulate.addEventListener('click',function(){

    if(ddl1.value == "+"){

        if(ddl2.value == "+"){
            imbolic_a.value = (Number(number1.value) + Number(number2.value) + Number(number3.value)) + "インボリック";
            saoin_a.value = (Number(number1.value) + Number(number2.value) + Number(number3.value)) + "サーオィン";            
            basu_a.value = (Number(number1.value) + Number(number2.value) + Number(number3.value)) + "バス";
            beltein_a.value = (Number(number1.value) + Number(number2.value) + Number(number3.value)) + "ベルテン";
            lunasa_a.value = (Number(number1.value) + Number(number2.value) + Number(number3.value)) + "ルーナサ";
        }
        if(ddl2.value == "-"){
            imbolic_a.value = (Number(number1.value) + Number(number2.value) - Number(number3.value)) + "インボリック";    
            saoin_a.value = (Number(number1.value) + Number(number2.value) - Number(number3.value)) + "サーオィン";            
            basu_a.value = (Number(number1.value) + Number(number2.value) - Number(number3.value)) + "バス";
            beltein_a.value = (Number(number1.value) + Number(number2.value) - Number(number3.value)) + "ベルテン";
            lunasa_a.value = (Number(number1.value) + Number(number2.value) - Number(number3.value)) + "ルーナサ";
        }
        if(ddl2.value == "*"){
            imbolic_a.value = ((Number(number1.value) + Number(number2.value)) * Number(number3.value)) + "インボリック";
            saoin_a.value = ((Number(number1.value) + Number(number2.value)) * Number(number3.value)) + "サーオィン";            
            basu_a.value = ((Number(number1.value) + Number(number2.value)) * Number(number3.value)) + "バス";
            beltein_a.value = ((Number(number1.value) + Number(number2.value)) * Number(number3.value)) + "ベルテン";
            lunasa_a.value = ((Number(number1.value) + Number(number2.value)) * Number(number3.value)) + "ルーナサ";
        }
    }else if (ddl1.value == "-"){
        if(ddl2.value == "+"){
            imbolic_a.value = (Number(number1.value) - Number(number2.value) + Number(number3.value)) + "インボリック";
            saoin_a.value = (Number(number1.value) - Number(number2.value) + Number(number3.value)) + "サーオィン";            
            basu_a.value = (Number(number1.value) - Number(number2.value) + Number(number3.value)) + "バス";
            beltein_a.value = (Number(number1.value) - Number(number2.value) + Number(number3.value)) + "ベルテン";
            lunasa_a.value = (Number(number1.value) - Number(number2.value) + Number(number3.value)) + "ルーナサ";
        }
        if(ddl2.value == "-"){
            imbolic_a.value = (Number(number1.value) - Number(number2.value) - Number(number3.value)) + "インボリック";    
            saoin_a.value = (Number(number1.value) - Number(number2.value) - Number(number3.value)) + "サーオィン";            
            basu_a.value = (Number(number1.value) - Number(number2.value) - Number(number3.value)) + "バス";
            beltein_a.value = (Number(number1.value) - Number(number2.value) - Number(number3.value)) + "ベルテン";
            lunasa_a.value = (Number(number1.value) - Number(number2.value) - Number(number3.value)) + "ルーナサ";
        }
        if(ddl2.value == "*"){
            imbolic_a.value = ((Number(number1.value) - Number(number2.value)) * Number(number3.value)) + "インボリック";
            saoin_a.value = ((Number(number1.value) - Number(number2.value)) * Number(number3.value)) + "サーオィン";            
            basu_a.value = ((Number(number1.value) - Number(number2.value)) * Number(number3.value)) + "バス";
            beltein_a.value = ((Number(number1.value) - Number(number2.value)) * Number(number3.value)) + "ベルテン";
            lunasa_a.value = ((Number(number1.value) - Number(number2.value)) * Number(number3.value)) + "ルーナサ";
        }
    }else if (ddl1.value == "*"){
        if(ddl2.value == "+"){
            imbolic_a.value = (Number(number1.value) * Number(number2.value) + Number(number3.value)) + "インボリック";
            saoin_a.value = (Number(number1.value) * Number(number2.value) + Number(number3.value)) + "サーオィン";            
            basu_a.value = (Number(number1.value) * Number(number2.value) + Number(number3.value)) + "バス";
            beltein_a.value = (Number(number1.value) * Number(number2.value) + Number(number3.value)) + "ベルテン";
            lunasa_a.value = (Number(number1.value) * Number(number2.value) + Number(number3.value)) + "ルーナサ";
        }
        if(ddl2.value == "-"){
            imbolic_a.value = (Number(number1.value) * Number(number2.value) - Number(number3.value)) + "インボリック";    
            saoin_a.value = (Number(number1.value) * Number(number2.value) - Number(number3.value)) + "サーオィン";            
            basu_a.value = (Number(number1.value) * Number(number2.value) - Number(number3.value)) + "バス";
            beltein_a.value = (Number(number1.value) * Number(number2.value) - Number(number3.value)) + "ベルテン";
            lunasa_a.value = (Number(number1.value) * Number(number2.value) - Number(number3.value)) + "ルーナサ";
        }
        if(ddl2.value == "*"){
            imbolic_a.value = (Number(number1.value) * Number(number2.value) * Number(number3.value)) + "インボリック";
            saoin_a.value = (Number(number1.value) * Number(number2.value) * Number(number3.value)) + "サーオィン";            
            basu_a.value = (Number(number1.value) * Number(number2.value) * Number(number3.value)) + "バス";
            beltein_a.value = (Number(number1.value) * Number(number2.value) * Number(number3.value)) + "ベルテン";
            lunasa_a.value = (Number(number1.value) * Number(number2.value) * Number(number3.value)) + "ルーナサ";
        }
    }

})
clear.addEventListener('click',function(){
    number1.value = "";
    number2.value = "";
    number3.value = "";
    imbolic_a.value = "";
    saoin_a.value = "";
    basu_a.value = "";
    beltein_a.value = "";
    lunasa_a.value = "";

})



imbolic_button.addEventListener('click',function(){
    navigator.clipboard.writeText(imbolic_a.value);
})
saoin_button.addEventListener('click',function(){
    navigator.clipboard.writeText(imbolic_a.value);
})
basu_button.addEventListener('click',function(){
    navigator.clipboard.writeText(imbolic_a.value);
})
beltein_button.addEventListener('click',function(){
    navigator.clipboard.writeText(imbolic_a.value);
})
lunasa_button.addEventListener('click',function(){
    navigator.clipboard.writeText(imbolic_a.value);
})




pluse_button_first.addEventListener('click',function(){
    ddl1.value = "+";
})
minus_button_first.addEventListener('click',function(){
    ddl1.value = "-";
})
multiplication_button_first.addEventListener('click',function(){
    ddl1.value = "*";
})
pluse_button_second.addEventListener('click',function(){
    ddl2.value = "+";
})
minus_button_second.addEventListener('click',function(){
    ddl2.value = "-";
})
multiplication_button_second.addEventListener('click',function(){
    ddl2.value = "*";
})

table1_1.addEventListener('click',function(){
    number1.value = number1.value + table1_1.value
})
table1_2.addEventListener('click',function(){
    number1.value = number1.value + table1_2.value
})
table1_3.addEventListener('click',function(){
    number1.value = number1.value + table1_3.value
})
table1_4.addEventListener('click',function(){
    number1.value = number1.value + table1_4.value
})
table1_5.addEventListener('click',function(){
    number1.value = number1.value + table1_5.value
})
table1_6.addEventListener('click',function(){
    number1.value = number1.value + table1_6.value
})
table1_7.addEventListener('click',function(){
    number1.value = number1.value + table1_7.value
})
table1_8.addEventListener('click',function(){
    number1.value = number1.value + table1_8.value
})
table1_9.addEventListener('click',function(){
    number1.value = number1.value + table1_9.value
})
table1_0.addEventListener('click',function(){
    number1.value = number1.value + table1_0.value
})
table2_1.addEventListener('click',function(){
    number2.value = number2.value + table2_1.value
})
table2_2.addEventListener('click',function(){
    number2.value = number2.value + table2_2.value
})
table2_3.addEventListener('click',function(){
    number2.value = number2.value + table2_3.value
})
table2_4.addEventListener('click',function(){
    number2.value = number2.value + table2_4.value
})
table2_5.addEventListener('click',function(){
    number2.value = number2.value + table2_5.value
})
table2_6.addEventListener('click',function(){
    number2.value = number2.value + table2_6.value
})
table2_7.addEventListener('click',function(){
    number2.value = number2.value + table2_7.value
})
table2_8.addEventListener('click',function(){
    number2.value = number2.value + table2_8.value
})
table2_9.addEventListener('click',function(){
    number2.value = number2.value + table2_9.value
})
table2_0.addEventListener('click',function(){
    number2.value = number2.value + table2_0.value
})
table3_1.addEventListener('click',function(){
    number3.value = number3.value + table3_1.value
})
table3_2.addEventListener('click',function(){
    number3.value = number3.value + table3_2.value
})
table3_3.addEventListener('click',function(){
    number3.value = number3.value + table3_3.value
})
table3_4.addEventListener('click',function(){
    number3.value = number3.value + table3_4.value
})
table3_5.addEventListener('click',function(){
    number3.value = number3.value + table3_5.value
})
table3_6.addEventListener('click',function(){
    number3.value = number3.value + table3_6.value
})
table3_7.addEventListener('click',function(){
    number3.value = number3.value + table3_7.value
})
table3_8.addEventListener('click',function(){
    number3.value = number3.value + table3_8.value
})
table3_9.addEventListener('click',function(){
    number3.value = number3.value + table3_9.value
})
table3_0.addEventListener('click',function(){
    number3.value = number3.value + table3_0.value
})
number1_clear.addEventListener('click',function(){
    number1.value = ""
})
number2_clear.addEventListener('click',function(){
    number2.value = ""
})
number3_clear.addEventListener('click',function(){
    number3.value = ""
})
