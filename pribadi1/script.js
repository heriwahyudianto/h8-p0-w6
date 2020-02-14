let h1FillMe = document.getElementById('fill-me');
let h1FillMeText = document.createTextNode('HALO!');
h1FillMe.appendChild(h1FillMeText);

let pChangeAllOfMe = document.getElementsByClassName('change-all-of-me');
let pChangeAllOfMeText = document.createTextNode('HALO JUGA!');
for (let i = pChangeAllOfMe.length - 1; i >= 0; i--) {
	pChangeAllOfMe[i].appendChild(pChangeAllOfMeText);
}

let h2 = document.getElementsByTagName('h2');
for (let i = h2.length - 1; i >= 0; i--) {
	h2[i].innerHTML = 'Apa Kabar!';
}