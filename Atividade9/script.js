class IMCCalculator {
    constructor() {
        this.heightInput = document.getElementById('height-input');
        this.weightInput = document.getElementById('weight-input');
        this.btn = document.getElementById('calculate-btn');
        this.resultDisplay = document.getElementById('result-display');
        
        this.elements = {
            value: document.getElementById('imc-value'),
            category: document.getElementById('imc-category'),
            message: document.getElementById('imc-message'),
            circle: document.querySelector('.imc-circle'),
            marker: document.getElementById('scale-marker')
        };
        
        this.init();
    }

    init() {
        this.btn.addEventListener('click', () => this.calculate());
        
        // Permite calcular ao apertar Enter
        [this.heightInput, this.weightInput].forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.calculate();
            });
        });
    }

    calculate() {
        const h = parseFloat(this.heightInput.value);
        const w = parseFloat(this.weightInput.value);

        if (!h || !w || h <= 0 || w <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        const heightInMeters = h > 3 ? h / 100 : h; // Ajuste automático caso digite em cm (ex: 175)
        const imc = w / (heightInMeters ** 2);
        
        this.updateUI(imc);
    }

    getClassification(imc) {
        if (imc < 18.5) return { cat: 'Abaixo do Peso', color: 'var(--color-low)', msg: 'Você está abaixo do peso ideal.', pct: 12.5 };
        if (imc < 25) return { cat: 'Peso Normal', color: 'var(--color-normal)', msg: 'Excelente! Você está no peso ideal.', pct: 37.5 };
        if (imc < 30) return { cat: 'Sobrepeso', color: 'var(--color-high)', msg: 'Você está um pouco acima do peso.', pct: 62.5 };
        return { cat: 'Obesidade', color: 'var(--color-obese)', msg: 'Atenção, você está na faixa de obesidade.', pct: 87.5 };
    }

    updateUI(imc) {
        const data = this.getClassification(imc);
        
        this.elements.value.innerText = imc.toFixed(1);
        this.elements.category.innerText = data.cat;
        this.elements.category.style.color = data.color;
        this.elements.message.innerText = data.msg;
        
        this.elements.circle.style.borderColor = data.color;
        this.elements.circle.style.boxShadow = `0 0 30px ${data.color}40`;
        
        this.elements.marker.style.left = `calc(${data.pct}% - 2px)`;
        
        this.resultDisplay.setAttribute('data-status', 'filled');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new IMCCalculator();
});
