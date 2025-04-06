// Variáveis de referência
let btnComprar1 = document.getElementById("btnComprar1");
let btnComprar2 = document.getElementById("btnComprar2");
let cestaContainer = document.getElementById("container2");  // Onde os itens do carrinho serão exibidos
let cesta = [];

let produto1 = {
    nome: "Cassiano",
    imagem: "/ListaDeCompraComCalculadora/im1.jpeg",            //object
    preco: "1,99"
} 
let produto2 = { 
    nome: "Dudu",
    imagem: "/ListaDeCompraComCalculadora/img2.jpeg",            //object
    preco: "30"
}


function addCesta(produto) {
    addCesta = btnComprar1;
    cesta.push(produto);
    atualizarCesta1();
}
function atualizarCesta1 (){
    console.log (produto2)
}


function addCesta(produto) {
    cesta.push(produto);
    atualizarCesta2();
}

function atualizarCesta2 (){
    console.log (produto2)
}