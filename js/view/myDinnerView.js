//MenuDishView Object constructor
var MyDinnerView = function(container, model){

	model.attach(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.myMenu = container.find("#myMenu");

	this.numberOfGuests.html(model.getNumberOfGuests);

	var dishesInFullMenu = model.getFullMenu();
    var myMenuHtml = "";

    for(key in dishesInFullMenu){
    	var dish = dishesInFullMenu[key];

    	myMenuHtml +=   "<tr>"+ 
	    					"<td>"+dish.name+"</td>"+
	    					"<td>"+model.getDishTotalPrice(dish.id)+" SEK</td>"+
    					"</tr>";

    }

    myMenuHtml +=   "<tr>"+
						"<td>Pending</td>"+
						"<td>0.00 SEK</td>"+
					"</tr>"+
					"<tr>"+
						"<td>Total</td>"+
						"<td>"+model.getTotalMenuPrice()+" SEK</td>"+
					"</tr>";

	this.myMenu.html(myMenuHtml);

	this.update = function(args){
		if (args == "numberOfGuests") {
			this.numberOfGuests.html(model.getNumberOfGuests);
		}else if(args == "menu"){
			dishesInFullMenu = model.getFullMenu();
			myMenuHtml = "";

			for(key in dishesInFullMenu){
		    	var dish = dishesInFullMenu[key];

		    	myMenuHtml +=   "<tr>"+ 
			    					"<td>"+dish.name+"</td>"+
			    					"<td>"+model.getDishTotalPrice(dish.id)+" SEK</td>"+
		    					"</tr>";

		    }

		    myMenuHtml +=   "<tr>"+
								"<td>Pending</td>"+
								"<td>0.00</td>"+
							"</tr>"+
							"<tr>"+
								"<td>Total</td>"+
								"<td>"+model.getTotalMenuPrice()+" SEK</td>"+
							"</tr>";

			this.myMenu.html(myMenuHtml);

		}else{
			// do nothing..
		}
	}

}