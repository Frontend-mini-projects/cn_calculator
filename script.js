function backspace(){
    let exp = document.getElementById("result").value;
    exp = exp.substring(0,exp.length-1);
    document.getElementById("result").value = exp;
    console.log(exp);
}



function allClear(){
    document.val.ans.value='';
}

function percentage(){
    document.val.ans.value+='%';
}
function plus(){
    document.val.ans.value+='+';
}

function minus(){
    document.val.ans.value+='-';
}

function multiply(){
    document.val.ans.value+='*';
}

function divide(){
    document.val.ans.value+='/';
}

function equal(){
    document.val.ans.value =eval(document.val.ans.value);
}

// number functions

function nine(){
    document.val.ans.value+='9';
}

function eight(){
    document.val.ans.value+='8';
}

function seven(){
    document.val.ans.value+='7';
}

function six(){
    document.val.ans.value+='6';
}

function five(){
    document.val.ans.value+='5';
}

function four(){
    document.val.ans.value+='4';
}

function three(){
    document.val.ans.value+='3';
}

function two(){
    document.val.ans.value+='2';
}

function one(){
    document.val.ans.value+='1';
}

function zero(){
    document.val.ans.value+='0';
}

function doubleZero(){
    document.val.ans.value+='00';
}

function decimal(){
    document.val.ans.value+='.';
}



// add event listners of click

document.getElementById('clear').addEventListener('click',allClear);
document.getElementById('perc').addEventListener('click',percentage);
document.getElementById('back').addEventListener('click',backspace);
document.getElementById('equal').addEventListener('click',equal);

document.getElementById('plus').addEventListener('click',plus);
document.getElementById('minus').addEventListener('click',minus);
document.getElementById('multiply').addEventListener('click',multiply);
document.getElementById('divide').addEventListener('click',divide);


document.getElementById('zero').addEventListener('click',zero);
document.getElementById('one').addEventListener('click',one);
document.getElementById('two').addEventListener('click',two);
document.getElementById('three').addEventListener('click',three);
document.getElementById('four').addEventListener('click',four);
document.getElementById('five').addEventListener('click',five);
document.getElementById('six').addEventListener('click',six);
document.getElementById('seven').addEventListener('click',seven);
document.getElementById('eight').addEventListener('click',eight);
document.getElementById('nine').addEventListener('click',nine);
document.getElementById('dZero').addEventListener('click',doubleZero);
document.getElementById('decimal').addEventListener('click',decimal);


// keyboard events
document.addEventListener('keypress',function(event){
    console.log(event.keyCode);
    let code = event.keyCode;

    switch (code) {

        case 48:
            zero();
            break;
        case 49:
            one();
            break;
        case 50:
            two();
            break;
        case 51:
            three();
            break;
        case 52:
            four();
            break;
        case 53:
            five();
            break;

        case 54:
            six();
            break;
        case 55:
            seven();
            break;

        case 56:
            eight();
            break;
        case 57:
            nine();
            break;


        case 46:
            decimal();
            break;

        case 43:
            plus();
            break;
        case 45:
            minus();
            break;
        case 42:
            multiply();
            break;
        case 47:
            divide();
            break;
        case 37:
            percentage();
            break;
        case 61:
            equal();
            break;
        case 13:
            equal();
            break;

        
        
        

        case 32:
            allClear();
            break;

        
        
        
        
        
        
        
        

        
         
    
        
    }
})



