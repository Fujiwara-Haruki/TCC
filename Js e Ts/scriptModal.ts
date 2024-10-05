let modal: HTMLElement = document.getElementById("modal");
let fechar: HTMLElement = document.getElementById("fecharModal");
let imagemGrande = document.getElementById("imgModal") as HTMLImageElement;
let ultimaImagem: HTMLImageElement;

function abrirModal(img){
    imagemGrande.src = ultimaImagem.src;
    modal.style.display = "flex";
    fechar.focus();
    ultimaImagem = img;
}

function fecharModal(){
    modal.style.display = "none";

    if(ultimaImagem){
        ultimaImagem.focus();
    }
}

