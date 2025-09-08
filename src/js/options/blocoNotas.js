const local_Notas = document.getElementById('local_notas');
const bloco_Texto = document.getElementById('texto_Bloco');

let notas = []; 
let notaAtual = -1; 

function renderizar_Abas() {
    local_Notas.innerHTML = '';

    notas.forEach((note, index) => {
        const aba = document.createElement('div'); 
        aba.className = 'notas_Individuais' + (index === notaAtual ? ' ativa' : ''); 
        
        const textoAba = document.createElement('p'); 
        textoAba.className = 'texto_Aba';
        textoAba.textContent = 'Nota ' + (index + 1);
        aba.onclick = () => escolherNota(index); 
        
        const botao_excluir = document.createElement('span'); 
        botao_excluir.className = 'excluir';
        botao_excluir.textContent = 'x';
        botao_excluir.onclick = (p) => { 
            p.stopPropagation();
            deletarNota(index);
        }

        aba.appendChild(textoAba);
        aba.appendChild(botao_excluir);
        local_Notas.appendChild(aba);

    });
}

function escolherNota(index){
    if(notaAtual !== -1) {
        notas[notaAtual].content = bloco_Texto.value;
    }
    notaAtual = index;
    bloco_Texto.value = notas[notaAtual].content;
    renderizar_Abas();
}

function adicionarNota() {
    if(notas.length === 0){
        bloco_Texto.style.display = 'block';
    }
    if(notaAtual !== -1){
        notas[notaAtual].content = bloco_Texto.value;
    }
    if(notas.length < 5){
        notas.push({ content: ''});
        escolherNota(notas.length - 1);
    }else{
        alert("Pode no máximo 5 notas!");
    }
    
}

function deletarNota(index) {
    notas.splice(index, 1); 
    if(notas.length === 0){
        notaAtual = -1;
        bloco_Texto.value = ``;
        bloco_Texto.style.display = 'none';
        console.log("era pra ir")
    }else{
        notaAtual = Math.min(index, notas.length - 1);
        bloco_Texto.value = notas[notaAtual].content;
    }
    renderizar_Abas();
    
}

adicionarNota();