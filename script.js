$(document).ready(function() {
	var theRecipes = {
		grandmamasSauce:{
			recipeName: "Grandmama's Spaghetti Sauce",
			ingredients: "<li>Ground Beef</li><li>Tomato sauce</li><li>Tomato juice</li><li>Tomato soup</li><li>Tomato paste</li><li>Relish</li><li>Sugar</li><li>Onion</li><li>Garlic</li><li>Chilli pepper <em>(ground)</em></li><li>Italian seasoning</li><li>Thyme</li><li>Marjoram</li><li>Oregano</li><li>Bay leaves</li><li>Salt</li><li>Pepper</li>",
			quantities: "<li>3 lbs</div></li><li>15 oz</div></li><li>15 oz</div></li><li>2 cans</div></li><li>1 can</div></li><li>3 tbsp</div></li><li>3 tbsp</div></li><li>1, chopped</div></li><li>1 tsp</div></li><li>1 tsp</div></li><li>1 tsp</div></li><li>1 tsp</div></li><li>1 tsp</div></li><li>1 tsp</div></li><li>4</div></li><li>1 tsp</div></li><li>1 tsp</div></li>",
			directions: "<li>Mix all ingredients at once into a large pot and simmer for two hours, occasionally stirring</li><li>Freez in separate containers for later use</li>"
		},
		peanutButterCookies:{
			recipeName: "Peanut Butter & Chocolate Chip Cookies",
			ingredients: "<li>Shortening</li><li>Brown Sugar</li><li>Sugar</li><li>Egg</li><li>Peanut Butter</li><li>Vanilla</li><li>Chocolate Chips</li><li>Flour</li><li>Baking Soda</li><li>Baking Powder</li><li>Salt</li>",
			quantities: "<li>1 cup</li><li>1 cup</li><li>1 cup</li><li>2</li><li>1 cup</li><li>1 tsp</li><li>1 cup</li><li>2.5 cups</li><li>1 tsp</li><li>1 tsp</li><li>0.5 tsp</li>",
			directions: "<li>Preheat oven to 375 degrees</li><li>Beat shortening until creamy</li><li>Add sugar to shortening and beat until fluffy</li><li>Beat in eggs</li><li>Stir in peanut butter, chocolate chips, and vanilla and beat thoroughly</li><li>Sift together flour, bakind soda, baking powder, and salt into separate container</li><li>Add dry ingredients to wet ingredients a bit at a time until the mixture is consistent</li><li>Pinch off dough and make into balls on a baking sheet, then depress tops with fork</li><li>Bake for 15 minutes</li>"
		},
		gardenSalad:{
			recipeName: "Garden Salad",
			ingredients: "<li>Icebereg Lettuce</li><li>Tomato</li><li>Cucumber</li><li>Red Onion</li><li>Mozzarella</li><li>Chicken or Pork</li><li>Ranch dressing</li>",
			quantities: "<li>100g</li><li>75g</li><li>75g</li><li>75g</li><li>50g</li><li>150g</li><li>3 tbsp</li>",
			directions: "<li>Slice chicken or pork into ~2cm cubes</li><li>Oil or butter a pan and turn it to medium heat</li><li>Toss chicken/pork into pan and fry until cooked all the way through, then set off to the side to cool</li><li>Chop lettuce into strips, place in bowl</li><li>cSlice cucmber into discs, then quarter the discs and add them to the bowl</li><li>Chop tomato into discs then slice those discs into 8 smaller pieces, then throw into bowl with lettuce</li>Finely dice onion and add to bowl</li><li>Grate cheese and set off to the side</li><li>Add meat, sauce, and cheese to the bowl, cover bowl, then shake vigorously</li><li>Serves 1-2</li>"
		},
		cheeseAndCrackers:{
			recipeName: "Gourmet Cheese & Crackers",
			ingredients: "<li>Crackers</li><li>Calabrese</li><li>Soppressata</li><li>German Salami</li><li>Camembert</li><li>Gouda</li><li>Brie</li><li>Mozzarella</li>",
			quantities: "<li>12</li><li>4 slices</li><li>4 slices</li><li>4 slices</li><li>3 slices</li><li>3 slices</li><li>3 slices</li><li>3 slices</li>",
			directions: "<li>Slice all of your meats into even sized slices, three vertical cuts for the calabrese and soppressata and quarter circles for the salami</li><li>Slice the cheeses into cracker shaped sizes</li><li>Arrange the sliced meat on the crackers, one full piece per cracker (3 cuts of calabrese and soppressata, 4 of the salami)</li><li>Place the cheese on top of the meat such that there are 12 unique combinations or meat and cheese</li><li>Serve as hor d'oeuvres or a snack</li>"
		}
	};
	var currentRecipe="";

	$("#recipeContainer").hide();
	$(".textVersion").hide();
	$("#imageVersionButton").hide();
	$("#saveButton").hide();
	$(".recipeBox").click(function(){
		var theId = $(this).attr("id");
		currentRecipe = $(this).attr("id");
		$("#recipeContainer>h1").append(theRecipes[theId]["recipeName"]);
		$("#ingredients").append(theRecipes[theId]["ingredients"]);
		$("#quantities").append(theRecipes[theId]["quantities"]);
		$("#directions").append(theRecipes[theId]["directions"]);
		$("#recipeSelector").hide();
		$("#recipeContainer").show();
		$("#saveButton").show();
		if(theRecipes[theId]["quantities"].indexOf("buyCheck") == -1)
		{
			appendCheckBoxes();
		}
	});
	function appendCheckBoxes(){
		$("#quantities>li:not(:first-child)").append("<div class='buyCheck'></div>");
		$("#directions li").prepend("<div class='stepCheck'></div>")
	};
	$("body").on("click", ".buyCheck", function(){
		if(!($(this).css("background-color") == "rgb(51, 204, 255)"))
		{
			$(this).css("background-color", "#33CCFF");
		}
		else
		{
			$(this).css("background-color", "#ffffff");
		}
	});
	$("body").on("click", ".stepCheck", function(){
		if(!($(this).css("background-color") == "rgb(255, 153, 102)"))
		{
			$(this).css("background-color", "#FF9966");
			$(this).parent().css("text-decoration", "line-through")
		}
		else
		{
			$(this).css("background-color", "#ffffff");
			$(this).parent().css("text-decoration", "none")
		}
	});
	$("#backButton").click(function(){
		$("#recipeContainer>h1").html("");
		$("#ingredients").html("<li><h2>Ingredients</h2></li>");
		$("#quantities").html("<li><h2>Quantities</h2></li>");
		$("#directions").html("");
		$("#recipeContainer").hide();
		$("#recipeSelector").show();
		$("#saveButton").hide();
	});
	$("#textVersionButton").click(function(){
		$(".textVersion").show();
		$(".imageVersion").hide();
		$("#imageVersionButton").show();
		$("#textVersionButton").hide();
	});
	$("#imageVersionButton").click(function(){
		$(".textVersion").hide();
		$(".imageVersion").show();
		$("#textVersionButton").show();
		$("#imageVersionButton").hide();
	});
	$("#saveButton").click(function(){
		var thequantities = $("#quantities").html();
		thequantities = thequantities.substring(thequantities.indexOf("</li>")+5).trim();
		theRecipes[currentRecipe]["quantities"] = thequantities;

		var theDirections = $("#directions").html();
		theRecipes[currentRecipe]["directions"] = theDirections;

		//note: make this better
		alert("Progress Saved");
	});
});