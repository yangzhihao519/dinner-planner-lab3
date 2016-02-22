//SelectDishView Object constructor
var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.allDishes = container.find("#allDishes");
	var allDishes = model.getAllDishes("starter");

	var allDishesHtml = "";

	for (i = 0; i < allDishes.length; i++) { 
		allDishesHtml += "<div class=\"col-md-4 col-sm-12 col-xs-12\">"+
				            "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
					            "<a class=\"thumbnail\">"+
						        	"<img class=\"img-responsive center-block imageheight\" src='images/"+ allDishes[i].image + "'>"+
					            "</a>"+
				            "</div>"+
					        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
					        	"<span class=\"input-group-addon\">" + allDishes[i].name + "</span>"+
					        "</div>"+
					        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
								        "<p class=\"parapadding\">"+allDishes[i].description+"</p>"+
							"</div>"+
						"</div>";
    }
	
	this.allDishes.html(allDishesHtml);
}
 
