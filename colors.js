var colorArray = ['#ff7343', '#ffba51', '#eee74c', '#ff8101', '#db2730', '#e73939', '#fb6363', '#c14545', '	#f45f39','	#ff9339'];

function randomColor() {
    document.body.style.background = colorArray[Math.floor(Math.random() * colorArray.length)];
 }