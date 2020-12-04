const btnAdd = document.querySelector('#btnAdd');
const sb = document.querySelector('#lista');
const subjects = ['PC', 'Mate1', 'Mate2', 'USO'];
const projectTitle = document.querySelector('#titluProiect');

var select = document.getElementById("materii");
for(let i = 0; i < 4; i++)
{
    select.options[select.options.length] = new Option(subjects[i], i);
}

function addItem(){
	var materie = document.getElementById('materii');
	var optiune = materie.options[materie.selectedIndex];
	var ul = document.getElementById("dynamic-list");
	var titlu = document.getElementById("titluProiect").value;
	var li = document.createElement("li");

	var element = ul.getElementsByTagName("li");
	var text1 = ul.getElementsByTagName("h6");
	var text2 = ul.getElementsByTagName("h5");

	for(let i = 0; i < element.length; i++)
		var content = text2[i].textContent;


	$("#dynamic-list").append("<li><h5>" + titlu + "</h5><h6>(" + optiune.textContent + ")</h6></li>");


	
}

btnAdd.onclick = (e) => {

	e.preventDefault();

	if(titluProiect.value == ''){
		alert('Completeaza toate campurile');
		return;
	}

	addItem();

	projectTitle.value = '';
	projectTitle.focus();

	name.value
}