$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 200, 200, 50);
    createPlatform(250, 300, 300, 50);
    createPlatform(750, 400, 500, 50);
    createPlatform(450, 500, 200, 50);
    createPlatform(750, 700, 200, 50);



    // TODO 3 - Create Collectables
    createCollectable("database", 600, 450, 6, 0.87);
    createCollectable("database", 850, 450, 3, 0.35);
    createCollectable("database", 400, 250);
    createCollectable("database", 500, 80, 80, 0.50);


    
    // TODO 4 - Create Cannons
    createCannon("top", 450, 1500);
    createCannon("bottom", 1050, 1000);
    createCannon("left", 300, 1000);
    createCannon("right", 150, 1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
