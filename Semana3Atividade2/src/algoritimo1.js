const tamanho = prompt('Digite o tamanho da lista de números'); //Pega o valor e armazena na variavel tamanho
const value = parseInt(tamanho)
const lista = new Array(value).fill(null); //new array cria uma nova lista com o tamaho armazenado anteriormente e fill preenche com null
lista
 .map((item, index) => index + 1).reduce((acumulador, item) => acumulador * item);


new Array(value)//cria um array com valor de tamanho
 .fill(null)//preenche o array com null
 .map((item, index) => index + 1)//conta a quantidade de indices
 .reduce((acumulador, item) => acumulador + item);//

 console.log(lista);
 
