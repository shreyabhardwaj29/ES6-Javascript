var products = [
    { name: 'cucumber', type: 'vegetable'},
    { name: 'tomato', type: 'vegetable'},
    { name: 'apple', type: 'fruit'},
    { name: 'potato', type: 'vegetable'}

];


var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[1].type === 'fruits') {
        filteredProducts.push(products[i]);

    }
}
filteredProducts;




products.filter(function(product) {
    return product.type === 'fruit';
});

products.filter(function(product) {
    return product.type === 'vegetable';
});


//Note: Always have a return statement for filter. It will return emply elsewise.