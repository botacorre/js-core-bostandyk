export class Store {
    #items = [];
  
    constructor(initialItems = []) {
      if (Array.isArray(initialItems)) {
        this.#items = initialItems.filter(item => item && item.name && item.price);
      }
    }
  
    get count() {
      return this.#items.length;
    }
  
    add(item) {
      if (!item || typeof item.price !== 'number' || typeof item.qty !== 'number') {
        throw new Error('Некорректный элемент');
      }
      this.#items.push(item);
    }
  
    remove(name) {
      const index = this.#items.findIndex(item => item.name === name);
      if (index !== -1) {
        return this.#items.splice(index, 1)[0];
      }
      return null;
    }
  
    find(name) {
      return this.#items.find(item => item.name === name) || null;
    }
  
    total() {
      return this.#items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }
  
    static createDefaultStore() {
      return new Store([
        { name: 'Book', price: 10, qty: 2 },
        { name: 'Pen', price: 2, qty: 5 }
      ]);
    }
  }
  
  export class SortedStore extends Store {
    add(item) {
      super.add(item);
    }
  
    getItemsSortedByName() {
      return this.total();
    }
  }