var platforms;

function InitializePlatforms() {
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height-64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    CreateLedge(400,500);
    CreateLedge(300,400);
    CreateLedge(200,300);
    CreateLedge(60,60);
}

function CreateLedge(x,y) {
    var ledge = platforms.create(x,y, 'ground');
    ledge.scale.setTo(0.5,0.5);
    ledge.body.immovable = true;
}