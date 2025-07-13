const lousa = document.getElementById('lousa');
const lousaCtx2d = lousa.getContext('2d'); 
const corOpcao = document.getElementById('cor')
const espessuraOpcao = document.getElementById('espessura');
const apagarOpcao = document.getElementById('apagar');

let desenhando = false;

lousa.addEventListener('mousedown', (e) => {    
    desenhando = true;
    lousaCtx2d.beginPath(); 
    lousaCtx2d.moveTo(e.offsetX, e.offsetY);
});

lousa.addEventListener('mousemove', (e) => {
    if(desenhando) {
        lousaCtx2d.lineTo(e.offsetX, e.offsetY); 
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






