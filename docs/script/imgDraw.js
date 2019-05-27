window.onload = function(){
    imageDraw();
}

function imageDraw() {
    //2Dコンテキストのオブジェクトを生成する
    var cvs = document.getElementById('cvs1');
    var ctx = cvs.getContext('2d');
  
    //画像オブジェクトを生成
    var img = new Image();
    img.src = "./img/v_sotai.png";
    var tyt = new Image();
    tyt.src = "./img/v_josan.png";
  
    //画像をcanvasに設定
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 600, 800);
        tyt.onload = function(){
            ctx.drawImage(tyt, 0, 0, 600, 800);
        }
    }
    
}

function stockDraw(){

}