function gerarResumo() {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const produto = document.getElementById("produto").value.trim();
    const valor = document.getElementById("valor").value.trim();
    const data = document.getElementById("data").value.trim();

    /*FORMATA A DATA PARA O MODELO DIA/MES/ANO*/
    const [ano, mes, dia] = data.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;
    /*FORMATA A DATA PARA O MODELO DIA/MES/ANO*/

    const espacoResumo = `Olá, Sr(a). ${nome}, tudo bem? Estou entrando em contato para confirmar a sua compra do produto ${produto} no valor de R$ ${valor}, realizada no dia ${dataFormatada}. Gostaria de agradecer pela preferência e informar que está tudo certo com a compra. Caso tenha alguma dúvida ou precise de suporte, estamos à disposição para ajudar no que for necessário.`;
    document.getElementById("textoResumo").innerHTML = espacoResumo;
    document.getElementById("caixa").style.display = "none";
    document.getElementById("resumo_Pronto").style.display = "block";
}

function fazerOutroResumo() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("produto").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("data").value = "";
    document.getElementById("resumo_Pronto").style.display = "none";
    document.getElementById("caixa").style.display = "flex";
}

// ...existing code...

function atualizarStatusResumo() {
    const campos = [
        { id: 'nome', statusId: 'status-nome' },
        { id: 'sobrenome', statusId: 'status-sobrenome' },
        { id: 'produto', statusId: 'status-produto' },
        { id: 'valor', statusId: 'status-valor' },
        { id: 'data', statusId: 'status-data' }
    ];
    let tudoPreenchido = true;
    campos.forEach(campo => {
        const valor = document.getElementById(campo.id).value.trim();
        const status = document.getElementById(campo.statusId);
        if (valor) {
            status.classList.add('preenchido');
            status.classList.remove('vazio');
        } else {
            status.classList.add('vazio');
            status.classList.remove('preenchido');
            tudoPreenchido = false;
        }
    });
    document.getElementById('btn-gerar-resumo').disabled = !tudoPreenchido;
}

// Adiciona eventos para todos os inputs
['nome', 'sobrenome', 'produto', 'valor', 'data'].forEach(id => {
    document.getElementById(id).addEventListener('input', atualizarStatusResumo);
});

// Inicializa os quadrados ao carregar
atualizarStatusResumo();

// ...existing code...