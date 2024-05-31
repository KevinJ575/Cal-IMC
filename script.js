function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let alturaCm = parseFloat(document.getElementById('altura').value);
    let alturaM = alturaCm / 100; 
    let imc = peso / (alturaM * alturaM);
    let imcValue = imc.toFixed(2);
    
    document.getElementById('bmi-value').textContent = 'IMC: ' + imcValue;

    let indicator = document.getElementById('bmi-indicator');
    let position = 0;

    if (imc < 18.5) {
        position = (imc / 18.5) * 25; // 0% a 25%
    } else if (imc >= 18.5 && imc < 24.9) {
        position = 25 + ((imc - 18.5) / (24.9 - 18.5)) * 25; // 25% a 50%
    } else if (imc >= 25 && imc < 29.9) {
        position = 50 + ((imc - 25) / (29.9 - 25)) * 25; // 50% a 75%
    } else {
        position = 75 + ((imc - 29.9) / (40 - 29.9)) * 25; // 75% a 100%
    }

    indicator.style.left = position + '%';
}