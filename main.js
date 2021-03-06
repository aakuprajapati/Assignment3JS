
// Declaration of header and section variable

var header = document.querySelector('header');
var section = document.querySelector('section');


// Json file on server and request URL

var requestURL = 'https://raw.githubusercontent.com/aakuprajapati/Assignment3JS/master/product.json';

// Create a new object
var request = new XMLHttpRequest();

// request() method to get URL from server

request.open('GET', requestURL);

// write javascript to accept json from server

request.responseType = 'json';


// Sending request to server by send() method
request.send();


// onload event to load page

request.onload = function() {

	// declare variable for header
	var weiedDeals = request.response;

	// console for weied
	console.log(weiedDeals);

	//Main Header
	mainHeader(weiedDeals);

	//Top Weied Deals
	topDeals(weiedDeals);
}


// Function for mainHeader

function mainHeader(jsonObj){

	// Set the main Header
	var firstHeader = document.createElement('h1');
	// Grab the main header
	firstHeader.textContent = jsonObj.Head;
	// Set this header in header tag
	header.appendChild(firstHeader);


	// Set the second Header
    var secondHeader = document.createElement('h2');
    //Grab the second header
    secondHeader.textContent = jsonObj.secondHead;
    //Set this header in header tag
    header.appendChild(secondHeader);
}


// Another function for top deals

function topDeals(jsonObj){

	//Declaration of top deals variable

	var dealsOfDay = jsonObj.topDeals;

	//for loop to topdeals object

	for (var i = 0; i < dealsOfDay.length; i++){

		// Declaration of varibles to set all tags

		var article = document.createElement('article');
		var h2 = document.createElement('h2');
		var img = document.createElement('img');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var list = document.createElement('ul');



		// Set all property for each element based on JSON

		img.setAttribute('src', 'https://raw.githubusercontent.com/aakuprajapati/Assignment3JS/master/images/' + dealsOfDay[i].image);
		img.setAttribute('alt', dealsOfDay[i].name);

		h2.textContent = dealsOfDay[i].name;
		p1.textContent = 'Price: ' + dealsOfDay[i].price;

		p2.textContent = 'Description: ' + dealsOfDay[i].description;


		// Declaration of variable for features
		var fectures = dealsOfDay[i].feature;



		//For loop for list item
		for (var j = 0; j < fectures.length; j++){

		var productItem = document.createElement('li');

		productItem.textContent = fectures[j];
		list.appendChild(productItem);
		}


		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(list);
		section.appendChild(article);
	}
}