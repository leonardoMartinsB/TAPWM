const fs = require('fs');

function Parte1() {
    for (let i = 1; i <= 10; i++) {
        console.log("primeira parte: " + i);
    }

    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) {
            return;
        }

        const registros = data.split('\n');

        registros.forEach((registro, index) => {
            const linhaLimpa = registro.trim();
            if (linhaLimpa.length > 0) {
                console.log("segunda parte: " + index + " - " + linhaLimpa);
            }
        });
    });

    setTimeout(Parte1, 2000);
}

Parte1();