// Variaveis Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

// Variaveis imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
 
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  //somDaTrilha = loadSound("som/trilha.mp3");
  //somDaColisao = loadSound("som/colidiu.mp3");
  //somDoPonto = loadSound("som/pontos.wav");
  
}
