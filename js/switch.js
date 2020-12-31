switchLight.onclick = () => {
	document.body.classList.toggle("light");
	if (document.body.classList.contains("light")) {
		document.getElementById('logotype').src='photo/logo-black-1.png';
		document.getElementsByClassName('toggle_switch')[0].style= "left: 15px";
	}
	else {
		document.getElementById('logotype').src='photo/logo-1.png';
		document.getElementsByClassName('toggle_switch')[0].style= "right: 15px";
	}
	
}