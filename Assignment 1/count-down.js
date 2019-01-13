let totalSeconds;
let interval;
let renderTime;

function startTimer(){
	clearInterval(interval);
	clearInterval(renderTime)
	let hours = parseInt(document.getElementById('hoursIn').value);
	let minutes = parseInt(document.getElementById('minutesIn').value);
	let seconds = parseFloat(document.getElementById('secondsIn').value);

	totalSeconds = hours * 3600 + minutes * 60 + seconds;
	
	renderTime = totalSeconds;
	// console.log(renderTime%360);
	// document.getElementById('hours').innerHTML=(parseInt(renderTime/360)+":")
	// renderTime = renderTime%360;
	// document.getElementById('minutes').innerHTML=(parseInt(renderTime/60)+":");
	// renderTime = renderTime%60;
	// document.getElementById('seconds').innerHTML=(parseInt(renderTime));
	interval = setInterval(countDown, 1000);
	// document.getElementById('seconds').innerHTML=(totalSeconds);
	// console.log(totalSeconds.toString() + " " + totalSeconds.toString());

	// document.getElementById('seconds') = totalSeconds;	

	// totalSeconds.toString()

}

function countDown(){
	if(totalSeconds <= 0)
		totalSeconds = 0;
	else
		totalSeconds = totalSeconds - 1;
	// renderTime = totalSeconds;
	// document.getElementById('hours').innerHTML=(parseInt(renderTime/360)+":")
	// renderTime = renderTime%360;
	// document.getElementById('minutes').innerHTML=(parseInt(renderTime/60)+":");
	// renderTime = renderTime%60;
	// document.getElementById('seconds').innerHTML=(parseInt(renderTime / 60));
	// interval = setInterval(countDown, 1000);
	document.getElementById('seconds').innerHTML=(totalSeconds);
}
