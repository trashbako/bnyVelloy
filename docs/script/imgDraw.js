function imageDraw() {
    //2Dコンテキストのオブジェクトを生成する
    var cvs = document.getElementById('cvs1');
    var ctx = cvs.getContext('2d');
  
    //画像オブジェクトを生成
    var img = new Image();
    img.src = "/img/v_sotai.png";
  
    //画像をcanvasに設定
    img.onload = function(){
      ctx.drawImage(img, 0, 0, 600, 800);  //400x300に縮小表示
    }
  }