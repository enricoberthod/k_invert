function k_invert(a,k) {
	var b = []
	//console.log(a)
	if(!a || !k || arguments.length!==2)
		return('error');
	if(k<=0 || k>a.length || isNaN(k) || !(Number.isInteger(k)))
		return('error');
	for(let x=0; x<a.length; x++) {
		b[x] = a[x]
	}
	for(let i=1; i<=k; i++) {
		var tmp = b[b.length-1];
		for(let j=b.length-1; j>0; j--) {
			b[j] = b[j-1];
			//console.log(a)
		}
		b[0] = tmp;
	}
	return (b);
}

//console.log(k_invert([1,2,3,4,5],1))


module.exports = {k_invert}