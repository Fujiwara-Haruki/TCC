// Pegando o modal
var modal = document.getElementById("modalImagem");
var imgModal = document.getElementById("imgModal");
var fecharModal = document.getElementById("fecharModal");

// Seleciona todas as imagens pequenas
var imagens = document.querySelectorAll(".acervo-imagem");

// Adiciona evento de clique a cada imagem
imagens.forEach(function(img) {
    img.onclick = function() {
        // Muda o src da imagem no modal para o src da imagem clicada
        imgModal.src = img.getAttribute("data-src") || img.src;
        // Exibe o modal
        modal.style.display = "flex";
    }
});

// Quando clicar no botão de fechar (X), esconder o modal
fecharModal.onclick = function() {
    modal.style.display = "none";
};

// Quando clicar fora da imagem no modal, também fechar
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
