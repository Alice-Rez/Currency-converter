var currencyFrom = document.getElementById("currency-from");
var currencyTo = document.getElementById("currency-to");
var display = document.getElementById("display");
var currency = {
  usd: 1,
  eur: 1.13194,
  czk: 0.0424931,
  gbp: 1.26376,
  inr: 0.0133285,
  jpy: 0.00931207,
};
// var currency = ["usd", "eur", "czk", "gbp", "inr", "jpy"];
// var currencyRatio = [1, 1.13194, 0.0424931, 1.26376, 0.0133285, 0.00931207];
// var ratioFrom = currencyRatio[0];
var ratioFrom = currency.usd;
// var ratioTo = currencyRatio[0];
var ratioTo = currency.usd;
var amount = 1;

function input() {
  amount = document.getElementById("amount").value;
  console.log(amount);
}

function from() {
  let currencySelected = currencyFrom.value;
  // ratioFrom = currencyRatio[currency.indexOf(currencySelected)];
  ratioFrom = currency[`${currencySelected}`];
  console.log("from:", currencySelected, ratioFrom);
}

function to() {
  let currencySelected = currencyTo.value;
  // ratioTo = currencyRatio[currency.indexOf(currencySelected)];
  ratioTo = currency[`${currencySelected}`];
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



var product = {
  id : 2082569,
  category: "trousers",
  type: "The Denim",
  name: "The tapered jeans",
  priceOriginal:29.90,
  priceActual: 19.90,
  priceCurrency: "EUR",
  color: "jeans-hellblau",
  size: {
    length: [30,32,34,36],
    width: [28,30,32,34,36,38,40,42,44,46,48,50],
  }
  photo: ["front src-file","back src-file", "on person src-file",..]
}