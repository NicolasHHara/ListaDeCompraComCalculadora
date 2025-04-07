// Variáveis de referência
let btnComprar = document.getElementById("btnComprar");
let cestaContainer = document.getElementById("container2");  // Onde os itens do carrinho serão exibidos
let cesta = []; // Array para armazenar os produtos na cesta

function addCesta(nome, preco){
    // Adicionar produto à cesta
    cesta.push({ nome, preco });

    // Atualizar a visualização da cesta
    atualizarCesta();
}

function atualizarCesta(){
    const cestaContainer = document.getElementById('cesta');
    cestaContainer.innerHTML = ""; // Limpa a cesta antes de atualizar

    // Se a cesta estiver vazia, mostrar uma mensagem
    if (cesta.length === 0) {
        cestaContainer.innerHTML = "<p>Cesta vazia. Adicione produtos!</p>";
    } else {
        // Adicionar os produtos da cesta
        cesta.forEach((item, index) => {
            cestaContainer.innerHTML += `
                <div class="cesta-item">
                    <h5>${item.nome} - ${item.preco}</h5>
                </div>
            `;
        });
    }
}