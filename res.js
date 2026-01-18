  searchFood(text) {
    return this.menu.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.category.toLowerCase().includes(text.toLowerCase())
    );
  }