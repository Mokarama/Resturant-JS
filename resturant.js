
class Food {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Restaurant {
  constructor(name) {
    this.name = name;
    this.menu = [];
  }

 
  addFood(food) {
    this.menu.push(food);
  }

  getAllFood() {
    return this.menu;
  }
}


const res = new Restaurant("Food House");

res.addFood(new Food(1, "Burger", 150, "Fast Food"));
res.addFood(new Food(2, "Pizza", 500, "Fast Food"));

console.log(res.getAllFood());
