var container = document.querySelector(".container");
var active = false;
var startX, currX, startScr;

container.addEventListener("mousedown", handleDown);
container.addEventListener("mouseup", handleUp);
container.addEventListener("mouseleave", handleLeave);
container.addEventListener("mousemove", handleMove);

function handleDown(event) {
	active = true;
	startX = event.pageX;
	startScr = this.scrollLeft;
	container.classList.add("active");
}

function handleUp() {
	active = false;
	container.classList.remove("active");
}

function handleLeave() {
	active = false;
	container.classList.remove("active");
}

function handleMove(event) {
	var walk;
	if (active) {
		event.preventDefault();
		currX = event.pageX;
		walk = currX - startX;
		this.scrollLeft = startScr - walk;
	} 
}