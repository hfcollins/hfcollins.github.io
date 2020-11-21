var $ = function (id) { return document.getElementById(id); };


function hoverOn1() {

    $("images/espresso_info.jpg").src = 'images/espresso_info.jpg';
};
function hoverOn2() {

    $("images/latte_info.jpg").src = 'images/latte_info.jpg';
};
function hoverOn3() {

    $("images/cappuccino_info.jpg").src = 'images/cappuccino_info.jpg';
};
function hoverOn4() {

    $("images/coffee_info.jpg").src = 'images/coffee_info.jpg';
};
function hoverOn5() {

    $("images/biscotti_info.jpg").src = 'images/biscotti_info.jpg';
};
function hoverOn6() {

    $("images/scone_info.jpg").src = 'images/scone_info.jpg';
};

function hoverOff1() {

    $("images/espresso_info.jpg").src = 'images/espresso.jpg';
};
function hoverOff2() {

    $("images/latte_info.jpg").src = 'images/latte.jpg';
};
function hoverOff3() {

    $("images/cappuccino_info.jpg").src = 'images/cappuccino.jpg';
};
function hoverOff4() {

    $("images/coffee_info.jpg").src = 'images/coffee.jpg';
};
function hoverOff5() {

    $("images/biscotti_info.jpg").src = 'images/biscotti.jpg';
};
function hoverOff6() {

    $("images/scone_info.jpg").src = 'images/scone.jpg';
};


var total = 0;
function addTotal(elem) {
    total += parseFloat(elem);
    $('total').innerHTML = "$" + total;
};


var text = "";
var orderForm = "";
var x = "";
var option = "";
function addToOrder(orderText) {
    text = orderText;
    var orderForm = $("order");

    var x = $("order");
    var option = document.createElement("option");
    option.text = orderForm.value + text + "\n";
    x.add(option);
};

function clearOrder () {

    total = 0.00;
    $("total").innerHTML = "$" + 0.00;

    x.value = "";
    var select = $("order");
    var length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }
    
};











//var sel = "";
/*
 *
    // get reference to select element
    var sel = $('order');

    // create new option element
    var opt = document.createElement('option');

    // create text node to add to option element (opt)
    opt.appendChild(document.createTextNode(orderForm.value + text));

    // set value property of opt
    opt.value = 'option value';

    // add opt to end of select box (sel)
    sel.appendChild(opt); 
    


optionText = orderForm.value + text + "\n";
optionValue = 'ultimate';

$('order').append(new Option(optionText, optionValue));*/