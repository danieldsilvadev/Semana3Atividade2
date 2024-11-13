const estudantes = [
  { nome: "Alice", notas: [100, 60, 92] },
  { nome: "João", notas: [75, 30, 85] },
  { nome: "Charles", notas: [90, 95, 85] },
  { nome: "Paulo", notas: [100, 100, 100] },
]; //cria uma lista com 4 objetos

const estudantesMedias = estudantes.map((estudante) => {
  const total = estudante.notas.reduce((soma, nota) => soma + nota); //reduce soma a nota dos estudantes
  let { nome } = estudante; //usando desestruturação armazena o o valor de nome a variavel {nome}
  return { nome, media: total / estudante.notas.length };//retorna um objeto com nome, calcula e ja armazena a media.
});

const melhoresMedias = estudantesMedias.filter((student) => student.media > 90);//filtra os alunos com media maiores que 90

console.log(melhoresMedias);
