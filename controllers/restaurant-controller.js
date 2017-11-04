var restaurantId = null;

var Restaurant = function(id, name, address1, address2, city, state, zipcode) {
  this.id = id;
  this.name = name;
  this.address1 = address1;
  this.address2 = address2;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
  this.phoneNumber = phoneNumber;
}

var restaurantList = [];

restaurantList.push(new Restaurant(restaurantId++, "name", "address1", "address2", "city", "state", "zipcode", "phoneNumber"))



// RESTfull API's

//Get (All)
function index(req, res) {
  res.json({restaurantList: restaurantList})
}

//POST  (create individual restaurant into restaurantList = [])
function create(req, res) {
  restaurantList.unshift(req.body.restaurant)
  console.log(req.body);
  res.json({restaurantList: restaurantList})
  console.log(res.body);
}

//GET (grabbing individual restaurant from restaurantList = [])
function show(req, res) {
  for(let i = 0, i < restaurantList.length, i++) {
    if (restaurantList[i].id == req.params.id) {
      res.json({restaurantList: restaurantList[i]})
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
    if (restaurantList[i].id == req.params.id) {
      restaurantList.splice(i, 1)
      res.json({restaurantList: restaurantList})
    }
  }
}

module.export {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
