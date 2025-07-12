const lousa = document.getElementById('lousa');
const lousaCtx2d = lousa.getContext('2d'); //pega o contexto 2D da lousa.
const corOpcao = document.getElementById('cor')
const espessuraOpcao = document.getElementById('espessura');
const apagarOpcao = document.getElementById('apagar');

let desenhando = false; //Por padrão, a variavel booleana de estar desenhando é falsa.

lousa.addEventListener('mousedown', (e) => {     //..........pedir pro gpt depois explicar dps como funciona essa estrutura do =>
    desenhando = true;
    lousaCtx2d.beginPath(); //Iniciado um novo traço na lousa.
    lousaCtx2d.moveTo(e.offsetX, e.offsetY);
});

lousa.addEventListener('mousemove', (e) => {
    if(desenhando) {
        lousaCtx2d.lineTo(e.offsetX, e.offsetY); //Vai adicionando linha por onde mousa vai passando.
        lousaCtx2d.strokeStyle = corOpcao.value;
        lousaCtx2d.lineWidth = espessuraOpcao.value;
        lousaCtx2d.stroke();
        lousaCtx2d.lineCap = 'round'; //Define que a forma que vai ficar embaixo do ponteiro é redonda.
        lousaCtx2d.lineJoin = 'round'; //Define que a forma que vai ser desenhada é redonda.
    }
});

lousa.addEventListener('mouseup', () => {
    desenhando = false;
});

lousa.addEventListener('mouseleave', () => {
    desenhando = false;
});

apagarOpcao.addEventListener('click', () => {
    lousaCtx2d.clearRect(0, 0, lousa.width, lousa.height);
})






