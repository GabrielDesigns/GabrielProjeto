function lerClientes() {
    let requisicao = new XMLHttpRequest();
    let url = "https://etec.fernandograciano.com.br/listarclientes.php";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function() {
        let listaClientes = document.querySelector("#lista-clientes");
        let dados = JSON.parse(this.response);
        dados.forEach(function(cliente) {
            let item = document.createElement("li");
            item.textContent = cliente.nome + " - " + cliente.celular;
            listaClientes.appendChild(item);
        });
    }
}
