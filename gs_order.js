function calculateOrder() {
    var thinMintsQuantity = parseInt(document.getElementById("thinMintsQuantity").value) || 0;
    var doSiDosQuantity = parseInt(document.getElementById("doSiDosQuantity").value) || 0;
    var lemonCremesQuantity = parseInt(document.getElementById("lemonCremesQuantity").value) || 0;
    var sandDollarsQuantity = parseInt(document.getElementById("sandDollarsQuantity").value) || 0;
    var chocolateChipQuantity = parseInt(document.getElementById("chocolateChipQuantity").value) || 0;

    var totalQuantity = thinMintsQuantity + doSiDosQuantity + lemonCremesQuantity + sandDollarsQuantity + chocolateChipQuantity;
    var totalCost = 3.5 * totalQuantity;
    var shippingCost = totalQuantity >= 10 ? 0 : totalCost * 0.05;
    var totalAmountOwed = totalCost + shippingCost;

    var orderInfo = "Order Information:\n";
    orderInfo += "====================\n";
    orderInfo += "Thin Mints: " + thinMintsQuantity + " boxes\n";
    orderInfo += "Do Si Do's: " + doSiDosQuantity + " boxes\n";
    orderInfo += "Lemon Cremes: " + lemonCremesQuantity + " boxes\n";
    orderInfo += "Sand Dollars: " + sandDollarsQuantity + " boxes\n";
    orderInfo += "Chocolate Chip: " + chocolateChipQuantity + " boxes\n";
    orderInfo += "---------------------\n";
    orderInfo += "Total Quantity: " + totalQuantity + " boxes\n";
    orderInfo += "Total Cost: $" + totalCost.toFixed(2) + "\n";
    orderInfo += "Shipping Cost: $" + shippingCost.toFixed(2) + "\n";
    orderInfo += "---------------------\n";
    orderInfo += "Total Amount Owed: $" + totalAmountOwed.toFixed(2);

    document.getElementById("orderInfo").value = orderInfo;
  }