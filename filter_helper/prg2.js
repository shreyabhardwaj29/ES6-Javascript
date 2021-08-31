var products = [
    { name: 'cucumber', type: 'vegetable', price: 20, quantity: 10 },
    { name: 'tomato', type: 'vegetable', price: 30, quantity: 0},
    { name: 'apple', type: 'fruit', price: 10, quantity: 1},
    { name: 'potato', type: 'vegetable', price: 50, quantity: 30}

];

products.filter(function(product){
    return product.type === 'vegetable' && product.quantity > 0 &&  product.price >= 10
});
