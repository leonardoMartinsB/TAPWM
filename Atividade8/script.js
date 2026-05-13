/**
 * Lógica reformulada para a Atividade 8
 */

// Elementos do DOM
const inputEx1 = document.getElementById('ex1-input');
const btnEx1 = document.getElementById('ex1-btn');
const outputEx1 = document.getElementById('ex1-output');

const inputEx2 = document.getElementById('ex2-input');
const btnEx2 = document.getElementById('ex2-btn');
const outputEx2 = document.getElementById('ex2-output');

/**
 * Função utilitária para exibir resultados
 */
const showResult = (element, message, isError = false) => {
    element.innerHTML = message;
    element.classList.remove('hidden');
    if (isError) {
        element.classList.add('error');
    } else {
        element.classList.remove('error');
    }
};

/**
 * EXERCÍCIO 1 - Cálculos de Soma e Quadrados
 * Nova abordagem utilizando Destructuring e Template Literals.
 */
const processarNumeros = (arrayDeNumeros) => {
    const [num1, num2, num3] = arrayDeNumeros;
    const soma = num1 + num2 + num3;
    const quad1 = Math.pow(num1, 2);
    const quad2 = num2 ** 2; // Sintaxe alternativa para potência

    return `
        <strong>Resultados da Análise:</strong><br><br>
        ✨ A soma total é: <strong>${soma}</strong><br>
        ✨ O quadrado de ${num1} é: <strong>${quad1}</strong><br>
        ✨ O quadrado de ${num2} é: <strong>${quad2}</strong>
    `;
};

btnEx1.addEventListener('click', () => {
    const rawValue = inputEx1.value;
    
    // Filtra e converte a string de entrada para um array de números
    const parsedNumbers = rawValue
        .split(',')
        .map(item => Number(item.trim()))
        .filter(item => !isNaN(item) && item !== 0 || rawValue.includes('0'));

    if (parsedNumbers.length !== 3 || rawValue.trim() === "") {
        showResult(outputEx1, "⚠️ Erro: Informe exatamente 3 números válidos separados por vírgula.", true);
        return;
    }

    const resultadoHTML = processarNumeros(parsedNumbers);
    showResult(outputEx1, resultadoHTML);
});


/**
 * EXERCÍCIO 2 - Gerador de Anagramas Únicos
 * Nova abordagem utilizando o Algoritmo de Fisher-Yates Moderno e recursão limitada.
 */
const embaralharArray = (array) => {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
};

const gerarAnagramas = (letras, quantidadeDesejada = 10) => {
    const resultados = new Set();
    let tentativas = 0;
    const maxTentativas = 2000; // Evita loop infinito caso haja muitas letras repetidas

    while (resultados.size < quantidadeDesejada && tentativas < maxTentativas) {
        const anagrama = embaralharArray(letras).join('');
        resultados.add(anagrama);
        tentativas++;
    }

    return Array.from(resultados);
};

btnEx2.addEventListener('click', () => {
    const rawValue = inputEx2.value;
    
    // Extrai letras e remove espaços, aceita apenas caracteres alfabéticos
    const chars = rawValue
        .split(',')
        .map(char => char.trim().toUpperCase())
        .filter(char => char.length === 1 && /[A-ZÀ-Ú]/.test(char));

    if (chars.length !== 5) {
        showResult(outputEx2, "⚠️ Erro: Informe exatamente 5 letras válidas separadas por vírgula.", true);
        return;
    }

    const anagramas = gerarAnagramas(chars, 10);
    
    let htmlContent = `<strong>${anagramas.length} Anagramas Gerados:</strong><br><br>`;
    htmlContent += `<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">`;
    
    anagramas.forEach(palavra => {
        htmlContent += `<span style="background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 6px; letter-spacing: 2px;">${palavra}</span>`;
    });
    
    htmlContent += `</div>`;

    showResult(outputEx2, htmlContent);
});
