function drawTree(){

	var canvas = document.getElementById('trees');

	var canvasHeight = canvas.height;
	var canvasWidth = canvas.width;
		var ctx = canvas.getContext('2d');
		for (var i = 0; i < 8;i++){
			var canvasTop3rd = canvasHeight/3;
			var randomX = Math.floor(Math.random()*canvasWidth);
			var randomY = Math.floor(Math.random()*canvasTop3rd);
			var randomTrans = Math.random()/2;
			drawCircle(randomX,randomY,randomTrans,ctx);
		}

    function drawCircle(x,y,randomTrans,ctx){

    	ctx.beginPath();
    	ctx.fillStyle = 'rgba(0,255,0,'+randomTrans+')';
    	ctx.moveTo(x,y);
    	ctx.arc(x,y,100,0,2*Math.PI);
		
    	ctx.closePath();
    	ctx.fill();
    	
    	 //auto calls closePath
    }

}