var i=0;
var name = "";

onmessage = function(e) {
	// the passed-in data is available via e.data
	name = e.data;
	console.log('odebrano '+name);
};
	
function timedCount() {
	
    i=i+1;
    postMessage("Witaj "+name+"! Tu jest twoj numer: "+i);
    setTimeout("timedCount()", 2000);
}

timedCount();