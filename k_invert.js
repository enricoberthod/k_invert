function k_invert(a,k) {
	//console.log(a)
	if(!a || !k || arguments.length!==2)
		return('error1');
	if(k<=0 || k>a.length || isNaN(k) || !(Number.isInteger(k)))
		return('error2');
	for(let i=1; i<=k; i++) {
		var tmp = a[a.length-1];
		for(let j=a.length-1; j>0; j--) {
			a[j] = a[j-1];
			//console.log(a)
		}
		a[0] = tmp;
	}
	return (a);
}

//console.log(k_invert([1,2,3,4,5],1))


module.exports = {k_invert}