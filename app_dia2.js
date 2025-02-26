alert("Ola!!")

let nome = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você esta estudando?');

alert(`Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagem}!`);



let opcional = prompt('Você gosta de estudar Python? Responda 1 para Sim e 2 para Não')

if (opcional == 1) {
    alert('Muito bom! Continue estudando e voce tera muito sucesso');
} else {
    alert('Ahh que pena ... ja tentou aprender outras linguagens')
}