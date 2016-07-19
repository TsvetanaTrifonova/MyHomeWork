
/*task 1*/
var h1=$('.text')[0];
$(h1).hide();

var btn = $('#show-hide-title');
var showHideTitle=function(){
	$(h1).toggle();
}
$(btn).on('click',showHideTitle);

/*task 2*/
var divAnm=$('#divAnimation')[0];
$(document).ready(function(){
	    
		$(divAnm).animate({width: '200px',
					height: '80px'}, 1000);
});


/*task 3 and 4 */
var div=$('#div-fade-in')[0];
$(div).hide();

var btnIn = $('#btn-fade-in');
var btnOut = $('#btn-fade-out');

var divFadeIn=function(){
	$(div).fadeIn(2000);
}
var divFadeOut=function(){
	$(div).fadeOut(2000);
}

$(btnIn).on('click',divFadeIn);
$(btnOut).on('click',divFadeOut);

/*task 5 */
var btn = $('#css-styles');
var cssStyles=function(){
	$(divAnm).css({
		'background': 'green',
		'height': '40px',
		'widht': '400px',
		'border-radius': '20px',
		'opacity': '0.3'
	});
}
$(btn).on('click',cssStyles);

/*task 6 */
var btnHover = $('#Hover-me');
var hoverMe=function(){
	$(divAnm).slideToggle();
}
$(btnHover).on('mouseenter',hoverMe);

/*task 7 */
var btnGetContent = $('#get-content');
var displayContent = $('#display-content');

var getData=function(){
	
	var nameValue =$('#name').val();
	var surNameValue =$('#surName').val();

	$(displayContent).html('Hello' +' '+nameValue +' ' +surNameValue+'!');
}

$('#get-content').click(getData);