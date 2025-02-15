
let amigos = []

function adicionarAmigo(){
    //acessar valor do campo de entrada
    const nomes= document.getElementById("amigo").value;

    //Verifica se o nome está vazio
    if (nomes.trim() === "") {
        alert("Por favor, insira um nome");
    }//verifica se contém números 
    else if (/\d/.test(nomes)){
        alert("O nome não pode conter números");
    } 
    else {
        //adiciona o nome na lista
        amigos.push(nomes);
        console.log(amigos); //verifica no console
        document.getElementById("amigo").value = "";//limpa o campo de entrada
    }
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i =0; i < amigos.length; i++){
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}


function sortearAmigo(){
    if (amigos.length === 0){
        alert("Não há amigos para sortear!");
        return;
    }

    const indiceAleatorio= Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}