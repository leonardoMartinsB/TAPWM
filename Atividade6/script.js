function verificarTriangulo() {
    const valA = document.getElementById('ladoA').value;
    const valB = document.getElementById('ladoB').value;
    const valC = document.getElementById('ladoC').value;
    const divResultado = document.getElementById('resultado');

    divResultado.className = 'resultado-box';

    if (valA.trim() === '' || valB.trim() === '' || valC.trim() === '' || 
        isNaN(valA) || isNaN(valB) || isNaN(valC)) {
        mostrarResultado("Por favor, insira apenas valores numéricos válidos.", "erro");
        return;
    }

    const a = parseFloat(valA);
    const b = parseFloat(valB);
    const c = parseFloat(valC);

    if (a <= 0 || b <= 0 || c <= 0) {
        mostrarResultado("Os lados devem ter valores maiores que zero.", "erro");
        return;
    }

    const regra1 = Math.abs(b - c) < a && a < (b + c);
    const regra2 = Math.abs(a - c) < b && b < (a + c);
    const regra3 = Math.abs(a - b) < c && c < (a + b);

    if (regra1 && regra2 && regra3) {
        let tipo = "";
        
        if (a === b && b === c) {
            tipo = "Equilátero";
        } else if (a === b || a === c || b === c) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }
        
        mostrarResultado(`Forma um triângulo!<br>Tipo: <strong>${tipo}</strong>`, "sucesso");
    } else {
        mostrarResultado("Os valores informados <strong>NÃO</strong> formam um triângulo.", "erro");
    }
}

function mostrarResultado(mensagem, classeTipo) {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = mensagem;
    divResultado.classList.remove('hidden');
    divResultado.classList.add(classeTipo);
}

document.getElementById('btnVerificar').addEventListener('click', verificarTriangulo);