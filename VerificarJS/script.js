
function verificar(event){
    event.preventDefault();
    let number = parseFloat(document.getElementById("number").value);

    let resultado;
    let msg = "";


    if (number > 0){
        msg = "Valor positivo!";

    } else{
        if (number < 0){
            msg = "Valor negativo!";

        } else{
            msg = "Valor é Nulo!";
            
        }
    }

    document.getElementById("resultado").innerHTML = msg;
}

document.getElementById("form").addEventListener("submit", verificar);


