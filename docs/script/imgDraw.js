window.onload = function(){
    imageDraw();
}

var cvs = document.getElementById('cvs1');
var ctx = cvs.getContext('2d');


//画像オブジェクト
var img = new Image();
img.src = "./img/v_sotai.png";
var tyt = new Image();
tyt.src = "./img/v_josan.png";

var imageDraw = function() {
    var opc = document.getElementById("opc").value;
    opc = opc*0.01;

    

    img.onload = function(){
        ctx.drawImage(img, 0, 0, 600, 800);
        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = opc;
        tyt.onload = function(){
            ctx.drawImage(tyt, 0, 0, 600, 800);
        }
    }
    
}