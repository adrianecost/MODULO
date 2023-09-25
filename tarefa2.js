import { calcularMediaEVerificarAprovacao } from "./modules.js";

const notasDoAluno = [5, 10, 6];
const mediaMinima = 7.0;

const resultado = calcularMediaEVerificarAprovacao(notasDoAluno, mediaMinima);
console.log(`Resultado da aprovação: ${resultado}`);
