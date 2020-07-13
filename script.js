var currencyFrom = document.getElementById("currency-from");
var currencyTo = document.getElementById("currency-to");
var display = document.getElementById("display");
var currency = ["usd", "eur", "czk", "gbp", "inr", "jpy"];
var currencyRatio = [1, 1.13194, 0.0424931, 1.26376, 0.0133285, 0.00931207];
var ratioFrom = currencyRatio[0];
var ratioTo = currencyRatio[0];
var amount = 1;

function input() {
  amount = document.getElementById("amount").value;
  console.log(amount);
}

function from() {
  let currencySelected = currencyFrom.value;
  ratioFrom = currencyRatio[currency.indexOf(currencySelected)];
  console.log("from:", currencySelected, ratioFrom);
}

function to() {
  let currencySelected = currencyTo.value;
  ratioTo = currencyRatio[currency.indexOf(currencySelected)];
  console.log("to:", currencySelected, ratioTo);
}

function calculation() {
  let result = amount * (ratioFrom / ratioTo);
  console.log(result);
  display.innerHTML = `${result.toFixed(4)}`;
}

function change() {
  let switching = [currencyFrom.value, currencyTo.value];
  currencyFrom.value = switching[1];
  currencyTo.value = switching[0];
  from();
  to();
}
