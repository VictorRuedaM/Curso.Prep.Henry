// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // let matriz = [];
   
  // Object.entries(objeto).forEach(function([key, value]) {
  //   matriz.push([key, value])
  // });
  
  
  // return matriz;

  let matrix = [];

  for(let obj in objeto){
    matrix.push([obj, objeto[obj]])
  }

  return matrix;

  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let suma = 0;
  let objeto = {};
  for(let i = 0; i < string.length; i++){
    
    for(let j = 0; j < string.length; j++){
      if(string[j] === string[i]){
        suma = suma + 1;
      }
    }

    objeto[string[i]] = suma;
    suma = 0;
  }

  
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayus = '';
  let minus = '';
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayus += s[i];
    }else if(s[i] === s[i].toLowerCase()){
      minus += s[i];
    }
  }
  s = mayus + minus;
  
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase ='';
  let espejo ='';
  let palabra = '';
  
  for(let i = str.length - 1; i >= 0; i--){
    frase += str[i];
  }
  espejo = frase.split(' ');

  for(let i = espejo.length - 1; i >= 0; i--){
    
    if(i !== 0){
      palabra += espejo[i] + ' ';
    }
    if(i === 0){
      
      palabra += espejo[i];
    }
  }
  
  return palabra;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num_cadena = numero.toString();
  let reves ='';
  for(let i = num_cadena.length - 1; i >= 0; i--){
    reves += num_cadena[i];
  }

  if(num_cadena === reves){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nueva_cadena = '';
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){
      continue;
    }
    nueva_cadena += cadena[i];

  }

  return nueva_cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var orden_array = arr.sort(function(elemento, next){
    return elemento.length - next.length
  })

  return orden_array;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo3 = [];
  for(let i = 0; i < arreglo1.length; i++){
    for(let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        arreglo3.push(arreglo1[i]);
      }
    }
  }

  return arreglo3;
}
// npm test JSX.test.js


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

