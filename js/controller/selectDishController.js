//SelectDishView Object constructor
var SelectDishController = function (view, model) {
	$("#typeSelector").change(function() {
		console.log("typeSelector");
     //    var type =  $('#typeSelector :selected').val();
	    // var allDishes = model.getAllDishes(type);

	    // $("#allDishes").html(getAllDishesHtml(allDishes, model));
	    // console.log("view.displayedDish: "+view.displayedDish);
	    // view.displayedDish = $(".displayedDish");

	    view.update("selectType");
	});

	view.searchButton.click(function(){
		console.log("view.searchButton.click");
		// var type =  $('#typeSelector :selected').val();
		// var filter = $('#searchInput').val()
	 //    var allDishes = model.getAllDishes(type, filter);
	    
	 //    $("#allDishes").html(getAllDishesHtml(allDishes));
	 //    view.displayedDish = $(".displayedDish");

	    view.update("searchDish");
	});

	// $(".displayedDish").click(function(){
	// 	console.log("click");
	// 	var id = $(this).attr('id');
	// 	console.log("click: "+ id);
	// 	model.setSelectedDishId(id);
	// });
}


// function getAllDishesHtml(allDishes, model){
// 	var allDishesHtml = "";

// 	for (i = 0; i < allDishes.length; i++) { 
// 		console.log("dish.name: "+allDishes[i].name);
// 		allDishesHtml += "<div class=\"col-md-4 col-sm-12 col-xs-12 displayedDish\" id="+allDishes[i].id+" onclick=\"chooseDish("+allDishes[i].id+","+model+")\">"+
// 				            "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
// 					            "<a class=\"thumbnail\">"+
// 						        	"<img class=\"img-responsive center-block imageheight\" src='images/"+ allDishes[i].image + "'>"+
// 					            "</a>"+
// 				            "</div>"+
// 					        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
// 					        	"<span class=\"input-group-addon\">" + allDishes[i].name + "</span>"+
// 					        "</div>"+
// 					        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
// 								        "<p class=\"parapadding\">"+allDishes[i].description+"</p>"+
// 							"</div>"+
// 						"</div>";
//     }

//     return allDishesHtml;
// }

// function chooseDish(dishId, model){
// 	model.setSelectedDishId(dishId);
// }