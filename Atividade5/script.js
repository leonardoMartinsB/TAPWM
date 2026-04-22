   const dados = [];
    const btn = document.getElementById('btnEnviar');

    btn.addEventListener('click', () => {
        if (dados.length >= 45) return alert("Limite de 45 pessoas atingido!");

        const idade = parseInt(document.getElementById('idade').value);
        const sexo = document.getElementById('sexo').value;
        const opiniao = parseInt(document.getElementById('opiniao').value);

        if (!idade || idade <= 0) return alert("Coloca uma idade real aí!");

        dados.push({ idade, sexo, opiniao });

        const total = dados.length;
        const somaIdade = dados.reduce((acc, p) => acc + p.idade, 0);
        const idades = dados.map(p => p.idade);
        
        const pessimos = dados.filter(p => p.opiniao === 1).length;
        const otimosBons = dados.filter(p => p.opiniao >= 3).length;
        
        const homens = dados.filter(p => p.sexo === 'Masculino').length;
        const mulheres = dados.filter(p => p.sexo === 'Feminino').length;
        const outros = dados.filter(p => p.sexo === 'Outros').length;

        document.getElementById('statsArea').style.display = 'block';
        document.getElementById('count').innerText = total;
        document.getElementById('mIdade').innerText = (somaIdade / total).toFixed(1);
        document.getElementById('mVelho').innerText = Math.max(...idades);
        document.getElementById('mNovo').innerText = Math.min(...idades);
        document.getElementById('qPessimo').innerText = pessimos;
        document.getElementById('pOtimoBom').innerText = ((otimosBons / total) * 100).toFixed(1) + "%";
        document.getElementById('qH').innerText = homens;
        document.getElementById('qM').innerText = mulheres;
        document.getElementById('qO').innerText = outros;

        document.getElementById('idade').value = '';
        document.getElementById('idade').focus();
    });