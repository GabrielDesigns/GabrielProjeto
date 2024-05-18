document.addEventListener("DOMContentLoaded", function() {
    $('#botao').on('click', consultaCep);
});

function consultaCep() {
    let campo = document.querySelector("#cep");
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/" + campo.value + "/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function() {
        let objetoCEP = JSON.parse(requisicao.response);
        document.querySelector("#endereco").value = objetoCEP.logradouro;
        document.querySelector("#bairro").value = objetoCEP.bairro;
        document.querySelector("#cidade").value = objetoCEP.localidade;
        document.querySelector("#estado").value = objetoCEP.uf;
    }
}
