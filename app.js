//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];

function adicionarNome() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    console.log("Nome digitado:", nome); // Teste para ver se está capturando o nome corretamente

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    nomeInput.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    
    console.log("Lista antes da atualização:", amigos); // Verifica os nomes no array

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }

    console.log("Lista atualizada com sucesso!");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `Amigo Secreto: <strong>${amigoSorteado}</strong>`;
}

// Atualizar lista inicial com nomes já existentes
atualizarLista();

