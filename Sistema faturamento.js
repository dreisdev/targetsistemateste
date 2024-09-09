const faturamentoDiario = [0, 1500, 2000, 0, 2300, 1800, 0, 2500, 2700, 0]; // Exemplo simplificado

const faturamentoValido = faturamentoDiario.filter((valor) => valor > 0);

const menorFaturamento = Math.min(...faturamentoValido);

const maiorFaturamento = Math.max(...faturamentoValido);

const somaFaturamento = faturamentoValido.reduce(
  (acc, valor) => acc + valor,
  0
);
const mediaAnual = somaFaturamento / faturamentoValido.length;

const diasAcimaDaMedia = faturamentoValido.filter(
  (valor) => valor > mediaAnual
).length;

console.log(`Menor valor de faturamento: ${menorFaturamento}`);
console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
console.log(
  `Número de dias com faturamento superior à média anual: ${diasAcimaDaMedia}`
);
