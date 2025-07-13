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

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    const statusDiv = document.getElementById('newsletter-status');
    if (email.trim() === '') {
        statusDiv.textContent = 'Por favor, insira um email.';
        statusDiv.style.color = 'red';
    } else {
        statusDiv.textContent = 'Inscrição realizada com sucesso!';
        statusDiv.style.color = 'green';
    }
});

function enviarSugestao() {
    const texto = document.getElementById('sugestao-texto').value;
    const statusDiv = document.getElementById('sugestoes-status');
    if (texto.trim() === '') {
        statusDiv.textContent = 'Por favor, escreva uma sugestão.';
        statusDiv.style.color = 'red';
    } else {
        statusDiv.textContent = 'Sugestão enviada! Obrigado!';
        statusDiv.style.color = 'green';
        document.getElementById('sugestao-texto').value = '';
    }
}
