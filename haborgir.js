document.addEventListener("keydown", function(event) {
    if (event.key === "h") {
      keydown = document.createElement("audio");
      keydown.src = "/assets/fushigishort.mp3"
      keydown.play();
    }
    if (event.key === "Escape") {
      keydown = document.createElement("audio");
      keydown.src = "/assets/FAHH.mp3"
      keydown.play();
    }
  })

  function expandNavi() {
    var x = document.getElementById("starnavi");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
