/**** Escreva o código abaixo 👇******/

function somar(a, b){
  let result = a + b;
  return result
};

function multiplicar(a, b){
  let result = a * b;
  return result
};

function subtrair(a, b){
  let result = a - b;
  return result
};

function dividir(a, b){
  let result = a / b;
  if(b === 0){
    throw "Erro: divisão por zero.";
  }
  else{
    return result
  }
  
};


function calcularMedia(nota1, nota2, nota3, nota4){
  let numerador = (nota1 + nota2 + nota3 + nota4)
  let result = dividir(numerador, 4);
  return result
};

function elevarPotencia(a, b){
  let result = Math.pow(a, b);
  return result
};

function calcularAreaRetangulo(a, b){
  let result = multiplicar(a, b);
  return result
};

function verificarParOuImpar(numero){
  if(numero%2 === 0){
    return "par"
  }
  else{
    return "ímpar"
  }
};

function calcularRaizQuadrada(numero){
  let result = Math.sqrt(numero);
  return result
};

function calcularHipotenusa(cateto1, cateto2){
  let result = Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
  return result
}


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
