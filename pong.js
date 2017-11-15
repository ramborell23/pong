var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var paddleHeight = 25
var paddleWidth = 5
var paddlePadding = 30

var playerOneX = paddlePadding
var playerTwoX = (canvas.width - paddlePadding - 5)
var playerOneY = (canvas.height - paddleHeight)/2
var playerTwoY = (canvas.height - paddleHeight)/2

var playerOneUp = false
var playerOneDown = false

var playerTwoUp = false
var playerTwoDown = false

document.addEventListener('keydown', keyDown, false)
document.addEventListener('keyup', keyUp, false)

// document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    var relativeY = e.clientY - paddleHeight 
    if(relativeY> 0 && relativeY < canvas.height) {
        playerTwoY= relativeY - paddleWidth/2;
    }
}

function keyDown(ev){
    if(ev.keyCode === 65){
        playerOneUp = true
    }else if(ev.keyCode === 81){
        playerOneDown = true
    }else if(ev.keyCode === 40){
        playerTwoUp = true
    } else if (ev.keyCode === 38){
        playerTwoDown = true
    }
}

function keyUp(ev){
    if(ev.keyCode === 65){
        playerOneUp = false
    }else if(ev.keyCode === 81){
        playerOneDown = false
    }else if(ev.keyCode === 40){
        playerTwoUp = false
    } else if (ev.keyCode === 38){
        playerTwoDown = false
    }
}



function drawPaddleOne(){
    ctx.beginPath()
    ctx.rect(playerOneX, playerOneY, paddleWidth, paddleHeight)
    ctx.fillstyle = '#000000'
    ctx.fill()
    ctx.closePath()
}


function drawPaddleTwo(){
    ctx.beginPath()
    ctx.rect(playerTwoX, playerTwoY, paddleWidth, paddleHeight)
    ctx.fillstyle = '#000000'
    ctx.fill()
    ctx.closePath()
}



function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawPaddleOne()
    drawPaddleTwo()


    if (playerOneUp && playerOneY < canvas.height - paddleHeight ){
        playerOneY +=3

    }else if (playerOneDown && playerOneY > 0){
        playerOneY -=3
    }else if (playerTwoUp && playerTwoY < canvas.height - paddleHeight){
        playerTwoY +=3
    }else if (playerTwoDown && playerTwoY > 0){
        playerTwoY -=3
    }

}

setInterval(draw,10)