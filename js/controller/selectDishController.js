//SelectDishView Object constructor
var SelectDishController = function (view, model) {
	$("#typeSelector").change(function() {
		console.log("typeSelector");

	    view.update("selectType");
	});

	view.searchButton.click(function(){
		console.log("view.searchButton.click");

	    view.update("searchDish");
	});
}