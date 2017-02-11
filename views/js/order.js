var order = {
    burgers: 0,
    sodas: 0,
    waters: 0
};
// soda
$("#sodaMinus").click(function() {
    if(orders.sodas > 0){
    order.sodas--;
    $("#sodaCount").text(order.sodas);
    }
})
$("#sodaPlus").click(function() {
    order.sodas++;
    $("#sodaCount").text(order.sodas);
})
// water
$("#waterMinus").click(function() {
    if(orders.waters > 0){
        order.waters--;
        $("#waterCount").text(order.waters);
    }

})
$("#waterPlus").click(function() {
    order.waters++;
    $("#waterCount").text(order.waters);
})

// burger
$("#burgerMinus").click(function() {
    if(orders.burgers > 0){
    order.burgers--;
    $("#burgerCount").text(order.burgers);
    }

})
$("#burgerPlus").click(function() {
    order.burgers++;
    $("#burgerCount").text(order.burgers);
})



