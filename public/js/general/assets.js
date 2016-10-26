function addComma(a) {
	a = a.toString();
	var n = "" , j = 0;
	for (var i = a.length - 1; i >= 0; i--) {
		n += i % 3 == 0 && i != 0 ? + a[j] + "," : a[j];
		j++;
	}
	return n;
}
function attr_selector(attr) {
	var match_elms = [];
	var all = document.getElementsByTagName('*');
	for (var i = 0, n = all.length; i < n; i++) {
		if (all[i].getAttribute(attr) !== null) {
			match_elms.push(all[i]);
		}
	}
	return match_elms;
}
function html_arr(collection) {
	return Array.prototype.slice.call(collection);
}
// preview image on canvas
function handleImage(e){
	var reader = new FileReader();
	reader.onload = function(e){
		readImage(e.target.result);
	}
	reader.readAsDataURL(e.target.files[0]);     
}
function readImage(imgSrc) {
	var img = new Image();
	img.onload = function() {
		cvs.width = img.width;
		cvs.height = img.height;
		ctx.drawImage(img,0,0);
		// resize canvas to fit outer layer
		cvs.style.width = "100%";
		cvs.style.height = "100%";
	}
	img.src = imgSrc;
}
// select all checkboxes that are checked
function get_allCheckedCkb(classname) {
	var dom = document.getElementsByClassName(classname);
	var chk_ctner = [];
	for (var i = 0; i < dom.length; i++) {
		if (dom[i].checked == true) {
			chk_ctner.push(dom[i]);
		}
	}
	return chk_ctner;
}