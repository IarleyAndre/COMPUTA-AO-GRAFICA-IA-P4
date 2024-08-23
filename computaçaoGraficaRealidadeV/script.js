window.onload = function () {
    //Seleciona o canvas pelo Id 
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var squareSize = 60;
    var x = 100;
    var y = 100;

    ctx.fillStyle = 'green';
    ctx.fillRect(x, y , squareSize,squareSize);
    
};