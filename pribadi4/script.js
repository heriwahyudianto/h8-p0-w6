const MAIN = document.getElementById('main');

const CONTENT = document.createElement('div');
const CONTENT_ID = document.createAttribute('id');
CONTENT_ID.value = "content";
CONTENT.setAttributeNode(CONTENT_ID);

MAIN.appendChild(CONTENT);

let postContent = [
	{ 	judul 		: 'Judul Post',
		tglTerbit 	: '12 May 2016',
		isi 		: 'Lorem Ipsum Dolor Sit Amet'
	},
	{ 	judul 		: 'Judul Post 2',
		tglTerbit 	: '13 May 2016',
		isi 		: 'Lorem Ipsum Dolor Sit Amet'
	}
];

const CONTENT_POST_DIV = document.createElement('div');
const CONTENT_POST_ATTR = document.createAttribute('class');
CONTENT_POST_ATTR.value = "content-post";
CONTENT_POST_DIV.setAttributeNode(CONTENT_POST_ATTR);
const H1 = document.createElement('h1');
const SPAN = document.createElement('span');
const P = document.createElement('p');
const BUTTON = document.createElement('button');

let contentPostDiv, h1, h1Text, span, spanText, p, pText, button, buttonText,
	buttonAttr;

for (i = 0; i < postContent.length; i++) {
	contentPostDiv = CONTENT_POST_DIV.cloneNode(true);
	
	h1 = H1.cloneNode(true);
	h1Text = document.createTextNode(postContent[i].judul);
	h1.appendChild(h1Text);
	contentPostDiv.appendChild(h1);

	span = SPAN.cloneNode(true);
	spanText = document.createTextNode(`Published on ${postContent[i].tglTerbit}`);
	span.appendChild(spanText);
	contentPostDiv.appendChild(span);

	p = P.cloneNode(true);
	pText = document.createTextNode(postContent[i].isi);
	p.appendChild(pText);
	contentPostDiv.appendChild(p);
	
	button = BUTTON.cloneNode(true);
	buttonText =  document.createTextNode('Share this Post');
	button.appendChild(buttonText);
	buttonAttr = document.createAttribute('class');
	buttonAttr.value = "share-post-btn";
	button.setAttributeNode(buttonAttr);
	button.addEventListener('click', function() {
	  alert('You have shared this post');
	});
	contentPostDiv.appendChild(button);

	CONTENT.appendChild(contentPostDiv);
}