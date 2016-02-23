//SelectDishView Object constructor
var SelectDishController = function (view, model) {
	view.confirmDishButton.click(function(){
		model.addDishToMenu("100");
	});
}