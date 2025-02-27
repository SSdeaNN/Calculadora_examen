let pantalla = document.getElementById("screen");
let numero1 = "";
let numero2 = "";
let operador = "";

function getInput(valor) {
    if (!isNaN(valor) || valor === "0") {
        if (operador === "") {
            numero1 += valor;
        } else {
            numero2 += valor;
        }
    } else {
        if (numero1 !== "" && numero2 === "") {
            operador = valor;
        }
    }
    pantalla.value += valor;
}

function calculate() {
    if (numero1 !== "" && numero2 !== "" && operador !== "") {
        let resultado = 0;
        let n1 = parseFloat(numero1);
        let n2 = parseFloat(numero2);

        switch (operador) {
            case "+":
                resultado = sumar(n1, n2);
                break;
            case "-":
                resultado = restar(n1, n2);
                break;
            case "*":
                resultado = multiplicar(n1, n2);
                break;
            case "/":
                resultado = dividir(n1, n2);
                break;
            default:
                resultado = "Error";
        }

        pantalla.value = resultado;
        reiniciarCalculadora(resultado);
    }
}

function clearScreen() {
    pantalla.value = "";
    numero1 = "";
    numero2 = "";
    operador = "";
}

function reiniciarCalculadora(resultado) {
    numero1 = resultado.toString();
    numero2 = "";
    operador = "";
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return b !== 0 ? a / b : "Error";
}
