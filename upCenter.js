function upCenter(up) {
    var oldLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = up
    } else {
        window.onload = function () {
            oldLoad();
            upCenter();
        }
    }
window.onresize = up;
}
 
upCenter(function(){
	var centerHorizontal = document.getElementsByClassName('upCenterH');
	var centerVertical = document.getElementsByClassName('upCenterV');
 
	for (var i = 0; i < centerHorizontal.length; i++) {
	centerHorizontal[i].style.display = 'inline'; 
	centerHorizontal[i].style.position = 'absolute'; 
	centerHorizontal[i].style.left = '50%';
	centerHorizontal[i].style.marginLeft = -centerHorizontal[i].offsetWidth / 2 + 'px';
	}
	for (var i = 0; i < centerVertical.length; i++) {
	centerVertical[i].style.display = 'inline'; 
	centerVertical[i].style.position = 'absolute'; 
	centerVertical[i].style.top = '50%';
    centerVertical[i].style.marginTop = -centerVertical[i].offsetHeight / 2 + 'px';
	}
});