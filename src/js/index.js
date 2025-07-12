function alternarAbas (a) {
    const abaAtiva = document.querySelectorAll('.tela');
    abaAtiva.forEach(abaAberta => abaAberta.classList.remove('active'));
    document.getElementById(a).classList.add('active');
}
