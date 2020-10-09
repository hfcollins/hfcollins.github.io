var $ = function (id) {
    return document.getElementById(id); 
};

function init() {
    $("clear").onclick = clear;
    $("subtotal").onclick = function () {
        $("subtotal").value = "";
    };
    $("tax_rate").onclick = function () {
        $("tax_rate").value = "";
    };
    $("subtotal").focus();
}


function processEntries()
{
    var sub_total = parseFloat($("subtotal").value);
    var tax_rate = parseFloat($("tax_rate").value);
    
    if (sub_total < 0 || sub_total > 10000 || tax_rate < 0
        || tax_rate > 12) {
        alert("Subtotal must be greater than 0 and less than 10000\n Tax rate must be greater than 0 and less than 12")
        $("subtotal").value = "";
        $("tax_rate").value = "";
        $("subtotal").focus();
        return;
    }

    var sales_tax = sub_total * tax_rate / 100;
    var total = sub_total + sales_tax;
    

    $("sales_tax").value = sales_tax.toFixed(2);
    $("total").value = total.toFixed(2);
    $("subtotal").focus();
}


var clear = function () {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("subtotal").focus();
}