//OneDishView Object constructor
var OneDishController = function (view, model) {
	view.confirmDishButton.click(function(){
		model.addDishToMenu(model.getSelectedDishId());
	});
}