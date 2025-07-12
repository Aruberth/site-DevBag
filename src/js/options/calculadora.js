function adicionar_Valor (valor) {
    document.getElementById('visor_calculadora').value += valor;
}

function apagar_Visor () {
    document.getElementById('visor_calculadora').value = '';
}

function somar () {
    const Parser = window.exprEval.Parser;
    const parser = new Parser();

    const expressao = document.getElementById('visor_calculadora').value;

    try 
    {
        const resultT = parser.evaluate(expressao);
        document.getElementById('visor_calculadora').value = resultT;
    } catch (erro) {
        document.getElementById('visor_calculadora').value = 'Erro';
    }
}
