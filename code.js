var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var wall1=createSprite(190,120,250,3)
var wall2=createSprite(190,260,250,3)
var wall3=createSprite(67,145,3,50)
var wall4=createSprite(67,235,3,50)
var wall5=createSprite(313,145,3,50)
var wall6=createSprite(313,235,3,50)
var wall7=createSprite(41,170,50,3)
var wall8=createSprite(41,210,50,3)
var wall9=createSprite(18,190,3,40)

var wall10=createSprite(337,170,50,3)
var wall11=createSprite(337,210,50,3)
var wall12=createSprite(361,190,3,40)

var player1=createSprite(40,191,10,10)

player1.shapeColor="green"

var enemy1=createSprite(95,140,10,10)
enemy1.shapeColor="red"


var enemy2=createSprite(150,140,10,10)
enemy2.shapeColor="red"

var enemy3=createSprite(200,140,10,10)
enemy3.shapeColor="red"

var enemy4=createSprite(250,140,10,10)
enemy4.shapeColor="red"

createEdgeSprites()

enemy1.velocityY=5
enemy3.velocityY=5
enemy2.velocityY=-3
enemy4.velocityY=-3


function draw() 
{
enemy1.bounceOff(wall1)
enemy1.bounceOff(wall2)

enemy2.bounceOff(wall1)
enemy2.bounceOff(wall2)


enemy3.bounceOff(wall1)
enemy3.bounceOff(wall2)

enemy4.bounceOff(wall1)
enemy4.bounceOff(wall2)

if (keyDown("right"))
{
  player1.x=player1.x+5
  
}
if (keyDown("LEFT"))
{
  player1.x=player1.x-5
  
}

if(player1.isTouching(enemy1)|| player1.isTouching(enemy2)|| player1.isTouching(enemy3)|| player1.isTouching(enemy4))
{
  player1.x=40
}

if(player1.x>=300)
{
  
  
  text("YOU HAVE WON THE GAME",100,200)
  

  
  
}
background("white")  
   drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
