const firstArgument = document.getElementById('firstArgument');
const secondArgument = document.getElementById('secondArgument');

const result = document.getElementById('result-value');

calculateTabuada = () => {
    // Não utilizaremos mais estas variáveis durante o código
    let firstNumber = this.firstArgument;
    let secondNumber = this.secondArgument;

    // Esses serão os valores utilizados durante o código
    let valueCalculated = Number(firstNumber.value);
    let valueNumber = Number(secondNumber.value);

    let variableNumber = 0;
    let resultNumber = '';

    // Segundo valor do input multiplicado pelo primeiro valor do input
    resultNumber = valueNumber * valueCalculated;

    if (!valueCalculated || !valueNumber) {
        window.alert('Nenhum valor foi inserido nos campos, preencha-os e tente novamente.')
    } else {
        result.style.display="block";
        result.innerHTML = `A tabuada do ${valueCalculated} sendo multiplicada ${valueNumber} vezes é: <br><br>`;

        do {
            resultNumber = variableNumber * valueCalculated;

            // Manipulação do conteúdo da div, inserindo o resultado em forma de texto.
            result.innerHTML += `${variableNumber} x ${valueCalculated} = ${resultNumber} <br>`
            variableNumber++; // Ou variableNumber = variableNumber + 1;
        } while(variableNumber <= valueNumber);
    }
}