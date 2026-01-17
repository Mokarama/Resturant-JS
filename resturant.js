
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


  updateFood(id, updatedData) {
    const food = this.menu.find(item => item.id === id);
    if (!food) {
      console.log(`Food with id ${id} not found`);
      return;
    }
    food.name = updatedData.name ?? food.name;
    food.price = updatedData.price ?? food.price;
    food.category = updatedData.category ?? food.category;
  }

 
  deleteFood(id) {
    this.menu = this.menu.filter(item => item.id !== id);
  }


  searchFood(text) {
    return this.menu.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.category.toLowerCase().includes(text.toLowerCase())
    );
  }
}


const res = new Restaurant("Food House");


res.addFood(new Food(1, "Burger", 150, "Fast Food"));
res.addFood(new Food(2, "Pizza", 500, "Fast Food"));
res.addFood(new Food(3, "Biryani", 250, "Rice"));


console.log("All Menu:", res.getAllFood());


res.updateFood(1, { price: 180 });
console.log("After Update:", res.getAllFood());


res.deleteFood(2);
console.log("After Delete:", res.getAllFood());

console.log("Search 'Fast':", res.searchFood("Fast"));
console.log("Search 'Burger':", res.searchFood("Burger"));
console.log("Search 'Rice':", res.searchFood("Rice"));
