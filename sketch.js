//variaveis do jogo
var lazer,lazerimg
var nave,naveimg
var meteoro,meteoroimg
var grupometeoro
var pista,pistaimg
function preload(){
//carregue as imagens
 naveimg=loadImage("imagens/waluigi.png")
 meteoroimg=loadImage("imagens/mega_meteoro-.png")
 lazerimg=loadImage("imagens/lazer.png")
}

function setup() {
  
// crie os personagens
createCanvas(1500,750)
lazer=createSprite(260,520,100,50)
lazer.addImage(lazerimg)
lazer.scale= 0.1
nave=createSprite(260,520,100,50)
nave.addImage(naveimg)
nave.scale= 0.2
grupometeoro=new Group()

}

function draw() {

  background("black");
  drawSprites()


 
//atribua as ações e movimentos
nave.x=World.mouseX
lazer.x=World.mouseX
    if (keyWentDown("L")){
lazer.velocityY=-10

    }
    if (grupometeoro.isTouching(nave)){
  nave.destroy()
lazer.destroy()
    }
    //lazer.x=nave.x
    //lazer.y=nave.y
    
          
          
//pontuação



//vidas

  
if(frameCount%30==0){
  meteoros()

}




}
function meteoros(){
meteoro=createSprite(random(10,1000),60,60)
meteoro.addImage("meteoro",meteoroimg)
meteoro.velocityY=10
meteoro.scale=0.4
grupometeoro.add(meteoro)
}
