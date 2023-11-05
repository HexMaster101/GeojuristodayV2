const intro = document.getElementById("intro");

const MyTimeout = setTimeout(() => {
	intro.classList.add("transition");
}, 1500);

const MyTimeout2 = setTimeout(() => {
	intro.style.display = "none";
}, 1900);
