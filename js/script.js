function somar(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = resultado;
}
function subtrair(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = resultado;
}
function dividir(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 / numero2;

    document.getElementById("resultado").textContent = resultado;
}
function multiplicar(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = resultado;
}