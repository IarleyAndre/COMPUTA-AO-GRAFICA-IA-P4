window.onload =function(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function criarQuadrado(x,y,largura,cor){

    ctx.fillStyle =cor;
    ctx.fillRect(x,y,largura,largura);
}



function desenharQuadrado() {
    const tamanhoQuadrado = 50;
    const distancia = 5;
    const larguraCanvas = canvas.width;
    let x = 2;
    while (x + tamanhoQuadrado <= larguraCanvas) {
        criarQuadrado(x, 0, tamanhoQuadrado, '#fc0fc0');
        
        x +=tamanhoQuadrado + distancia;

    }
}

desenharQuadrado();

}

function criarCirculo(x,y,cor) {
    ctx.acr(250,100,50,0,2 * Math.PI);
    ctx.fillStyle =cor;
    ctx.fill(x,y,cor,);

}
