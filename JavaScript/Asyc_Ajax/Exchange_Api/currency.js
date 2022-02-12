class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://freecurrencyapi.net/api/v2/latest?apikey=3b7d2aa0-89f6-11ec-980d-f1e4cc7fe075&base_currency=";
    this.amount = null;
  }
  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
          const parity = data["data"][this.secondCurrency];
          const total = Number(this.amount) * Number(parity);
          resolve(total);
        })
        .catch(err => reject(err));
    });
  }
  changeAmount(amount) {
    this.amount = amount;
  }
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
}