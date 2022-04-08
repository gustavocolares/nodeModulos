const { calculaIdade, calculaImc } = require('./funcoes');

const idade = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

console.log(calculaIdade(idade));
console.log(calculaImc(peso, altura));
