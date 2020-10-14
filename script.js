var currencyFrom = document.getElementById("currency-from");
var currencyTo = document.getElementById("currency-to");
var display = document.getElementById("display");
var currency = {
  usd: 1,
  eur: 1.13194,
  czk: 0.0424931,
  gbp: 1.26376,
  inr: 0.0133285,
  jpy: 0.00931207
};

var ratioFrom = currency.usd;

var ratioTo = currency.usd;
var amount = 1;

function input() {
  amount = document.getElementById("amount").value;
}

function from() {
  let currencySelected = currencyFrom.value;
  ratioFrom = currency[`${currencySelected}`];
}

function to() {
  let currencySelected = currencyTo.value;
  ratioTo = currency[`${currencySelected}`];
}

function calculation() {
  let result = amount * (ratioFrom / ratioTo);
  display.innerHTML = `${amount} ${currencyFrom.value} = ${result.toFixed(4)} ${currencyTo.value}`;
}

function change() {
  // using of destructuring of array on swapping values of two variables :)
  [currencyTo.value, currencyFrom.value] = [
    currencyFrom.value,
    currencyTo.value
  ];
  from();
  to();
}
