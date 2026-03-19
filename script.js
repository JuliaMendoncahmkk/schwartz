function carregarCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function irPara(id) {
  const elemento = document.getElementById(id);
  elemento.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
} 

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".add-carrinho");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const nome = botao.getAttribute("data-nome");
      const preco = parseFloat(botao.getAttribute("data-preco"));

      let carrinho = carregarCarrinho();
      carrinho.push({ nome, preco });
      salvarCarrinho(carrinho);

      alert(`${nome} adicionado ao carrinho!`);
    });
  });
});