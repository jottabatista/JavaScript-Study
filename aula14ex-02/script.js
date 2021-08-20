function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var result = document.getElementById('result');
    //var num = 2;
    var tabuada = '';
    var resultInPoint = 0;

    var variavel = "";
    var variavel1 = true; // booleano, true or false
    var variavel2 = 0;
    var variavel3 = 1.2; // float = não inteiro E Z
    // O nome da variavel pode ser o que vc quiser.
    var bunda = 0;
    var index123guilherme = 0;
    var count = 0; //Contar

    
    var resultString = "";
    for (let index = 1; index <= 10; index++) {
        //console.log(index);
        resultInPoint = num * index;
        //console.log(`${num} x ${index} = ${resultInPoint}`);
        console.log(num + " x " + index + " = " + resultInPoint);
        resultString += `${num} x ${index} = ${resultInPoint} <br>`;
    }
    //console.log(`Teste`);
    //resposta.innerHTML = tabuada;
    result.innerHTML = resultString;
}