function convertTemperature() {
  const temperatureInput = document.getElementById("temperatureInput");
  const celsiusToFahrenheitRadio = document.getElementById(
    "celsiusToFahrenheit"
  );
  const fahrenheitToCelsiusRadio = document.getElementById(
    "fahrenheitToCelsius"
  );
  const resultElement = document.getElementById("result");

  let temperatureValue = parseFloat(temperatureInput.value);

  if (isNaN(temperatureValue)) {
    resultElement.textContent = "Invalid temperature value";
    return;
  }

  if (celsiusToFahrenheitRadio.checked) {
    const fahrenheitValue = (temperatureValue * 9) / 5 + 32;
    resultElement.textContent = `${fahrenheitValue.toFixed(1)}°F`;
  } else if (fahrenheitToCelsiusRadio.checked) {
    const celsiusValue = ((temperatureValue - 32) * 5) / 9;
    resultElement.textContent = `${celsiusValue.toFixed(1)}°C`;
  } else {
    resultElement.textContent = "Please select a conversion type";
  }
}
