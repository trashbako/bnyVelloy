var cvs = null;
var ctx = null;

window.onload = function(){
    imageDraw();
}

function imageDraw() {
    var opc = document.getElementById("opc").value;
    opc = opc*0.01;

    cvs = document.getElementById('cvs1');
    ctx = cvs.getContext('2d');

    var img = new Image();
    img.src = "./img/v_sotai.png";
    var tyt = new Image();
    tyt.src = "./img/v_josan.png";

    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.clearRect(0,0,600,800);
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 600, 800);
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = opc;
        ctx.drawImage(tyt, 0, 0, 600, 800);
    }
    
}