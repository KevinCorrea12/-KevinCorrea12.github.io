function calcular(operacao) {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }

    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                alert("Não é possível dividir por zero.");
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById('resultado').textContent = resultado;
}

function limpar() {
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('resultado').textContent = '0';
}
