var hyenas;

function InitializeHyenas() {
    hyenas = game.add.group();
    hyenas.enableBody = true;

    createHyenas();
}

function createHyenas() {
    createSingleHyena(300,200);
    createSingleHyena(500,200);
}

function createSingleHyena(x,y) {
    var hyena = hyenas.create(x,y, 'hyena');
    game.physics.arcade.enable(hyena);
    hyena.animations.add('running', Phaser.Animation.generateFrameNames('running', 0, 7, '', 4), 10, true);
    hyena.animations.play('running', settings.animationSpeed, true);
    SetGravityOnHyena(hyena);
}

function SetGravityOnHyena(hyena) {
    hyena.body.bounce.y = 0;
    hyena.body.gravity.y = settings.Ygravity;
    hyena.body.collideWorldBounds = true;

    hyena.body.velocity.x = 0;
}