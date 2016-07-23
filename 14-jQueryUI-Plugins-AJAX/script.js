

$.ajax({
	metod:"GET",
	url: "data/data.json",
	dataType:"json"
}).done(function(data){
	var tableBody = $('tbody');

	data.colorsArray.forEach(function(product){
	var tr = "<tr bgcolor= " + product.hexValue + "><td>" + product.colorName + "</td>";
	tr += "<td>" + product.hexValue + "</td></tr>";
	
	tableBody.append(tr);
	})
})
