var simba;
var simbaFacing = "right";

function InitializeSimba() {
    simba = game.add.sprite(30,400, 'simba');
    SetGravityOnsimba();

    simba.animations.add('standing', Phaser.Animation.generateFrameNames('standing', 0, 8, '', 4), 10, true);
    simba.animations.add('moving', Phaser.Animation.generateFrameNames('moving', 0, 10, '', 4), 10, true);
    simba.animations.add('die', Phaser.Animation.generateFrameNames('die', 0, 3, '', 4), 10, true);
    simba.animations.add('jump', Phaser.Animation.generateFrameNames('jump', 0, 8, '', 4), 10, true);
    simba.animations.play('standing', settings.animationSpeed, true);

}

function InitializeSimbaLifesIcon() {
    var simbaLifes = game.add.sprite(10,10, 'simba', 'simbalife');
}

function SetGravityOnsimba() {
    game.physics.arcade.enable(simba);

    simba.body.bounce.y = 0;
    simba.body.gravity.y = 300;
    simba.body.collideWorldBounds = true;

    simba.body.velocity.x = 0;
}