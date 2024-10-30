let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
    ];

    let cartShow = cart.map(function (cartItem){ //returns another array
        return cartItem.item;
    })

    ////////////////

    function getStuff(items){
return cart.filter((food)=> food.item === items)
    }

    let get = getStuff(cart);
    console.log(get)

    console.log(cartShow)

    function displayCart(cartProducts){
        cartProducts.forEach(cartProduct => {
            console.log(cartProduct)
        })
    }

    displayCart(cart)