var restaurantId = null;

var Restaurant = function(restaurantId, restaurantName, restaurantAddress1, restaurantAddress2, restaurantCity, restaurantState, restaurantZipcode,restaurantPhoneNumber, restaurantWebsite) {
  this.id = restaurantId;
  this.name = restaurantName;
  this.address1 = restaurantAddress1;
  this.address2 = restaurantAddress2;
  this.city = restaurantCity;
  this.state = restaurantState;
  this.zipcode = restaurantZipcode;
  this.phoneNumber = restaurantPhoneNumber;
  this.website = restaurantWebsite;
}

var restaurantList = [];

// restaurantList.push(new Restaurant(restaurantId++, "name", "address1", "address2", "city", "state", zipcode, "phoneNumber", "website"))

restaurantList.push(new Restaurant(restaurantId++, "Thai Dishes on Broadway", "123 Broadway", "", "Santa Monica", "CA", 90401, "(310) 394-6189", "thaidishessantamonica.com"));

restaurantList.push(new Restaurant(restaurantId++, "BCD Tofu House", "3575 Wilshire Blvd", "", "Los Angeles", "CA", 90010, "(213) 382-6677", "bcdtofu.com"));

restaurantList.push(new Restaurant(restaurantId++, "Archi’s Thai Kitchen", "6360 W Flamingo Rd", "", "Las Vegas", "NV", 89103, "(702) 880-5550", "archithai.com"));

restaurantList.push(new Restaurant(restaurantId++, "Pinoy Pinay Filipino Fastfood", "11900 South St", "#107-108", "Cerritos", "CA", 90703, "(562) 402-6682", "pinoypinayrestaurant.com"));

restaurantList.push(new Restaurant(restaurantId++, "Blaze Pizza", "103 W Imperial Hwy", "", "Brea", "CA", 92821, "(714) 783-9843", "blazepizza.com"));

restaurantList.push(new Restaurant(restaurantId++, "Panda Express", "101 W. Imperial Hwy", "Unit G", "Brea", "CA", 92821, "(714) 674-0036", "pandaexpress.com"));

restaurantList.push(new Restaurant(restaurantId++, "Olive Pit Grill", "2445 E. Imperial Hwy", "Suite F", "Brea", "CA", 92821, "(714) 529-3200", "olivepitgrill.com"));

restaurantList.push(new Restaurant(restaurantId++, "The Cheesecake Factory", "120 Brea Mall Way", "", "Brea", "CA", "92821", "(714) 255-0115", "thecheesecakefactory.com"))

restaurantList.push(new Restaurant(restaurantId++, "Kula Revolving Sushi Bar", "1065 Brea Mall", "Ste 2050A", "Brea", "CA", 92821, "(714) 582-5898", "kurausa.com"))

restaurantList.push(new Restaurant(restaurantId++, "Charleys Philly Steaks", "1065 Brea Mall", "Food Court", "Brea", "CA", 92821, "(714) 674-0115", "charleys.com"))

restaurantList.push(new Restaurant(restaurantId++, "California Fish Grill", "419 S Associated Rd", "", "Brea", "CA", 92821, "(714) 482-2151", "cafishgrill.com"))



// RESTfull API's

//Get (All)
function index(req, res) {
  res.json({restaurantList: restaurantList})
}

//POST  (create individual restaurant into restaurantList = [])
function create(req, res) {
  console.log(req.body.restaurant);
  restaurantList.unshift(req.body.restaurant)
  console.log(req.body);
  res.json({restaurantList: restaurantList})
  console.log(res.body);
}

//GET (grabbing individual restaurant from restaurantList = [])
function show(req, res) {
  for(let i = 0; i < restaurantList.length; i++) {
    if (restaurantList[i].id == req.params.id) {
      res.json({restaurant: restaurantList[i]})
    }
  }
}

//PUT (grabbing individual restaurant from restaurantList = [])
function update(req, res) {
  for (let i = 0; i < restaurantList.length; i++) {
    if (restaurantList[i].id == req.params.id) {
      restaurantList.splice(i, 1, req.params.restaurant)
      res.json({restaurantList: restaurantList})
    }
  }
}

//DELETE (grabbing individual restaurant from restaurantList = [])
function destroy(req, res) {
  for (let i = 0; i < restaurantList.length; i++) {
    if (req.params.id == restaurantList[i].id) {
      restaurantList.splice(i, 1)
      res.json({restaurantList: restaurantList})
    }
  }
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
