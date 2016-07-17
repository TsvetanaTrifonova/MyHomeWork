var Btn = function(background, color,borderRadius,text){
	this.background = background;
	this.color = color;
	this.borderRadius = borderRadius;
	this.text = text;
} 

Btn.prototype.generate = function(){
	// create the bnt
	var body = document.getElementsByTagName('body')[0];
	var button = document.createElement('button');
	
	//style the btn
	button.style.backgroundColor = this.background;
	button.style.color = this.color;
	button.style.borderRadius = this.borderRadius + '%';
	button.innerHTML = this.text;

	body.appendChild(button);
}

/*var box1 = new Box(250, 350, 'red', 'white');
box1.generate();*/


var addNewBtn = function(){

	var bgInputValue = document.getElementById('bg').value;
	var colorInputValue = document.getElementById('color').value;
	var inputBorderRadius = document.getElementById('borderRadius').value;
	var inpuText = document.getElementById('text').value;

	var dynamicllyAddedBtn = new Btn(bgInputValue, colorInputValue, inputBorderRadius, inpuText);
	
	dynamicllyAddedBtn.generate();
}

var buttonAdd  = document.getElementById('createBtn');
buttonAdd.addEventListener('click', addNewBtn);