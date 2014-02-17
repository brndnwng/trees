function drawTree(){

	var canvas = document.getElementById('trees');

	var canvasHeight = canvas.height;
	var canvasWidth = canvas.width;
		var ctx = canvas.getContext('2d');
		for (var i = 0; i < 35;i++){
			var canvasTop3rd = canvasHeight/3;
			var randomX = Math.floor(Math.random()*(canvasWidth-200))+100;
			var randomY = Math.floor(Math.random()*canvasTop3rd);
			var randomTrans = 0.2;
			
			
			drawCircle(randomX,randomY,randomTrans,ctx);
		}
		drawFractalTree(ctx,canvasWidth/2,canvasTop3rd*2);

    function drawCircle(x,y,randomTrans,ctx){

    	ctx.beginPath();
    	ctx.fillStyle = 'rgba(0,255,0,'+randomTrans+')';
    	ctx.moveTo(x,y);
    	ctx.arc(x,y,50,0,2*Math.PI);
		
    	ctx.closePath();
    	ctx.fill();
    	
    	 //auto calls closePath
    }
 
    function drawFractalTree(context,height,width){
        

        depth = random(3, 8);
        drawTree(context, height, width, -90, depth);
      
    }
 
    function drawTree(context, x1, y1, angle, depth){
 
        var BRANCH_LENGTH = random(20, 30);

 
        if (depth != 0){
            var x2 = x1 + (cos(angle) * depth * BRANCH_LENGTH);
            var y2 = y1 + (sin(angle) * depth * BRANCH_LENGTH);
          
            drawTrunk(context, x1, y1, x2, y2, depth);
            drawBranches(context, x2, y2, angle - random(15,20), depth - 1);
            drawBranches(context, x2, y2, angle + random(15,20), depth - 1);
        }
    }

    function drawTrunk(context, x1, y1, x2, y2, thickness){
        context.fillStyle   = '#000';
        context.strokeStyle = 'rgb(139,126, 102)'; //Brown      
 
        context.lineWidth = thickness * 2.5;
        context.beginPath();
 
        context.moveTo(x1,y1);
        context.lineTo(x2, y2);
 
        context.closePath();
        context.stroke();
  
    }

    function drawBranches(context, x1, y1, angle, depth){
    	 
        var BRANCH_LENGTH = random(0, 10);
 
        if (depth != 0){
            var x2 = x1 + (cos(angle) * depth * BRANCH_LENGTH);
            var y2 = y1 + (sin(angle) * depth * BRANCH_LENGTH);
          
            drawLine(context, x1, y1, x2, y2, depth);
            drawBranches(context, x2, y2, angle - random(15,20), depth - 1);
            drawBranches(context, x2, y2, angle + random(15,20), depth - 1);
        }
    }

 	function drawLine(context, x1, y1, x2, y2, thickness){
        context.fillStyle   = '#000';
  
        context.strokeStyle = 'rgba(139,126, 102,0.5)'; //Brown      
 
        context.lineWidth = thickness * 1.5;
        context.beginPath();
 
        context.moveTo(x1,y1);
        context.lineTo(x2, y2);
 
        context.closePath();
        context.stroke();
  
    }
 
    function cos (angle) {
        return Math.cos(deg_to_rad(angle));
    }
 
    function sin (angle) {
        return Math.sin(deg_to_rad(angle));
    }
 
    function deg_to_rad(angle){
        return angle*(Math.PI/180.0);
    }
 
    function random(min, max){
        return min + Math.floor(Math.random()*(max+1-min));
    }

}