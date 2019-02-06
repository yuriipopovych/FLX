var ammountOfMoney = parseFloat(prompt("Input ammount of money"));
var discount = parseFloat(prompt("Input your discount"));
function calculatorOfDiscount () {
	if ( ammountOfMoney >= 0 && ammountOfMoney <= 9999999 && discount >=0 && discount <= 99 ) {
		var price = parseFloat(ammountOfMoney * ((100 - discount) / 100));
		var savedMoney = parseFloat(ammountOfMoney * (discount / 100));
		var result = "Price without discount: " + ammountOfMoney.toFixed(2) + ";" +
					"\nDiscount: " + discount.toFixed(2) + "%" + ";" +
					"\nPrice with discount: " + price.toFixed(2) + ";" +
					"\nSaved: " + savedMoney.toFixed(2) + ";" 
		alert(result);
	} else {
		alert("invalid data")
	}
}
calculatorOfDiscount();