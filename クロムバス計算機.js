var circulate = document.getElementById('circulate');
var clear = document.getElementById('A/C');
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

