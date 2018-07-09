	var app = angular.module("myApp", ["ngRoute"]);

	app.controller("menuController",function($scope){

		$scope.startersItems=[  
			{  
			   'price':'$ 75.00  ',
			   'itemName':'Vegetable Samosa',
			   'imageName':'samosa.jpg',
			   'description':'Homemade meatballs stuffed with potatoes, peas, coriander and slightly spicy spices.'
			},
			{  
			   'price':'$ 85.00  ',
			   'itemName':'Chicken Samosa',
			   'imageName':'samosa.jpg',
			   'description':'Crunchy dough dumplings stuffed with chicken, onion, ginger, coriander seeds and more spices.'
			},
			{  
			   'price':'$ 80.00  ',
			   'itemName':'Momo of vegetables',
			   'imageName':'momo.jpg',
			   'description':'Small cocoons of barley flour stuffed with vegetables.'
			},
			{  
			   'price':'$ 90.00  ',
			   'itemName':'Chicken Momo',
			   'imageName':'momo.jpg',
			   'description':'Small buds of barley flour stuffed with chicken.'
			},
			{  
			   'price':'$ 70.00  ',
			   'itemName':'Pakora of vegetables',
			   'imageName':'vegetable_pakora.jpg',
			   'description':'Mixture of vegetables coated in chickpea flour and spices; fried'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Onion Pakora',
			   'imageName':'onion_pakora.jpg',
			   'description':'Onion strips battered in chickpea flour and special fried.'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Pakora de paneer',
			   'imageName':'paneer_pakora.jpg',
			   'description':'Cheese fingers coated in chickpea flour and special; fried'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Pakora egg',

			   'description':'Boiled egg coated in chickpea flour and special; fried'
			},
			{  
			   'price':'$ 70.00  ',
			   'itemName':'Chicken pakora',
			   'description':'Chicken strips battered in chickpea flour and special; fried.'
			},
			{  
			   'price':'$ 90.00  ',
			   'itemName':'Prawan pakora',
			   'description':'Fried shrimp marinated with chickpea flour.'
			},
			{  
			   'price':'$ 80.00  ',
			   'itemName':'Fish pakora',
			   'description':'Fried fish strips marinated with chickpea flour.'
			},
			{  
			   'price':'$ 90.00  ',
			   'itemName':'Chicken 65',
			   'imageName':'chicken_65.jpg',
			   'description':'Chicken marinated in a hot spicy batter and cornmeal, fried and garnished with fried onions.'
			},
			{  
			   'price':'$ 80.00  ',
			   'imageName':'paneer_chilly.jpg',
			   'itemName':'Panner chilli dry',
			   'description':'Indian cottage cheese sauteed with onion, peppers, tomato and curry leaves.'
			}
		 ]
		$scope.soupItems=[  
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Of mushrooms',
			   'description':'Mushrooms seasoned with garlic and cilantro.'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Of chicken',
			   'description':'Ground chicken with cumin, garlic, cilantro and cream.'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Tomato',
			   'description':'Mix of garlic and cream tomato.'
			},
			{  
			   'price':'$ 60.00  ',
			   'itemName':'Of lentil',
			   'description':'Yellow lentil soup seasoned with homemade spices.'
			},
			{  
			   'price':'$ 40.00  ',
			   'itemName':'Raita',
			   'description':'Refreshing homemade yogurt with grated cucumber, tomato and onion.'
			},
			{  
			   'price':'$ 20.00  ',
			   'itemName':'Mixed pickel',
			   'description':'Hot and spicy pickle'
			}
		 ]
		$scope.riceItems=[  
			{  
			   'price':'$ 50.00  ',
			   'itemName':'Basmati',
			   'description':'Steamed basmati white rice.'
			},
			{  
			   'price':'$ 75.00  ',
			   'itemName':'Ka shmiri ka pulau',
			   'description':'Basmati rice with raisins, dried fruits and saffron.'
			},
			{  
			   'price':'$ 80.00  ',
			   'itemName':'Jira rice',
			   'description':'Basmati rice with cardamom, cinnamon, cumin star anise and saffron.'
			},
			{  
			   'price':'$ 85.00  ',
			   'itemName':'Fried rice with vegetables',
			   'description':'With peas, green beans, carrots, cabbage.'
			},
			{  
			   'price':'$ 60.00  ',
			   'itemName':'Lemon rice',
			   'description':'Tempered rice with mustard seeds, curry leaves, dried red chili, peanuts and lemon juice.'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Coconut rice',
			   'description':'Plain rice mixed with grated coconut, cashew nuts, mustard seeds and curry leaves.'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Tomato rice',
			   'description':'Freshly pressed tomatoes in basil leaves with dried fruits.'
			},
			{  
			   'price':'$ 65.00  ',
			   'itemName':'Special curd rice',
			   'description':'The curd rice here is served in a unique style, mixed with a soft curd, salted and tempered with a tadka.'
			}
		 ]

	$scope.mainItems=[  
		{  
		   'price':'$ 130.00  ',
		   'itemName':'Chicken Tikka Masala',
		   'description':'A traditional and popular chicken dish cooked in a soft and creamy tomato sauce.'
		},
		{  
		   'price':'$ 130.00  ',
		   'itemName':'Butter chicken masala',
		   'description':'Very smooth creamy dish cooked with tandoori spices with fresh cream and butter.'
		},
		{  
		   'price':'$ 110.00  ',
		   'itemName':'Chicken curry',
		   'description':'Chunks of fresh chicken seasoned with spices.'
		},
		{  
		   'price':'$ 110.00  ',
		   'itemName':'Chilli chicken',
		   'description':'Fried chicken pieces seasoned with garlic, ginger, soy and red pepper.'
		},
		{  
		   'price':'$ 125.00  ',
		   'itemName':'Chicken korma',
		   'description':'Boneless and tender chicken cooked with garam masala, yogurt, cream, coriander leaves and nuts in powder.'
		},
		{  
		   'price':'$ 105.00  ',
		   'itemName':'Poolo manchurian',
		   'description':'Fried chicken pieces seasoned with garlic, ginger, soy and red pepper.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Chicken with spinach',
		   'description':'Soft curry with chicken with spinach.'
		},
		{  
		   'price':'$ 115.00  ',
		   'itemName':'Chicken kofta curry',
		   'description':'Ground chicken meatballs cooked with ginger, saffron. and tomato.'
		},
		{  
		   'price':'$ 140.00  ',
		   'itemName':'Biryani chicken',
		   'description':'Boneless chicken cooked with basmati rice and fresh spices.'
		},
		{  
		   'price':'$ 105.00  ',
		   'itemName':'Fried chicken with rice',
		   'description':'Chunks of fried chicken with rice and vegetables.'
		},
		{  
		   'price':'$ 105.00  ',
		   'itemName':'Chicken chowmien',
		   'description':'Chicken and vegetables with soy in ketchup sauce.'
		},
		{  
		   'price':'$ 120.00  ',
		   'itemName':'Chow mein mixed',
		   'description':'Chicken, shrimp, egg and vegetables, with soy in ketchup sauce.'
		},
		{  
		   'price':'$ 85.00  ',
		   'itemName':'Chowmien egg',
		   'description':'Eggs and vegetables with soy in ketchup sauce.'
		},
		{  
		   'price':'$ 135.00  ',
		   'itemName':'Lamb Curry',
		   'description':'Boiled lamb bathed in tomato curry.'
		},
		{  
		   'price':'$ 130.00  ',
		   'itemName':'Lamb spinach',
		   'description':'Tender pieces of lamb with spinach and herbs.'
		},
		{  
		   'price':'$ 125.00  ',
		   'itemName':'Lamb with mushrooms',
		   'description':'Boiled lamb bathed in mushroom sauce.'
		},
		{  
		   'price':'$ 130.00  ',
		   'itemName':'Lamb roghan josh',
		   'description':'Classic lamb curry with a spicy sauce, tomato and herbs, slightly spicy.'
		},
		{  
		   'price':'$ 140.00  ',
		   'itemName':'Biryani lamb',
		   'description':'Boiled lamb served with basmati rice and yogurt.'
		},
		{  
		   'price':'$ 140.00  ',
		   'itemName':'Biryani fish',
		   'description':'Sautéed fish fillet served with basmati rice.'
		},
		{  
		   'price':'$ 145.00  ',
		   'itemName':'Biryani shrimp',
		   'description':'Shrimp seasoned with spices accompanied by basmati rice.'
		},
		{  
		   'price':'$ 130.00  ',
		   'itemName':'Curry shrimp',
		   'description':'Shrimp cooked in a medium curry sauce with spices.'
		},
		{  
		   'price':'$ 115.00  ',
		   'itemName':'Curry fish',
		   'description':'Fish in traditional curry sauce.'
		},
		{  
		   'price':'$ 120.00  ',
		   'itemName':'Chettinad fish',
		   'description':'Fish Tamil Nadu Spicy curry is fresh seasonal fish cooked with cilantro onions in a delicious mild sauce.'
		},
		{  
		   'price':'$ 120.00  ',
		   'itemName':'Masala style fried fish',
		   'description':'Fish fillet marinated with Indian spices and fried.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Vegetable curry',
		   'description':'Mix of sautéed and seasoned vegetables.'
		},
		{  
		   'price':'$ 85.00  ',
		   'itemName':'Dal tadka',
		   'description':'Organic yellow lentils sautéed with onion, tomato, cumin, ginger and garlic.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Chana masala',
		   'description':'Chickpeas cooked with a little spicy spices.'
		},
		{  
		   'price':'$ 105.00  ',
		   'itemName':'Paneer tikka masala',
		   'description':'Fried cottage cheese cubes fried in tomato sauce.'
		},
		{  
		   'price':'$ 95.00  ',
		   'itemName':'Palak paneer',
		   'description':'Soft and exotic spinach curry with the typical fresh Paneer eel.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Matter paneer',
		   'description':'Pieces of Paneer (fresh cheese) with peas, in tomato sauce.'
		},
		{  
		   'price':'$ 85.00  ',
		   'itemName':'Aloo matter',
		   'description':'Potatoes and peas cooked in a rich spicy and creamy sauce.'
		},
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Aloo palak',
		   'description':'Refreshing and light spinach curry with potato.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Aloo gobhi',
		   'description':'Cauliflower with potato, cilantro, ginger, slightly spicy.'
		},
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Avial',
		   'description':'Mix of vegetables with coconut milk.'
		},
		{  
		   'price':'$ 65.00  ',
		   'itemName':'Vegetables thoran',
		   'description':'Cabbage, carrot and onion sautéed with coconut oil and spices.'
		},
		{  
		   'price':'$ 85.00  ',
		   'itemName':'Chowmien vegetables',
		   'description':'Garlic vegetables with soy sauce and ketchup.'
		},
		{  
		   'price':'$ 85.00  ',
		   'itemName':'Gobhi munchurian dry',
		   'description':'Marinated cauliflower / corn sauteed with ginger, garlic, green onions and soy sauce.'
		},
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Vindi masala',
		   'description':'Fresh cooked okra onion with tomato.'
		},
		{  
		   'price':'$ 120.00  ',
		   'itemName':'Biryani vegetables',
		   'description':'Fresh vegetables cooked with basmati rice and spices.'
		},
		{  
		   'price':'$ 85.00  ',
		   'itemName':'Eggplant bhartha',
		   'description':'Aubergine barbecue in a tandoori oven and then crushed and garnished with fresh onions, tomatoes, peas and herbs.'
		},
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Mushrooms, masala pea',
		   'description':'Mushrooms and fresh peas cooked in a delicate spice sauce.'
		},
		{  
		   'price':'$ 75.00  ',
		   'itemName':'Spinach mushrooms',
		   'description':'Fresh mushrooms and spinach cooked in spices.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Vegetable kofta curry',
		   'description':'Cheese stuffed in vegetable balls and cooked in a slightly spicy creamy sauce.'
		},
		{  
		   'price':'$ 70.00  ',
		   'itemName':'Aloo jira',
		   'description':'Its main ingredients are potatoes, cumin seeds and spices.'
		},
		{  
		   'price':'$ 85.00  ',
		   'itemName':'Karela masala',
		   'description':'Fresh bitter gourd cooked onion with tomato.'
		},
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Egg curry',
		   'description':'Boil the eggs cooked in masala tomato sauce.'
		}
	 ]

	 $scope.beverageItems=[  
		{  
		   'price':'$ 45.00  ',
		   'itemName':'Chai masala',
		   'description':'Black tea mixed with ginger, cinnamon, cardamom, cloves, milk and sugar.'
		},
		{  
		   'price':'$ 50.00  ',
		   'itemName':'Mango lassi',
		   'description':'Whipped cream yogurt with mango and cardamom.'
		},
		{  
		   'price':'$ 40.00  ',
		   'itemName':'Plain lassi',
		   'description':'Cream of natural yoghurt smoothie, with a light aroma of roses and cardamom.'
		},
		{  
		   'price':'$ 40.00  ',
		   'itemName':'Sweet lassi',
		   'description':'Yogurt and cardamom sugar with saffron served.'
		},
		{  
		   'price':'$ 30.00  ',
		   'itemName':'Black Chai',
		   'description':'Black tea mixed with ginger, cinnamon, cardamom, cloves and black pepper.'
		}
	 ]

	 $scope.breadItems=[  
		{  
		   'price':'$ 50.00  ',
		   'itemName':'Paneer naan',
		   'description':'Bread stuffed with soft cream cheese.'
		},
		{  
		   'price':'$ 40.00  ',
		   'itemName':'Plain naan',
		   'description':'Bread made with a mass of natural flour cooked in a tandoor oven.'
		},
		{  
		   'price':'$ 45.00  ',
		   'itemName':'Garlic naan',
		   'description':'Garlic flavored with garlic cooked in tandoori oven.'
		},
		{  
		   'price':'$ 20.00  ',
		   'itemName':'Chapathi',
		   'description':'Round and thin flat bread made with wholemeal flour.'
		},
		{  
		   'price':'$ 50.00  ',
		   'itemName':'Aloo paratha',
		   'description':'Bread stuffed with potatoes'
		},
		{  
		   'price':'$ 30.00  ',
		   'itemName':'Roti',
		   'description':'Whole wheat bread baked in a clay oven.'
		},
		{  
		   'price':'$ 150.00  ',
		   'itemName':'Masala dosa',
		   'description':'Crunchy crepe spice made of lentils and fermented rice stuffed with spiced potatoes'
		},
		{  
		   'price':'$ 100.00  ',
		   'itemName':'Plain dosa',
		   'description':'Crunchy crepe made from lentils and fermented rice.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Idli',
		   'description':'Steamed rice and lentil patties served with sambhar and coconut chutney.'
		},
		{  
		   'price':'$ 95.00  ',
		   'itemName':'Vada know',
		   'description':'Fried lentil donuts served with coconut and sambar chutney.'
		},
		{  
		   'price':'$ 90.00  ',
		   'itemName':'Vegetable uthappam',
		   'description':'Ingredients of tomato, peas, carrots, onions and cilantro.'
		},
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Poori bhaji',
		   'description':'Potatoes and onions cooked to perfection served.'
		},
		{  
		   'price':'$ 95.00  ',
		   'itemName':'Chole bhature',
		   'description':'Chef specialty, big bloated bread served with masala chickpeas.'
		},
		{  
		   'price':'$ 30.00  ',
		   'itemName':'Papadum',
		   'description':'Crispy lentil flour cakes with cumin.'
		}
	 ]
	$scope.drinksItems=[  
		{  
		   'price':'$ 25.00  ',
		   'itemName':'Coca Cola',
		   'description':'Of 355 ml.'
		},
		{  
		   'price':'$ 25.00  ',
		   'itemName':'Coca cola without sugar',
		   'description':'Of 355 ml.'
		},
		{  
		   'price':'$ 25.00  ',
		   'itemName':'Diet Coke',
		   'description':'Of 355 ml.'
		},
		{  
		   'price':'$ 25.00  ',
		   'itemName':'Sprite zero',
		   'description':'Of 355 ml.'
		},
		{  
		   'price':'$ 25.00  ',
		   'itemName':'Fanta',
		   'description':'Of 355 ml.'
		},
		{  
		   'price':'$ 25.00  ',
		   'itemName':'Sidral Mundet',
		   'description':'Of 355 ml.'
		},
		{  
		   'price':'$ 25.00  ',
		   'itemName':'Ciel',
		   'description':'500 ml'
		}
	 ]
	 
	$scope.dessertItems=[  
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Gulab jamun',
		   'description':'This delicious Indian dessert is a soft filling, melted in the mouth, fried meatballs traditionally made of thickened or reduced milk, soaked in sugar syrup with a rose flavor.'
		},
		{  
		   'price':'$ 55.00  ',
		   'itemName':'Kheer',
		   'description':'Rice pudding with cardamom and saffron.'
		},
		{  
		   'price':'$ 60.00  ',
		   'itemName':'Jalebi',
		   'description':'Spirals of dough flavored with saffron and cardamom.'
		},
		{  
		   'price':'$ 80.00  ',
		   'itemName':'Carrot halawa',
		   'description':'Traditional carrot cake.'
		}
	 ]

	})
	app.config(function ($routeProvider) {
		$routeProvider.
		when("/", {
			templateUrl: "partials/main.html"
		}).
		when("/menu", {
			templateUrl: "partials/menu.html",
			controller:"menuController"
		}).
		when("/aboutus", {
			templateUrl: "partials/aboutus.html"
		}).
		when("/contactus", {
			templateUrl: "partials/contactus.html"
		});


	});