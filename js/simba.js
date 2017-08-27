var simba;
var simbaFacing = "right";

function InitializeSimba() {
    simba = game.add.sprite(30,400, 'simba');
    game.physics.arcade.enable(simba);
    SetGravityOnsimba();

    simba.animations.add('standing', Phaser.Animation.generateFrameNames('standing', 0, 8, '', 4), 10, true);
    simba.animations.add('running', Phaser.Animation.generateFrameNames('running', 0, 10, '', 4), 10, true);
    simba.animations.add('die', Phaser.Animation.generateFrameNames('die', 0, 3, '', 4), 10, true);
    simba.animations.add('jumping', Phaser.Animation.generateFrameNames('jump', 0, 11, '', 4), 10, true);
    simba.animations.play('standing', settings.animationSpeed, true);

}

function InitializeSimbaLifesIcon() {
    var simbaLifes = game.add.sprite(10,10, 'simba', 'simbalife');
}

function SetGravityOnsimba() {
    simba.body.bounce.y = 0;
    simba.body.gravity.y = settings.Ygravity;
    simba.body.collideWorldBounds = true;

    simba.body.velocity.x = 0;
}