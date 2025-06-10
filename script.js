let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  total += preco;
  document.getElementById('quantidade').innerText = carrinho.length;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('itens-carrinho');
  lista.innerHTML = "";
  carrinho.forEach((item, index) => {
    let li = document.createElement('li');
    li.innerText = `${item.produto} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });
  document.getElementById('total').innerText = total.toFixed(2);
}

function abrirCarrinho() {
  document.getElementById('carrinho').style.display = 'block';
}

function fecharCarrinho() {
  document.getElementById('carrinho').style.display = 'none';
}

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  this.reset();
});