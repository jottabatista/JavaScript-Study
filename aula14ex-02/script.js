function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var result = document.getElementById('result');
    //var num = 2;
    var tabuada = '';
    var resultInPoint = 0;
    
    var resultString = "";
    for (let index = 1; index <= 10; index++) {
        //console.log(index);
        resultInPoint = num * index;
        //console.log(`${num} x ${index} = ${resultInPoint}`);
        console.log(num + " x " + index + " = " + resultInPoint);
        resultString += `${num} x ${index} = ${resultInPoint} <br>`;
    }
    //resposta.innerHTML = tabuada;
    result.innerHTML = resultString;
}