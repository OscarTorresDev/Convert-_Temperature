function convertTemperature() {
  const celsiusInput = document.getElementById("celsius").value;
  const errorElement = document.getElementById("error");
  const resultsElement = document.getElementById("results");

  errorElement.style.display = "none";
  resultsElement.style.display = "none";
  const celsius = parseFloat(celsiusInput);

  if (isNaN(celsius)) {
    errorElement.style.display = "block";
    return;
  }

  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  document.getElementById(
    "kelvin"
  ).textContent = `Grados Kelvin: ${kelvin.toFixed(2)}`;
  document.getElementById(
    "fahrenheit"
  ).textContent = `Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
  resultsElement.style.display = "block";

  console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
  console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

document.getElementById("celsius").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    convertTemperature();
  }
});
