
function get_new_car() {
  var a_new_car = {
    "city": "Toronto",
    "passengers": 0,
    "gas": 100,
  };
  return a_new_car;
};

function add_car(cars, new_car) {
  cars.push(new_car);
  return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
};

function pick_up_passenger(car) {
  car.passengers += 1;
  car.gas -= 10;
  return "Picked up passenger. Car now has " + car.passengers +  " passengers.";
};

function get_destination(car) {
  switch (car.city) {
    case "Toronto":
      return "Mississauga";
    case "Mississauga":
      return "London";
    case "London":
      return "Toronto";
  };
};

function fill_up_gas(car) {
  var old_gas = car.gas;
  car.gas = 100;
  return "Filled up to " + get_gas_display(car.gas) + " on gas from " + get_gas_display(old_gas) + ".";
};

function get_gas_display(gas_amount) {
  return gas_amount + "%";
};

function drive(car, city_distance) {
  if (car.gas < city_distance) {
    return fill_up_gas(car);
  }

  car.city = get_destination(car);
  car.gas -= city_distance;
  return "Drove to " + car.city + ". Remaining gas: " + get_gas_display(car.gas) + ".";
};

function drop_off_passengers(car) {
  var previous_passengers = car.passengers;
  car.passengers = 0;
  return "Dropped off " + previous_passengers + " passengers.";
};

function act(car) {
  var distance_between_cities = 50;

  if (car.gas < 20) {
    return fill_up_gas(car);
  }
  else if (car.passengers < 3) {
    return pick_up_passenger(car);
  }
  else {
    if (car.gas < distance_between_cities) {
      return fill_up_gas(car);
    }
    var drove_to = drive(car, distance_between_cities);
    var passengers_dropped = drop_off_passengers(car);
    return drove_to + " " + passengers_dropped;
  }
};

function command_fleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(cars[i]);
    console.log("Car " + (i + 1) + ": " + action);
  };
  console.log("---");
};

function add_one_car_per_day(cars, num_days) {
  for (var num = 0; num < num_days; num++) {
    var new_car = get_new_car();
    console.log(add_car(cars, new_car));
    command_fleet(cars);
  };
};

var cars = [];
add_one_car_per_day(cars, 10);
