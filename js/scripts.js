$(document).ready(function() {
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene, {
	  relativeInput: true,
	  calibrateX: true,
	  calibrateY: true,
	  invertX: true,
	  invertY: false,
	  limitX: false,
	  limitY: false,
	  scalarX: 8,
	  scalarY: 10,
	  frictionX: 0.03,
	  frictionY: 0.02,
	  
	});
});



