function InitializeCollisions() {
    game.physics.arcade.collide(simba, platforms);
    game.physics.arcade.collide(hyenas, platforms);
    game.physics.arcade.overlap(simba, hyenas, SimbaHyenasCollideCallback, null, this);
}

function SimbaHyenasCollideCallback(simba, hyena) {
    if(simba != undefined && hyena != undefined) {
        console.log("COLLISION simba with hyena "+hyena.x);
    }
}