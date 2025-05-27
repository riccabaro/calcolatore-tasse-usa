const taxRates = {
  CA: 0.0725,
  NY: 0.04,
  TX: 0.0625,
  FL: 0.06,
  OR: 0.0 // Oregon ha zero sales tax
};

const conversionRate = 0.92; // USD -> EUR (puoi aggiornare)

function calculateTotal() {
  const price = parseFloat(document.getElementById("price").value);
  const state = document.getElementById("state").value;

  if (isNaN(price) || !state) {
    alert("Inserisci un prezzo valido e seleziona uno stato.");
    return;
  }

  const taxRate = taxRates[state];
  const taxAmount = price * taxRate;
  const totalUSD = price + taxAmount;
  const totalEUR = totalUSD * conversionRate;

  document.getElementById("basePrice").innerText = price.toFixed(2);
  document.getElementById("taxAmount").innerText = taxAmount.toFixed(2);
  document.getElementById("totalUSD").innerText = totalUSD.toFixed(2);
  document.getElementById("totalEUR").innerText = totalEUR.toFixed(2);

  document.getElementById("results").classList.remove("hidden");
}