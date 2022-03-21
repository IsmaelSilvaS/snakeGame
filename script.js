window.onload = function(){
    var stage =document.getElementById('stage');
    var ctx = stage.getContext('2d');

    document.addEventListener('keydown', keyPush);

    setInterval(game, 95);

    const speed = 1;
    var vx = vy = 0;
    var px = py = 10;
    var lp = 20;
    var qp = 20;
    var ax = ay = 15;

    var trail = [];
    var tail = 4;

    function game(){

        px += vx;
        py += vy;

        if(px < 0){
            px = qp - 1;
        }
        if(px > qp - 1){
            px = 0;
        }
        if(py < 0){
            py = qp - 1;
        }
        if(py > qp -1){
            py = 0;
        }

        ctx.fillStyle = 'black';
        ctx.fillRect(0,0, stage.clientWidth, stage.height);

        ctx.fillStyle = 'red';
        ctx.fillRect(ax * lp, ay * lp, lp, lp);

        ctx.fillStyle = 'green';
        
        for(var i = 0; i < trail.length; i++){
            ctx.fillRect(trail[i].x * lp, trail[i].y * lp, lp, lp);

            if(trail[i].x == px && trail[i].y == py){
                vx = vy = 0;
                tail = 4;
                // alert("Gamer Over.", "<br>", "Aperte F5 para recomeçar")
            }
        }

        trail.push({
            x: px,
            y: py
        });

        while(trail.length > tail){
            trail.shift();
        }

        if (ax == px && ay == py){
            tail++;
            speed
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }
    }

    function keyPush(e){
        switch(e.keyCode){
            case 37:
                vx =  -speed;
                vy = 0;
                break;
            case 38:
                vx =  0;
                vy = -speed;
                break;
            case 39:
                vx =  speed;
                vy = 0;
                break;
            case 40:
                vx =  0;
                vy = speed;
                break;
            default:
                break;
        }
    }
}