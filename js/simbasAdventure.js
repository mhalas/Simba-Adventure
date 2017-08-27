var game  = new Phaser.Game(settings.gameWidth, settings.gameHeight, Phaser.CANVAS, '', { preload: preload, create: create, update: update});

function preload() {
    LoadImages();
}

function create() {
    game.add.tileSprite(0, 0, 1518, 814, 'background');
    // game.stage.backgroundColor = "#FFFFFF";

    InitializeSimbaLifesIcon();
    InitializePlatforms();
    InitializeSimba();
    InitializeHyenas();
    InitializeControls();
}

function update() {
    InitializeCollisions();
    
    ControlsListener();
}