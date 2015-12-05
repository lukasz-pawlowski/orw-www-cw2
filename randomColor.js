
function randomColor() {

    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    i=i+1;
    postMessage(color);
    setTimeout("randomColor()", 3000);
}

randomColor();