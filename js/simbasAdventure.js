var game  = new Phaser.Game(settings.gameWidth, settings.gameHeight, Phaser.CANVAS, '', { preload: preload, create: create, update: update});

var map;
var bmd;

function preload() {
    LoadImages();
}

function create() {
    game.stage.backgroundColor = "#FFFFFF";

    InitializeSimbaLifesIcon();
    InitializePlatforms();
    InitializeControls();
    InitializeSimba();
    // InitializeGravity();
}

function update() {
    game.physics.arcade.collide(simba, platforms);
    
    ControlsListener();

}

function InitializeGravity() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = settings.Ygravity;
    game.physics.enable([simba], Phaser.Physics.ARCADE);
}