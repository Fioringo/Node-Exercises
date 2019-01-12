

function startTimer(){
	let hours = parseInt(document.getElementById('hoursIn').value);
	let minutes = parseInt(document.getElementById('minutesIn').value);
	let seconds = parseInt(document.getElementById('secondsIn').value);
	// let hoursOut = document.getElementById('hours');
	// let minutesOut = document.getElementById('minutes');
	// let secondsOut = document.getElementById('seconds').value;

	let totalSeconds = hours * 360 + minutes * 60 + seconds;

	totalReturn = countDown(totalSeconds);

	// document.getElementById('seconds') = totalSeconds;	

	() => document.getElementById('secondsIn').value('10');
	// totalSeconds.toString()

}

function countDown(s){
	if(s <= 0)
		return 0;
	return s - 1;
}