function createElem(typ, content, classes, attrib) {
	var ret = document.createElement(typ);
	if (classes) {
		classes.map(c => ret.classList.add(c));
	}
	if (attrib) {
		for (a in attrib) ret.setAttribute(a, attrib[a]);
	}
	if (content) {
		if (typeof content == 'string') {
			ret.appendChild(document.createTextNode(content));
		} else {
			if (Array.isArray(content)) {
				content.map(e => ret.appendChild(e));
			} else {
				ret.appendChild(content);
			}
		}
	}
	return ret;
}
const gebi=id=>document.getElementById(id)
function navigator_menu(e){
	gebi('navs').classList.toggle('show')
	console.log('I\'m clicked')
}
gebi('logo').addEventListener('click',navigator_menu)