var item = document.getElementById('item');
var button = document.getElementById('enter');
var list = document.getElementById("list");
var lastdel=document.getElementById('lastdel');
var firsdel=document.getElementById('firstdel');

// Check the item length
function itemLength(){
	return item.value.length;
}

function listLength(){
	return list_len=document.getElementById('list').childElementCount;
}

// Create a new item to add to the list 
function createListElement(){
	var newli=document.createElement('li');
	newli.setAttribute('id',item.value);
	newli.appendChild(document.createTextNode(item.value));
	list.appendChild(newli);
	item.value=""
}

function removefirstElement(){
	if(listLength()>0){
		list.removeChild(list.childNodes[0]);
	}
	else{
		alert('List Empty');
	}
}

firstdel.addEventListener('click',removefirstElement);

function removeListElement(){
	if(listLength()>0){
	list.removeChild(list.childNodes[list_len-1]);
	}
	else{
		alert("List Empty");
	}
}

lastdel.addEventListener("click",removeListElement);


// Check if the item is valid for button click
function addListAfterClick(){
	if(itemLength()>0){
		createListElement();
	}
	else{
		alert("input must not be empty");
	}
}
//Event listener for button click
button.addEventListener("click",addListAfterClick);

// Check if the item is valid for keypress
function addListAfterPress(event){
	if(itemLength()!=0 && event.keyCode==13){
		createListElement();
	}
}

//Event Listener for enter key
item.addEventListener("keypress",addListAfterPress);
