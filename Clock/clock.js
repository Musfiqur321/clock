// 12hrs=360deg
// 1hrs=360/12=30deg
// h hrs=30h + m/2

// 60min=30deg
// 1min=360/60=6deg
// m min =6m

// 60sec=360deg
// 1sec=360/60=6deg
// s sec=6s

let hr = document.getElementById('hour');

let min = document.getElementById('munit');

let sec = document.getElementById('sec');

function displayTime(){
let date = new Date();
	// get hr min sec from date
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();

	// cal
	let hRotatuon = 30*hh + mm/2;
	let mRotation = 6*mm;
	let sRotation = 6*ss;

	hr.style.transform =`rotate(${hRotatuon}deg)`;
	min.style.transform =`rotate(${mRotation}deg)`;
	sec.style.transform =`rotate(${sRotation}deg)`;
}
setInterval(displayTime,1000);