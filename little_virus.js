let date = new Date();
let year = date.getFullYear();

if (year == 2019) { //launch func in this year
	let elem = document.querySelector('#background-cover'); //get body id
	elem.parentNode.removeChild(elem); //remove it from dom.
};
