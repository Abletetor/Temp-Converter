const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

// from celcius to fahrenheit function
celsius.oninput = () => {
     //keep track of the input
     let output = (parseFloat(celsius.value) * 9) / 5 + 32;
     fahrenheit.value = parseFloat(output.toFixed(2));
};

// from fahrenheit to celcius function
fahrenheit.oninput = () => {
     let oputput = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
     celsius.value = parseFloat(oputput.toFixed(2));
};

//footer year
document.getElementById("year").innerHTML = new Date().getFullYear();