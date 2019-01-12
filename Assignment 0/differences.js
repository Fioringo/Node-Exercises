function differences(arrayA, arrayB){
	// console.log("imported differences");
	let a = arrayA.slice();
	let b = arrayB.slice();
	// if(arrayA.length > arrayB.length){
	// 	a = arrayA.slice();
	// 	b = arrayB.slice();
	// } else {
	// 	a = arrayB.slice();
	// 	b = arrayA.slice();
	// }

	let r = [];

	a.forEach((e) => {
		if(!b.includes(e))
			r.push(e);
	});

	b.forEach((e) => {
		if(!a.includes(e))
			r.push(e);
	});


	return r;
}

module.exports = differences;