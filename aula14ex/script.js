function contar() {
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var passo = document.getElementById("passo").value;
    
    inicio = parseInt(inicio);
    passo = parseInt(passo);
    fim = parseInt(fim);

    let string = "";
    
    while (inicio < fim) {
        string += inicio.toString() + " ";
        inicio = inicio + passo; 
    }
    
    let resultado = document.getElementById("result");
    resultado.innerHTML = "Resultado:" + string;
}

/*
    "1"
    "1 3"
    "1 3 5"
    "1 3 5 7"
    "1 3 5 7 9"
    1.toString() = "1"
*/