//task 1
function printNumbers () {

	var startNumber =1;
	var endNumber =300;
 	var rowNumbers = '';

	for(var i = startNumber; i <= endNumber; i++){

		 	rowNumbers=rowNumbers+i +' ;';
		}
	console.log(rowNumbers);
}

//task 2
function checkDivide() {

	var divisor =3;
    var inputNumber=document.getElementById('inputNumber').value;

    if (inputNumber!=''){
	    if (inputNumber%divisor == 0) {
	   		alert('Yes, the number could be divided by '+ divisor);
	    }else{
	    	alert('NO, the number could not be divided by '+ divisor);
	    }
	}else{
		alert('Please, input number for Task 2!');
	}
}

//task 3 Divide both 4 and 7
function checkDivideBoth() {

	var divisorFirst =4;
	var divisorSecond=7;
    var inputNumber=document.getElementById('inputNumberBoth').value;

    if (inputNumber!=''){
	    if (inputNumber%divisorFirst == 0) {
	   		if (inputNumber%divisorSecond == 0){
				alert('YES, the number could be  divided by: '+ divisorFirst+ ' & '+divisorSecond);
	   		}else{
	   			alert('NO, the number could not be double divided by: '+ divisorFirst+ ' & '+divisorSecond);
	   		} 
	    }else{
	    	alert('NO, the number could not be double divided by: '+ divisorFirst+ ' & '+divisorSecond);
	    }
	}else{
		alert('Please, input number for Task 3!');
	}
}

//task 4
var surfaceAarea  = 0;

function rectangleArea() {

	var high = document.getElementById('rectangleHigh').value;
	high = parseInt(high);

	var width = document.getElementById('rectangleWidth').value;
	width = parseInt(width);

	//get the result input
	var rectangleSurface = document.getElementById('rectangleSurface');

	var surfaceAarea = high*width;
	rectangleSurface.value = surfaceAarea; 
} 

//task 5
var trapeziumSurfaceAarea  = 0;

function TrapeziumArea() {
	
	var trapeziumhigh = document.getElementById('trapeziumHigh').value;
	trapeziumhigh = parseInt(trapeziumhigh);

	var trapeziumwidthA = document.getElementById('trapeziumWidthA').value;
	trapeziumwidthA = parseInt(trapeziumwidthA);

	var trapeziumwidthB = document.getElementById('trapeziumWidthB').value;
	trapeziumwidthB = parseInt(trapeziumwidthB);

	//get the result input
	var trapeziumSurface = document.getElementById('trapeziumSurface');

	var trapeziumSurfaceAarea = (trapeziumwidthA+trapeziumwidthB)/2 *trapeziumhigh;
	trapeziumSurface.value = trapeziumSurfaceAarea; 
} 

//task 6
var biggestNumberIs  = 0;

function biggest() {
	
	var numberA = document.getElementById('numberA').value;
	numberA = parseInt(numberA);

	var numberB = document.getElementById('numberB').value;
	numberB = parseInt(numberB);

	var numberC = document.getElementById('numberC').value;
	numberC = parseInt(numberC);
	if (numberA>numberB){
	    if(numberA>numberC){
	    	biggestNumberIs=numberA;
	    }else{
	    	biggestNumber=numberC;
	    }
	}else{
		if (numberB>numberC) {
			biggestNumberIs=numberB;
		}else{
			biggestNumberIs=numberC;
		}
	}
	//get the result input
	var biggestN = document.getElementById('biggestNumber');

	biggestN.value = biggestNumberIs; 
} 

//task 7
function checkDivide7() {
	
	var divisor =7;
    var TheNumbersDevided7 = '';	
    for(var i = 50; i <= 100; i++){
		if (i%divisor == 0) {
		  TheNumbersDevided7=TheNumbersDevided7+i +' ;';
		}
	}
	alert('The numbers from 50 to 100 devided by 7 are: '+ TheNumbersDevided7);
}

//task 8
function checkDivide4and9() {
	
	var firstNum =4;
	var secondNum=9;
    var TheNumbersDevided4and9 = '';	
    for(var i = 20; i <= 60; i++){
		/*console.log(i);*/
	    if (i%firstNum == 0) {
	   		if (i%secondNum == 0){
				TheNumbersDevided4and9=TheNumbersDevided4and9+i +' ;';
	   		}
	    }
	}
	alert('TheNumbers from 20 to 60 devided by 4 and 9 are: '+TheNumbersDevided4and9)
}