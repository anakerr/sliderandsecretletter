// Charcode
document.getElementById('in1').oninput=function(){
    let txt=this.value;
    let out=' ';
    for(let i=0; i<txt.length; i++){
        let code=txt.charCodeAt(i);
        code=code+2000;
        out+=String.fromCharCode(code);
    }
    document.getElementById('out1').innerHTML = out;
}

document.getElementById('in2').oninput=function(){
    let txt=this.value;
    let out=' ';
    for(let i=0; i<txt.length; i++){
        let code=txt.charCodeAt(i);
        code=code-2000;
        out+=String.fromCharCode(code);
    }
    document.getElementById('out2').innerHTML=out;
}

let slider=document.getElementById('pl');
let y=0;
function move(){
    y-=100;
    if(y<=-500){
        y=0;
    }
    slider.style.top=y+'px';
}

setInterval(move, 1000)