//SelectDishView Object constructor
var SelectDishController = function (view, model) {
	$("#typeSelector").change(function() {
        var type =  $('#typeSelector :selected').val();
	    var allDishes = model.getAllDishes(type);

	    $("#allDishes").html(getAllDishesHtml(allDishes));
	    view.displayedDish = $(".displayedDish");
	});

	view.searchButton.click(function(){
		var type =  $('#typeSelector :selected').val();
		var filter = $('#searchInput').val()
	    var allDishes = model.getAllDishes(type, filter);
	    
	    $("#allDishes").html(getAllDishesHtml(allDishes, model));
	    view.displayedDish = $(".displayedDish");
	});

	view.displayedDish.click(function(){
		console.log("click");
		var id = $(this).attr('id');
		console.log("click: "+ id);
		model.setSelectedDishId(id);
	});
}


function getAllDishesHtml(allDishes){
	var allDishesHtml = "";

	for (i = 0; i < allDishes.length; i++) { 
		console.log("dish.name: "+allDishes[i].name);
		allDishesHtml += "<div class=\"col-md-4 col-sm-12 col-xs-12 displayedDish\" id="+allDishes[i].id+">"+
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

    return allDishesHtml;
}