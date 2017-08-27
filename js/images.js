function LoadImages() {
    game.load.image("background", "./assets/simba_bg.jpg"); 
    game.load.image('ground', './assets/platform.png');
    game.load.atlas('simba', './assets/simba.gif', './assets/simba.json');
    game.load.atlas('hyena', './assets/hyena.png', './assets/hyena.json');
}