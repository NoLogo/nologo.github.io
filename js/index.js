var opts = {
    count: 1, //Increases the spawn rate
    size: 10, //Minimal is one
    sizeRandom: 375, //Amount of pixels it can be randomed by
    sparkLife: 0.1, //Decreases the sparks life
    spawnOpacity: 1, //Sparks will spawn at this opacity

    //must be RGBA. alpha stands for opacity, usually 1
    color: "rgba(219, 13, 16, alpha)" //The color of sparks.
  },

  canvasBody = document.getElementById("canvas"),
  canvas = canvasBody.getContext("2d"),
  textBody = document.getElementById("text"),
  text = textBody.getContext("2d"),
  w = canvasBody.width = textBody.width = window.innerWidth,
  h = canvasBody.height = textBody.height = window.innerHeight;

function anim() {
  setTimeout(function() {
    window.requestAnimationFrame(anim)
  }, 1000 / 30 ) //Setting the FPS by dividing the one second by <frames>
  step_square(),
  step_text();
}

anim() //Calling the animation function

function step_square() {
  var fillColor = opts.color.replace("alpha", opts.spawnOpacity);
  canvas.fillStyle = fillColor;
  for (var i = 0; i < Math.round(opts.count); i++) {
    var random = Math.random() * opts.sizeRandom;
    canvas.fillRect(-(opts.size/2) + Math.random() * w, -(opts.size/2) + Math.random() * h, opts.size + random, opts.size + random)
  }
  canvas.fillStyle = "rgba(255,255,255," + opts.sparkLife + ")"
  canvas.rotate(opts.size)
  canvas.fillRect(0, 0, w, h)
}

function step_text() {
  text.fillStyle = "#FFFFFF";
  txt_size = w/4;
  txt_size = txt_size.toString()
  txt_size = txt_size.concat("px Arial");
  text.font = txt_size;
  text.textAlign="center";
  text.fillText("Soon", w/2, h/1.5);
  // text.textSmoothingEnabled = true;
  // text.moztextSmoothingEnabled = true;
  // text.mstextSmoothingEnabled = true;
  // text.webkittextSmoothingEnabled = true;

}

window.addEventListener("resize", function(){ //Just in case someone resizes the window
  w = canvasBody.width = textBody.width = window.innerWidth;
  h = canvasBody.height = textBody.height = window.innerHeight;
})
