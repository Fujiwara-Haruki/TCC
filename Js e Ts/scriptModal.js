let modal = document.getElementById("modal");
let fechar = document.getElementById("fecharModal");
let imagemGrande = document.getElementById("imgModal");
let ultimaImagem;
function abrirModal(img) {
    imagemGrande.src = img.src;
    imagemGrande.alt = img.alt;
    modal.style.display = "flex";
    fechar.focus();
    ultimaImagem = img;
}
function fecharModal() {
    modal.style.display = "none";
    if (ultimaImagem) {
        ultimaImagem.focus();
    }
}

function verificarTab(event, img){
    if(event.key === "Enter"){
        if(modal.style.display == "none"){
            abrirModal(img);
        } else{
            fecharModal();
        }
    }
}

window.addEventListener("click", function(event){
    if(event.target === modal){ //clicar fora da imagem no modal
        fecharModal();
    }
})