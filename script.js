var bongoCat = document.getElementById("bongoCat");
document.addEventListener("keydown", pawdown);
document.addEventListener("keyup", pawdown);
  
function pawdown(e) {
	if (e.keyCode == 90) {
		var rPaw2 = document.getElementById("rPaw2");
		rPaw2.classList.toggle("hidden");
		var rPaw1 = document.getElementById("rPaw1");
		rPaw1.classList.toggle("hidden");
	} else if (e.keyCode == 88) {
		var lPaw2 = document.getElementById("lPaw2");
		lPaw2.classList.toggle("hidden");
		var lPaw1 = document.getElementById("lPaw1");
		lPaw1.classList.toggle("hidden");
	}
}
function pawup(e) {
	if (e.keyCode == 90) {
		var rPaw2 = document.getElementById("rPaw2");
		rPaw2.classList.toggle("hidden");
		var rPaw1 = document.getElementById("rPaw1");
		rPaw1.classList.toggle("hidden");
	} else if (e.keyCode == 88) {
		var lPaw2 = document.getElementById("lPaw2");
		lPaw2.classList.toggle("hidden");
		var lPaw1 = document.getElementById("lPaw1");
		lPaw1.classList.toggle("hidden");
	}
}
