$(function() {
	//We initialise our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var prepareDishView = new PrepareDishView($("#prepareDishView"),model);
	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);

	var myDinnerView = new MyDinnerView($('#myDinnerView'), model);
	var myDinnerController = new MyDinnerController(myDinnerView, model);

	var oneDishView = new OneDishView($("#oneDishView"), model);
	var oneDishController = new OneDishController(oneDishView, model);
});