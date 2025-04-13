function Product_Inventory_Processing(products, Stock_threshold, Discount_percentage){
  return products
    .filter(product => product.stock < Stock_threshold)
    .map(product => ( {
      name : product.name,
      discountedPrice : product.price * (1 - Discount_percentage/100),
      category : product.category
    }))
  .sort((a,b) => a.discountedPrice  - b.discountedPrice)
}

let products = [
  { id: 101, name: "Laptop", price: 1200, stock: 15, category: "Electronics" },
  { id: 102, name: "Desk Chair", price: 250, stock: 8, category: "Furniture" },
  { id: 103, name: "Headphones", price: 180, stock: 6, category: "Electronics" },
  { id: 104, name: "Coffee Table", price: 350, stock: 12, category: "Furniture" },
  { id: 105, name: "Smartphone", price: 800, stock: 4, category: "Electronics" }
]
let Stock_threshold = 10
let Discount_percentage = 15
Product_Inventory_Processing(products, Stock_threshold, Discount_percentage)
