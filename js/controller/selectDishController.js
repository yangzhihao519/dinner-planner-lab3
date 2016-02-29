//SelectDishView Object constructor
var SelectDishController = function (view, model) {
	$("#typeSelector").change(function() {
	    view.update("selectType");

	    $(".displayedDish").click(function(){
			var id = $(this).attr('id');
			model.setSelectedDishId(id);
		});
	});

	view.searchButton.click(function(){
	    view.update("searchDish");

	    $(".displayedDish").click(function(){
			var id = $(this).attr('id');
			model.setSelectedDishId(id);
		});
	});
}