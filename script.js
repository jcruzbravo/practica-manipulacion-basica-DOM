const d = document;

const title = d.querySelector('h1');
const p = d.querySelector('p');
const paragraphClass = d.getElementsByClassName('.paragraph-class');
const paragraphId = d.getElementById('paragraph-id');
const input1 = d.getElementById('input-calcular1');
const input2 = d.getElementById('input-calcular2');

const form = d.getElementById('form');
const botonCalcular = d.getElementById('btn-calcular');
const pResultado = d.getElementById('resultado');


console.log({
  title,
  p,
  paragraphClass,
  paragraphId,
});

// Permite agregar código HTML en general, desde etiquetas hasta texto.
//title.innerHTML = "Coding is fun"; 
// Permite agregar unicamente texto. 
title.innerText = "Coffe is good for you"; 
// Acceder a los atributos de un elemento.
// title.getAttribute('class');
// title.setAttribute('class', 'header-title');

// Forma especifica de acceder a la clase de un elemento. Para agregar o eliminar clases.
title.classList.add('header-title');
title.classList.remove('header-title');
// Toggle nos permite agregar o eliminar una clase dependiendo si ya existe o no.
// title.classList.toggle ('header-title');
// Verificar si un elemento tiene una clase o no.
// title.classList.contains('header-title');

// Crear elementos HTML.

const img = d.createElement('img');
img.setAttribute('src', 'https://picsum.photos/200');

paragraphId.innerHTML = "";
paragraphId.appendChild(img);
// Eventos desde JS

form.addEventListener('submit', btnOnClick);

// Eventos desde HTML
function btnOnClick(event) {
  event.preventDefault();
  const resultado = parseInt(input1.value) + parseInt(input2.value);
  console.log(resultado)
  pResultado.innerText = `El resultado es: ${resultado}`;
}
