var upKey;
var downKey;
var leftKey;
var rightKey;

function InitializeControls() {
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}

function ControlsListener() {
    if (upKey.isDown)
    {
        simba.body.velocity.y = -250;

        if(simba.scale.x > 0)
            simba.x -= settings.animationSpeed;
        else if(simba.scale.x < 0)
            simba.x += settings.animationSpeed;


        simba.animations.play('jump', settings.animationSpeed, true);
    }
    else if(downKey.isDown) 
    {
        
    }
    else if (leftKey.isDown && !simba.body.onFloor())
    {
        simba.x-=settings.speed;
        if(simba.scale.x > 0)
            simba.scale.x *= -1;

        simba.animations.play('moving', settings.animationSpeed, true);
    }
    else if (rightKey.isDown && !simba.body.onFloor())
    {
        simba.x+=settings.speed;
        if(simba.scale.x < 0)
            simba.scale.x *= -1;

        simba.animations.play('moving', settings.animationSpeed, true);
    }

    if(upKey.isUp && downKey.isUp && leftKey.isUp && rightKey.isUp)
    {
        simba.animations.play('standing', settings.animationSpeed, true);
    }
}