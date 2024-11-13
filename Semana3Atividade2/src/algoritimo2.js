const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ]; //criando uma lista(letras) com 3 listas dentro que arrmazenam strings
   
   
   let resultado = letras
   .flat()//concatenando os elementos das submatriz de letras
   .reduce((objeto, numero) => {
    if (objeto[numero]) {//se o contador do indice se repetir
      objeto[numero] += 1; //soma a quantidade de vezes que aparece
    } else {//se não se repetir
      objeto[numero] = 1;//adiciona apenas o contador é 1
    }
    return objeto;
   }, {});//reduce remove as letras repitidas e mostra a quantidade de vezes que ela aparece e acumula em um objeto
   
console.log(resultado);

