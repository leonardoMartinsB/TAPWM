function buscarMaior(a, b, c) {
    return Math.max(a, b, c);
}

function ordenar(a, b, c) {
    return [a, b, c].sort((x, y) => x - y).join(", ");
}

function verificarPalindromo(texto) {
    let limpo = texto.toLowerCase().replace(/\s+/g, '');
    let reverso = limpo.split('').reverse().join('');
    return limpo === reverso ? "É palíndromo" : "Não é palíndromo";
}

function eSubconjunto(t1, t2) {
    if (!t1 || !t2) return "erro";
    return t1.includes(t2) ? "é um subconjunto" : "não é um subconjunto";
}

function pegarDia(dataInput) {
    if (!dataInput) return "";
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let data = new Date(dataInput + "T12:00:00");
    return dias[data.getDay()];
}

function uiMaior() {
    const n1 = Number(document.getElementById('n1_1').value);
    const n2 = Number(document.getElementById('n1_2').value);
    const n3 = Number(document.getElementById('n1_3').value);
    document.getElementById('res1').innerText = buscarMaior(n1, n2, n3);
}

function uiOrdem() {
    const n1 = Number(document.getElementById('n2_1').value);
    const n2 = Number(document.getElementById('n2_2').value);
    const n3 = Number(document.getElementById('n2_3').value);
    document.getElementById('res2').innerText = ordenar(n1, n2, n3);
}

function uiPalindromo() {
    const txt = document.getElementById('str3').value;
    document.getElementById('res3').innerText = verificarPalindromo(txt);
}

function uiSub() {
    const t1 = document.getElementById('p4_1').value;
    const t2 = document.getElementById('p4_2').value;
    document.getElementById('res4').innerText = eSubconjunto(t1, t2);
}

function uiDia() {
    const dt = document.getElementById('data5').value;
    document.getElementById('res5').innerText = pegarDia(dt);
}