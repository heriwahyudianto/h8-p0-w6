let eldestParentChilds = document.getElementById('eldest-parent').children;
eldestParentChilds[0].innerHTML = 'Diakses Melalui Eldest Parent';

let aChild = document.getElementById('a-child');
aChild.previousElementSibling.innerHTML = 'Diakses Melalui a Child';
aChild.nextElementSibling.innerHTML = 'Diakses Melalui a Child';
aChild.parentNode.parentNode.parentNode.children[2].innerHTML = 'Diakses Melalui a Child';
