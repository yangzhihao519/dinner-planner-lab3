//OneDishView Object constructor
var OneDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.oneDishName = container.find("#oneDishName");
	this.oneDishImage = container.find("#oneDishImage");
	this.oneDishDescription = container.find("#oneDishDescription");
	this.oneDishNumberOfGuests = container.find("#oneDishNumberOfGuests");
	this.oneDishAllIngredients = container.find("#oneDishAllIngredients");
	this.oneDishTotalPrice = container.find("#oneDishTotalPrice");

	var oneDish = model.getDish("100");
    console.log(oneDish.name);

	this.oneDishName.html(oneDish.name);
	this.oneDishImage.html("<a class=\"thumbnail\">"+"<img class=\"img-responsive center-block imageheight\" src=\"images/"+oneDish.image+"\">"+"</a>");
	this.oneDishDescription.html(oneDish.description);
	this.oneDishNumberOfGuests.html(model.getNumberOfGuests);
	this.oneDishTotalPrice.html(model.getDishTotalPrice("100"));

    var oneDishAllIngredientsHtml = "";
    var oneDishAllIngredientsArray = oneDish.ingredients;

	for (key in oneDishAllIngredientsArray) {
		oneDishAllIngredientsHtml +="<div class=\"col-md-12 col-sm-12 col-xs-12\">"+
										"<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
											oneDishAllIngredientsArray[key].quantity+
										"</div>"+
										"<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
											oneDishAllIngredientsArray[key].unit+
										"</div>"+
										"<div class=\"col-md-6 col-sm-7 col-xs-6\">"+
										    oneDishAllIngredientsArray[key].name+
										"</div>"+
										"<div class=\"col-md-1 col-md-offset-2 col-sm-1 col-xs-1\">"+
											"SEK"+
									    "</div>"+
									    "<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
									       oneDishAllIngredientsArray[key].price+
									    "</div>"+
										"<br/>"+"<br/>"+
									"</div>";
    }
	
	this.oneDishAllIngredients.html(oneDishAllIngredientsHtml);
}