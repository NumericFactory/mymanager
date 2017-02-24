 (function () {
var totalPriceline;
var unitPriceline;
var qty;

var inputQty = document.getElementById('qty');
console.log(inputQty);
var inputUnitPriceline = document.querySelector('input#unitPriceline');

function calculateTotalPriceline(e) {
	//e.preventDefault();
	alert("hello");
	totalPricelineQty = this.value;
	console.log(totalPricelineQty);
}

inputQty.addEventListener('keyup', calculateTotalPriceline);

});
