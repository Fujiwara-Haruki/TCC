// Pegando o modal e elementos necessários
var modal = document.getElementById("modalImagem");
var imgModal = document.getElementById("imgModal");
var fecharModal = document.getElementById("fecharModal");
var lastFocusedImage;

// Função para abrir o modal
function abrirModal(img) {
    imgModal.src = img.src; // Muda o src da imagem no modal
    modal.style.display = "flex"; // Exibe o modal
    fecharModal.focus(); // Move o foco para o botão de fechar do modal
    lastFocusedImage = img; // Armazena a última imagem que foi clicada
}

// Função para fechar o modal
function fecharModalFunc() {
    modal.style.display = "none"; // Esconde o modal
    if (lastFocusedImage) {
        lastFocusedImage.focus(); // Retorna o foco para a última imagem que foi clicada
    }
}

// Adiciona evento de clique a cada imagem
var imagens = document.querySelectorAll(".acervo-imagem");


imagens.forEach(function(img) {
    img.addEventListener("click", function() {
        abrirModal(this); // Passa a imagem clicada
    });

    // Permite abrir o modal com a tecla Enter
    img.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && modal.style.display ==="none"){
            e.preventDefault();
            abrirModal(this);
        }
    });
});

// Quando clicar no botão de fechar (X), fecha o modal
fecharModal.addEventListener("click", fecharModalFunc);

fecharModal.addEventListener("keypress", function(e){
    if(e.key ==="Enter" && modal.style.display ==="flex"){
        fecharModalFunc();
    }
})

// Fechar o modal ao pressionar a tecla Esc
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        fecharModalFunc();
    }
});

// Fechar o modal ao clicar fora da imagem
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        fecharModalFunc();
    }
});

// Para garantir que as imagens sejam acessíveis, adicione o evento keydown
imagens.forEach(function(img) {
    img.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
            abrirModal(this.src);
            e.preventDefault(); // Evita o comportamento padrão da tecla
        }
    });
});