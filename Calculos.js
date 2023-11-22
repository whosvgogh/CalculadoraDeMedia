function media() {
    num1 = parseFloat(document.getElementById("n1").value);
    num2 = parseFloat(document.getElementById("n2").value);
    num3 = parseFloat(document.getElementById("n3").value);
    media = (num1 + num2 + num3) / 3;
    document.getElementById("resultado").innerHTML = (media);
    status = "";
    if (media >= 6) {
        status = "aprovado";
    }
    if (media < 6) {
        status = "reprovado";
    }
    document.getElementById("status").innerHTML = (status);
}