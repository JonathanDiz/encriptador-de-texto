const textarea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const botonCopiar = document.querySelector('.copiar');

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
  const textoEncriptado = encriptar(textarea.value);
  mensaje.value = textoEncriptado;
  textarea.value = '';
  mensaje.focus();
}

function btnDesencriptar(){
  const textoDesencriptado = desencriptar(mensaje.value);
  mensaje.value = textoDesencriptado;
  mensaje.focus();
}

function encriptar(stringEncriptada){
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function desencriptar(stringDesencriptada){
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

// Función para copiar el texto al portapapeles utilizando la API moderna
function copiarAlPortapapeles() {
  navigator.clipboard.writeText(mensaje.value)
    .then(() => {
      alert('Texto copiado al portapapeles'); // Opcional
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
}

// Asignación del evento de clic al botón "copiar"
botonCopiar.addEventListener('click', copiarAlPortapapeles);
