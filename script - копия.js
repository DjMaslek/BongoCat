var bongoCat = document.getElementById("bongoCat");
document.addEventListener("keydown", pawdown);
document.addEventListener("keyup", pawdown);
  
function pawdown(e) {
	if (e.keyCode == 90) {
		var rPaw2 = document.getElementById("rPaw2");
		rPaw2.classList.add("visible");
		rPaw2.classList.remove("hidden");
		var rPaw1 = document.getElementById("rPaw1");
		rPaw1.classList.add("hidden");
		rPaw1.classList.remove("visible");
	} else if (e.keyCode == 88) {
		var lPaw2 = document.getElementById("rPaw2");
		lPaw2.classList.add("visible");
		lPaw2.classList.remove("hidden");
		var lPaw1 = document.getElementById("rPaw1");
		lPaw1.classList.add("hidden");
		lPaw1.classList.remove("visible");
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
	} else if (e.keyCode == 88) {
		var lPaw2 = document.getElementById("rPaw2");
		lPaw2.classList.add("hidden");
		lPaw2.classList.remove("visible");
		var lPaw1 = document.getElementById("rPaw1");
		lPaw1.classList.add("visible");
		lPaw1.classList.remove("hidden");
	}
}
