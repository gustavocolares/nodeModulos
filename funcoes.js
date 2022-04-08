function calculaIdade(anoNasc) {
    return 2022 - anoNasc;
}

module.exports.calculaIdade = calculaIdade;

function calculaImc(peso, altura) {
    return (peso / altura**2).toFixed(2);
}

module.exports.calculaImc = calculaImc;