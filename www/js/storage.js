function salvarLocal(chave, valor) {
    localStorage.setItem(chave, valor);
    localStorage.setItem("nome", "Jonatas");
}

function lerLocal() {
    console.log(localStorage.getItem("nome"));
    console.log(localStorage.getItem("id"));
}
