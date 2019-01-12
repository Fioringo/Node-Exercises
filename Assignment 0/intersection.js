function intersection(arrayA, arrayB){
	// console.log("imported intersection");
	let a = [];
	let b = [];
	if(arrayA.length > arrayB.length){
		a = arrayA.slice();
		b = arrayB.slice();
	} else {
		a = arrayB.slice();
		b = arrayA.slice();
	}

	let r = [];

	b.forEach((e) => {
		if(a.includes(e))
			r.push(e);
	});

	return r;
}

module.exports = intersection;