//SelectDishView Object constructor
var DinnerOverviewView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
    this.dinnerOverviewViewNumberOfGuests = container.find("#dinnerOverviewViewNumberOfGuests");
	this.myDishes = container.find("#displayMyDishes");
	this.dinnerOverviewViewTotalPrice = container.find("#dinnerOverviewViewTotalPrice");

	var myDishes = model.getAllDishes("starter");
    
    this.dinnerOverviewViewNumberOfGuests.html(model.getNumberOfGuests);
    this.dinnerOverviewViewTotalPrice.html(model.getTotalMenuPrice());
	var myDishesHtml = "";

	for (i = 0; i < myDishes.length; i++) { 
		myDishesHtml += "<div class=\"col-md-4\">"+
				            "<div class=\"col-md-12 col-xs-8 thumb\">"+
					            "<a class=\"thumbnail\">"+
						        	"<img src='images/"+ myDishes[i].image + "'>"+
					            "</a>"+
				            "</div>"+
					        "<div class=\"col-md-12 col-xs-8 thumb\">"+
					        	"<span class=\"input-group-addon\">" + myDishes[i].name + "</span>"+
					        "</div>"+
					        "<div class=\"col-md-12 col-xs-8 thumb\">"+
								        "<p class=\"parapadding\">"+model.getDishTotalPrice(myDishes[i].id)+" SEK</p>"+
							"</div>"+
						"</div>";
    }
	
	this.myDishes.html(myDishesHtml);
}
 
