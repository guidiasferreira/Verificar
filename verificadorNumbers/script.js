
function verificar(number){
    number = parseFloat(document.getElementById("number").value);

    var resultado;
    var msg = "";


    if (number > 0){
        msg = "Valor positivo!";
        document.getElementById("resultado").innerHTML = msg;

    } else{
        if (number < 0){
            msg = "Valor negativo!";
            document.getElementById("resultado").innerHTML = msg;

        } else{
            msg = "Valor é Nulo!";
            document.getElementById("resultado").innerHTML = msg;
        }
    }

}

