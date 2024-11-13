const funcionarios = [
  { nome: "João", salario: 30000, departamento: "TI" },
  { nome: "Janete", salario: 70000, departamento: "RH" },
  { nome: "Sofia", salario: 100000, departamento: "RH" },
];//cria uma lista de funcionarios com 3 objetos

const funcionariosPorDepartamento = funcionarios.reduce(
  (acumulador, funcionario) => {
    const departamento = funcionario.departamento;//armazena o departamento de cada usuario
    if (!acumulador[departamento]) {//separa os objetos com departamento diferente
      acumulador[departamento] = [];//cria uma lista com o nome do departamento
    }
    acumulador[departamento].push(funcionario);//adiciona o funcionario ao departamento especifico
    return acumulador;//retorna o acumulador
  },
  {}
);

const mediasSalarioPorDepartamento = Object.keys(//object keys cria uma lista com as chave de funcionariosPorDepartamento
  funcionariosPorDepartamento
).map((departamento) => {
  const total = funcionariosPorDepartamento[departamento].reduce(
    (acumulador, funcionario) => acumulador + funcionario.salario,
    0
  ); //armazena o total do salario dos funcionarios por departamento
  return {
    departamento: departamento,
    media: total / funcionariosPorDepartamento[departamento].length,
  };//retorna um objeto com o departamento e a media dos salarios
});

const maioresPagamentos = mediasSalarioPorDepartamento.filter(
  (departamento) => departamento.media > 65000
);//filtra o departamento com maior media salarial

console.log(funcionariosPorDepartamento);
console.log(mediasSalarioPorDepartamento);
console.log(maioresPagamentos);

