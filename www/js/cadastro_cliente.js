function enviar() {
    const dbParam = JSON.stringify({
        "nome": document.querySelector("#nome").value,
        "celular": document.querySelector("#celular").value,
        "documento": document.querySelector("#documento").value,
        "cep": document.querySelector("#cep").value,
        "endereco": document.querySelector("#endereco").value,
        "numero": document.querySelector("#numero").value,
        "bairro": document.querySelector("#bairro").value,
        "cidade": document.querySelector("#cidade").value,
        "estado": document.querySelector("#estado").value
    });

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
        document.getElementById("demo").innerHTML = myObj;
    };

    xmlhttp.open("POST", "https://etec.fernandograciano.com.br/cadastrocliente.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("dados=" + dbParam);
}
