### Variables y operaciones
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una variable y para qué sirve?
Una variable es un espacio de memoria que reservamos para guardar un valor.
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
La diferencia es que si declaramos solo indicamos que vamos a usar ese espacio, pero si inicializamos le asignamos un valor.
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
La diferencia es que si sumamos números se suman, pero si concatenamos strings se unen.
- ¿Cuál operador me permite sumar o concatenar?
El operador +
### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre = string
Apellido = string
Nombre de usuario en Platzi = string
Edad = number
Correo electrónico = string
Mayor de edad = boolean
Dinero ahorrado = number
Deudas = number
### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
```
let nombre = "Joaquin"
let apellido = "Bravo"
let nombreUsuarioPlatzi = "joaquinbravo"
let edad = 22
let correo = "joaquin@example.com"
let mayorDeEdad = true
let dineroAhorrado = 1000
let deudas = 500
```
### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
```
let nombreCompleto = nombre + " " + apellido
```
Dinero real (dinero ahorrado menos deudas)
```
let dineroReal = dineroAhorrado - deudas
```
### Funciones
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una función? 
Es un conjunto de instrucciones que nos permiten realizar acciones que se pueden repetir.
- ¿Cuándo me sirve usar una función en mi código? 
Cuando necesitamos realizar una acción que se puede repetir.
- ¿Cuál es la diferencia entre parámetros y argumentos de una función? 
Los parámetros son los valores que la función recibe para poder trabajar, y los argumentos son los valores que le pasamos a la función para que trabaje.
### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```
function saludo(completeName, nickname) {
  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

let name = "Juan David";
let lastname = "Castro Gallego";
let completeName = name + lastname;
let nickname = "juandc";

saludo (completeName, nickname)
```
### Condicionales
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un condicional? 
Es una estructura de control que nos permite realizar acciones dependiendo de una condición.
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
If, else if, else, switch y ternario.
- ¿Puedo combinar funciones y condicionales?
Si.
### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion = "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion = "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion = "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion = "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No tienes una suscripción");
}


### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
if (tipoDeSuscripcion = "Free") console.log("Solo puedes tomar los cursos gratis");
if (tipoDeSuscripcion = "Basic") console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
if (tipoDeSuscripcion = "Expert") console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
if (tipoDeSuscripcion = "ExpertPlus") console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

const tipoDeSuscripcion = "Basic";
const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}
function suscripcion(tipoDeSuscripcion){
    console.log(tiposDeSuscripciones[tipoDeSuscripcion]);
}

### Ciclos
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un ciclo?
Es una estructura de control que nos permite repetir una acción varias veces.
- ¿Qué tipos de ciclos existen en JavaScript?
For, while, do while.
- ¿Qué es un ciclo infinito y por qué es un problema?
Es un ciclo que no tiene una condición de parada, por lo que se ejecuta indefinidamente y puede perjudicar el rendimiento de la aplicación.
- ¿Puedo mezclar ciclos y condicionales?
Si.
### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

while (i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}
### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

let respuesta = prompt("Cuánto es 2 + 2?");
if (respuesta == 4){
    console.log("Felicitaciones, la respuesta es correcta");
} else {
    console.log("La respuesta es incorrecta, intenta nuevamente");
}

### Listas
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es un array?
Es una estructura de datos que nos permite almacenar varios valores en una sola variable.
- ¿Qué es un objeto?
Es una estructura de datos que nos permite almacenar varios valores en una sola variable, pero con la diferencia de que cada valor tiene un nombre asociado.
- ¿Cuándo es mejor usar objetos o arrays?
Cuando necesitamos almacenar valores con nombres asociados, es mejor usar objetos. En caso contrario, es mejor usar arrays.
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si.
### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function imprimirPrimerElemento(array){
    console.log(array[0]);
}
### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimirElementos(array){
    array.forEach(function(elemento){
        console.log(elemento);
    });
}
### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function imprimirElementos(objeto){
    for (const propiedad in objeto){
        console.log(objeto[propiedad]);
    }
}