$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
	var guestNumberView = new GuestNumberView($("#guestNumberView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var prepareDishView = new PrepareDishView($("#prepareDishView"),model);
	var oneDishView = new OneDishView($("#oneDishView"), model);
	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);

});