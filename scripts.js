var bongoCat = document.getElementById("bongoCat");
const hitSound = new Audio("hit.wav");
document.addEventListener("keydown", pawdown);
document.addEventListener("keyup", pawup);
  
function pawdown(e) {
	if (e.keyCode == 90) {
		var rPaw2 = document.getElementById("rPaw2");
		rPaw2.classList.add("visible");
		rPaw2.classList.remove("hidden");
		var rPaw1 = document.getElementById("rPaw1");
		rPaw1.classList.add("hidden");
		rPaw1.classList.remove("visible");
		hitSound.play()
	} else if (e.keyCode == 88) {
		var lPaw2 = document.getElementById("lPaw2");
		lPaw2.classList.add("visible");
		lPaw2.classList.remove("hidden");
		var lPaw1 = document.getElementById("lPaw1");
		lPaw1.classList.add("hidden");
		lPaw1.classList.remove("visible");
		hitSound.play()
	}
}
function pawup(e) {
	if (e.keyCode == 90) {
		var rPaw2 = document.getElementById("rPaw2");
		rPaw2.classList.add("hidden");
		rPaw2.classList.remove("visible");
		var rPaw1 = document.getElementById("rPaw1");
		rPaw1.classList.add("visible");
		rPaw1.classList.remove("hidden");
		hitSound.pause();
		hitSound.currentTime = 0;
	} else if (e.keyCode == 88) {
		var lPaw2 = document.getElementById("lPaw2");
		lPaw2.classList.add("hidden");
		lPaw2.classList.remove("visible");
		var lPaw1 = document.getElementById("lPaw1");
		lPaw1.classList.add("visible");
		lPaw1.classList.remove("hidden");
		hitSound.pause();
		hitSound.currentTime = 0;
	}
}
