function nearestVowel(s) {
	n=s.charCodeAt()
	l=[97,101,105,111,117]
	x=l.map(e=>Math.abs(n-e))
	d=Math.min(...x)
	return String.fromCharCode(l[x.indexOf(d)])
}

module.exports=nearestVowel