function mostrarPopUp() {
    document.getElementById("popup").classList.add("ativo");
}

function fecharPopUp() {
    document.getElementById("popup").classList.remove("ativo");
}

function mostrarConteudoPopUp(id){

    document.querySelectorAll('.popup_Display').forEach(function(popup) {
        popup.style.display = 'none';
    });

    document.getElementById(id).style.display = 'flex';
}


function fecharConteudoPopUp() {

    document.querySelectorAll('.popup_Display').forEach(function(popup) {
        popup.style.display = 'none';
    });

}

