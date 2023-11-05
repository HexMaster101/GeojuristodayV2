const intro = document.getElementById("intro");

const myTimeout = setTimeout(function () {
	intro.style.display = "none";
}, 2000);

const MyTimeout = setTimeout(() => {
	intro.classList.add("transition");
}, 1750);
