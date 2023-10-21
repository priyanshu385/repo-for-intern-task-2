function convertTemperature(value, type) {
    if (type === 'celsiusToFahrenheit') {
        return (value * 9/5) + 32;
    } else if (type === 'fahrenheitToCelsius') {
        return (value - 32) * 5/9;
    }
}

function convert() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var resultElement = document.getElementById('result');

    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsius)) {
        var f = convertTemperature(celsius, 'celsiusToFahrenheit');
        resultElement.innerText = celsius + " Celsius is " + f.toFixed(2) + " Fahrenheit.";
    } else if (!isNaN(fahrenheit)) {
        var c = convertTemperature(fahrenheit, 'fahrenheitToCelsius');
        resultElement.innerText = fahrenheit + " Fahrenheit is " + c.toFixed(2) + " Celsius.";
    } else {
        resultElement.innerText = "Please enter a valid temperature.";
    }
}


