const local_Notas = document.getElementById('local_notas');
const bloco_Texto = document.getElementById('texto_Bloco');

let notas = []; //Para armazenar as notas que forem aparecendo.
let notaAtual = -1; //Indicar nota atualmente selecionada.

function renderizar_Abas() {
    local_Notas.innerHTML = '';

    notas.forEach((note, index) => {
        const aba = document.createElement('div'); // Cria nova aba.
        aba.className = 'notas_Individuais' + (index === notaAtual ? ' ativa' : ''); //Adiciona uma classe de ativa caso a aba esteja ativa.
        
        const textoAba = document.createElement('p'); // Cria texto da aba.
        textoAba.className = 'texto_Aba';//Adiciona uma classe de ativa caso a aba esteja ativa.
        textoAba.textContent = 'Nota ' + (index + 1); //Insere um nome no texto da aba.
        aba.onclick = () => escolherNota(index); //Ao clicar naquela aba (mais especificamente no texto dentro dela, usa a função informada)
        
        const botao_excluir = document.createElement('span'); // Cria botão de excluir aba entro dela.
        botao_excluir.className = 'excluir';
        botao_excluir.textContent = 'x';
        botao_excluir.onclick = (p) => { //!!! pedir explicacao do funcionamento pro gpt
            p.stopPropagation(); //Impede que ao clicar no x também clique em outras coisas, como própria aba.
            deletarNota(index);
        }

        aba.appendChild(textoAba);
        aba.appendChild(botao_excluir);
        local_Notas.appendChild(aba);

    });
}

function escolherNota(index){ //!!! pedir explicacao pro gpt
    if(notaAtual !== -1) {
        notas[notaAtual].content = bloco_Texto.value;
    }
    notaAtual = index;
    bloco_Texto.value = notas[notaAtual].content;
    renderizar_Abas();
}

function adicionarNota() { //!!! pedir explicacao pro gpt
    if(notaAtual !== -1){
        notas[notaAtual].content = bloco_Texto.value;
    }
    if(notas.length < 5){
        notas.push({ content: ''});
        escolherNota(notas.length - 1); //!!!ver pq isso
    }else{
        alert("Pode no máximo 5 notas!");
    }
    
}

function deletarNota(index) {
    notas.splice(index, 1); //Serve pra deletar um valor do array
    if(notas.length === 0){
        notaAtual = -1;
        bloco_Texto.value = ``;
    }else{
        notaAtual = Math.min(index, notas.length - 1);
        bloco_Texto.value = notas[notaAtual].content;
    }
    renderizar_Abas();
}

adicionarNota();