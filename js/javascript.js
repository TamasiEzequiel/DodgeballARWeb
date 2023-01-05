// ESPACIOS EN MEMORIA

var pepe;

// con emascritp6
let pepino;
const Penaldo = ""; // es una constante que se inicializa al momento de declararla


//----------------------HOSITING------> es el proceso de declarar una variable sin inicializarla para posterior darle valor. Ej:

var nom;

nom = "pepe";

console.log(nom)

// En funciones---> si mandamos a llamar una funcion previo a declaracion de variables q la componen, no va a funcionar, debe ser asi:

function llamar() {
    console.log("Hola " + nom);
}


// ---------------COERCION:Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
//Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
//Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

//implicita
var a = 4 + "7"; //regresa string "47"
var b = 4 * "7"; // regresa numero 28

// explicita
var aa = 20;
var c = String(aa);
console.log(c) // y sale un string con el valor de aa osea "20"

// ------------------FALSE AND TRUE----------------------------

//Ejemplos en los que Boolean devuelve Falso: (Si no hay valor siempre es false, incluso 0)
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0), incluso (-1...)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function () { }); //Cualquier función es verdadera también

//OPERADORES BOOLEANOS


/*
> mayor
< menor
<= mayor o igual a
=
==
=== super igual para compara tanto tipo como contenido
&& comparar este y este juntos
|| OR para comparar este o este es tal cosa
!variable para negra tal cosa
++ para aumentar en 1
-- para restar en uno
+= 5 para aumentar el numero que pongas
*/
var bool5 = 5;
var bool3 = 3;
bool5 > bool3;


// CONDICIONALES IF, ELSE, ELSEIF Y SWITCH

if (true) {// aca se debe poner algo verdadero, si es verdad se ejecuta el codigo entre {}
    console.log("hola, soy verdadero")
} else if (true) { // aca vuelve a comprobar otro si es verdadero
    console.log("soy verdadero 2")
} else { // si ninguno lo es aplica este 
    console.log("Ninguno es verdadero")
}

//Aplicando emascript6 

// El condicional --IF-- se reemplaza con un signo de pregunta (?) y el else con (:)

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No, no soy";


// SWITCH: Se pone un valor, y se recorre el switch y en donde sea verdadero se ejecuta el codigo dispuesto y finaliza el switch, si ninguno se cumple se aplica el default en donde se pone un codigo correspondiente a al valor falso

switch (numero) {
    case 1:
        console.log("codigo");
        break;
    case 8:
        console.log("codigo");
        break;
    case 345:
        console.log("codigo");
        break;
    default:
        console.log("ninguno es verdadero");
}


// ------------------------------ARRAYS-----------------------------------

//Son cadenas de datos que se encierran en []
var letras = ["a","b","c"];
// Las posiciones se cuentan desde el 0, entonces la letra "a" tiene posicion 0

//Q se puede hacer:

/*
letras[0]  -Ponemos la posicion del elemento q queres usar
letras.length   -Te dice la cantidad de datos q tiene el array
letras.push("d")  -Agregamos al final del array un dato ---> letras = ["a","b","c","d"];
letras.pop()  -Eliminamos el ultimo elmt del array ---> letras = ["a","b","c"];
letras.unshift()- Agregamos un elmt al principio del array ---> letras = ["d","a","b","c",];
letras.shift() -Eliminamos la primera posicion
letras.indexOf("d") -Te dice y trae la posicion en la que esta el elemento que quieras
*/


//----------------------CICLOS-------------------------------------------
/*Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:
for - recorre un bloque de código varias veces
for/in - recorre las propiedades de un objeto
for/of - recorre los valores de un objeto iterable
while - recorre un bloque de código mientras se cumple una condición específica
do/while - también recorre un bloque de código mientras se cumple una condición específica*/

// For
var estudiantes = ["pepe", "juan", "maria"];

function saludarEstudiantes (estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for (var i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i]);
} 

//FOR OF
// el Var funciona como index, luego de poner el OF se debe colocar el array, entonces recorre todo el array ejecutando la funcion necesaria

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}



//<<<<<-------------OBJETOS---------->>>>>

var miAuto= {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleAuto: function() { console.log(`Auto ${this.modelo} ${this.annio}`)  }
}// ademas de colocar los elementos del objeto tambien podemos poner una funcion dentro par realizar algo

// ejecucion de la funcion dentro del objeto
miAuto.detalleAuto();

// CONSTRUCTOR DE OBJETOS

var autoNuevo = new miAuto("Tesla", "Model 3", 2020);


//-------EJEMPLO DE UTILIZACION DE CICLOS, ARRAYS Y OBJETOS

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }// CREAMOS EL CONSTRUCTOR
  var autos = [];// INICIALIZAMOS EL ARRAY A LLENAR

  for(let i = 0 ; i < 30 ; i++){// FOR PARA PEDIR DATOS DE LOS NUEVOS AUTOS
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));// AGREGO AL ARRAY CADA OBJETO C/ SUS CARACTERISTICAS
  }
  
  for(let i = 0 ; i < autos.length ; i++){// IMPRIMO TODOS PARA VER C/ QEDO
    console.log(autos[i]);
  }


//----- METODOS DE ARRAYS- PARA BUSCAR

// .filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// .map : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var nombreArticulo = articulos1.map(function(articulo){
    return articulo.nombre
});

// Find: Busca el articulo, cuando lo encuentra finaliza la busqueda y ejecuta lo colocado

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "articuloBuscado"  // se db poner el nombre del elemtno q se busca
});

// Some: Nos regresa verdadero o falso 

var articulosBaratos = articulos.some(articulo =>{
    return articulo.costo <= 700;
});

// forEach: hace un filtrado y devuelve cosas (sin hacer un nuevo array)

articulos.forEach(articulo => {
    console.log(articulo.nombre);    
});




// -----------*************** DOM ****************--------------------------
// -----------*************** DOM ****************--------------------------
// -----------*************** DOM ****************--------------------------

// Hay  diferentes formas de interactuar con el DOM, (recordar siempre colocar el script en el HTML)

const h1 = document.getElementsByClassName('nombreClaseEnHtml')
const h2 = document.getElementById('nombreIdEnHtml')
const h3 = document.getElementsByTagName ('nombreDelTag')
const h4 = document.querySelector('etiquetasQueQueremosDelHtml') // con esta podemos seleccionar multiples etiquetas del DOM, si queremos una clase se coloca el . antes del nombre de la clase, si queremos un ID colocamos el # antes del nombre, si es un etqta comun solo ponemos el nombre, por ejemplo input.

//                      PROPIEDAD ------INNER---------

h1.innerHTML = 'lo que quiero <br> agregar'; // esta funcion modifica lo que esta dentro de la etiqueta que se utiliza, se puede agregar codigo html dentro de la etiqueta
h1.innerText = 'lo que quier <br> agregar'; // en este caso interpreta todo como texto mostrando asi en pantalla incluso el <br> sin aplicar su funcion htnml
h1.append('aaaa') // agrega el nodo al final
h1.insertBefore(nodoCreado, indice) // agrega el nodo antes del indice que se ponga


//                          GETTERS AND SETTERS

h1.getAttribute('class'); // Trae el atributo del elemento que queremos
h1.setAttribute('class', 'rojo'); // Settea (modifica) los atributos del elemento que queremos

//                              ADD Y REMOVE

h1.classList.add('rojo') // agrega esta clase al elemento
h1.classList.remove('rojo') // elimina esta clase al elemento
h1.classList.toogle('rojo') // agrega o quita dependiendo si ya tiene la clase o no
h1.classList.contains('rojo') // como si fuera un condicional, arroja true o false dependiendo si esta o no la clase

// Tambien se puede modificar el html directamente

input.value = '33'; // Modifique el atributo value de la etiqueta input

//                              CREAR ELEMENTOS

document.createElement('img') // con esta funcion creamos una etiqta que deseamos
// AHORA LE DAMOS VALOR A LOS ATRIBUTOS QUE QUEREMOS DE LA ETIQUETA IMG (PONEMOS UNA IMAGEN)

const img= document.createElement('img');
img.setAttribute('src', 'https://www.laUrlQueQueremos.com/imagen.png');
//Ahora lo meto dentro de alguna etiquuea ya existente
img.append(img)


//                  UTILIZACION DE LAS ETQ Y SU CONTENIDO EN JS


//Para utlizarlas se debe pasar el valor de ellas en una variable 
const input= document.querySelector('#input1'); // input1 es el ID de la etqta
//Una vez hecho esto, la variable es la representacion d esa etq del html en nuestro javascript

// ACLARACION IMPORTANTE  INPUTS: el contenido de inputs se guarda como string
//Se pueden modificar estos con la propiedad Number() o con la propiedad parseInt()


//                                       EVENTOS
//      -------ONCLICK

// Suponiendo una etq    <button id="btn" onClick="funcBtn"> Boton </button> 

function funcBtn(){
    const suma = input.value + input1.value;
    //aca ponemos loq el click ejecute y si queremos lo agregamos con un inner,append etc
    pResult.innerText = "Resultado" + suma;
    //entonces al hacer click en el button se va a ejecutar esta operacion

}


//                                  ADDEVENTLISTENER
//Es un escuchador de eventos
//btn.addEventListener('nombreDelEventoAEjecutar', funcionQQueremosEjecutar)
btn.addEventListener('click', funcBtn)

//----------RESUMEN------

// etq creadas #btnCalcular1 y #result

// seleccionamos para usar en JS
const btn=document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

// creamos la funcion q queremos ejecutar dsp
function btnOnClick(){
    const suma = input.value + input1.value;
    pResult.innerText = "Resultado: " + suma;
}

// creamos el addeventlistener para escuchar el click y ejecutarlo cuando se desea
btn.addEventListener('click', btnOnClick) // este se conecta con la CONST btn y esta esta concetada con la etqta del html y la funcion btnOnClick ejecuta el inner en el const pResult que esta conectado con la etqta #result del html


// ATENCION PARA FORM
//Toman el ultimo button del form y lo convieren en un submit, haciendo el "envio del form" y recargando la pag y se programa de la siguiente forma (tomando el ejemplo anterior)
// para solucionar ello debemos poner los siguiente en la etiqueta del form


<form>
    <button type="button" id="btnCalcular"> enviar </button>
</form>// con el type le decimos que el button no es submit, sino button y evitamos recargar la pagina y se sigue ejecutando la funcion deseada


// ELIMINAR NODOS

padre.removeChild(nodoAEliminar) // eliminamos un nodo q proviene del padre segun la referencia q escribamos entre ()

nodoAEliminar.remove() // version mejorada

padre.replaceChild(nuevoNodo, nodoAReemplazar) // primero colocamos el nuevo nodo  y segundo el que sera reemplazado

//------------------OPERACIONES EN LOTE----------

const nodos = [];

for(let i=0; i < 100; i++);{
    const node= document.createElement('input')
    nodos.push(node)
}

document.body.append(...nodos) //utilizamos el operador spread


//          ***************API Y STORAGE********************

//-----------------------LOCAL Y SESSION STORAGE---------------------------
/* LOCAL GUARDA PERMANENTEMENTE Y SESSION GUARDA DURANE EL USO DE LA SESION DEL NAVEGADOR*/


//ALMACENAMIENTO
/* Metodo-> localstorage.setItem(clave,valor)
   clave-> nombre d identificacion de elemento
   valor -> valor/contenido del elemento 

   Las claves y valores e guardan en cadena de caracteres
*/

localStorage.setItem('bienvenida', 'Hola coder');
localStorage.setItem('esValido', true);
localStorage.setItem('claveNumero', 30);


// ACCESO AL STORAGE
let informacion =  localStorage.getItem('bienvenida');
console.log(informacion)  //muestra el contenido de la clave 'bienvenida', osea "Hola coder "


//******RECORRER EL STORAGE  */

for (let i = 0; i < localStorage.length; i++){
    let clave= localStorage.key(i);
    console.log("clave: " + clave);
    console.log("valor: "+ localStorage.getItem(clave));

}

localStorage.removeItem('bienvenida'); //borra la informacion almacenada
localStorage.clear() // elimina toda la informacion completa


/* INFORMACION RELEVANTE

UN OBJETO ALMACENADO EN UN STORAGE SE GUARDAN LA CLAVE Y EL VALOR EN STRINGS

CUALQUIER OTRO TIPO A GUARDAR CON UN NUMERO O UN OBJETO SE CONVIERTE A CADENA DE TEXTO AUTOMATICAMENTE

                ***********ENTONCES*********
    
    PARA GUARDAR LA INFORMACION COMPLETA CORRECTAMENTE SE DEBE TRANSFORMAR EL OBJETO A UN

                        JSON
*/









/* JSONJSONSJONSJONSJONS*********JSON*******************/

// JSON ES UN STRING CON UN FORMATO ESPECIFICO, PUEDE SER UTILIZADO POR DIFERENTES ENTORNOS DE PROGRAMACION

/* ENTOOOOOOOOOOOOOOOONCES

PARA ENVIAR UN OBJT JS AL SERVIDOR O ALMACENARLO EN STORAGE ES NECESARIO CONVERTIRLO A JSON*/

// TENEMOS DOS METODOS PARA ESO
// STRINGIFY: ACEPTA UN OBJETO COMO PARAMETRO Y DEVUELVE LA FORMA DE TXT A JSON EQVALENTE
// PARSE: RECIBE UN TXT JSON COMO PARAMETRO Y DEVUELVE EL OBJETO JS CORRESPONDIENTE

// DE OBJETO A STRING
 const producto1= {id: 1, producto: "Arroz"};
 const enJson = JSON.stringify(producto1);

 console.log(enJson) //{id: 1, producto: "Arroz"}
 console.log(typeof producto1)// object
 console.log(typeof enJson)// string

 localStorage.setItem("producto1", enJson); // SE GUARDA {"id:"1, "producto":"Arroz"}

// DE STRING A OBJETO
const enJsonn= '{"id": 1, "producto":"Arroz"}';// Tengo este string
// Lo paso a Objeto
const producto11 = JSON.parse(enJsonn); // convierto a objeto

console.log(producto11.producto) //Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id); // 1

// Ejmplo con almacenamiento de ARRAYS

const productos = [{id:1, producto: "Arroz", precio: 12},
{id:2, producto: "Fideo", precio: 123},
{id:3, producto: "Polenta", precio: 22},
{id:4, producto: "Azucar", precio: 43},
]

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

//Almacena prodcto x prodcto

for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto));
}

// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));


// Ejemplo para obtner array almacenado

class Producto {
    constructor(obj){
        this.nombre = obj.producto.toUppercase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva(){
        this.precio = thid.precio *1.21;
    }
}

//Obtenemos el listado de productos almacenado

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productosss = [];

//Iteramos almacenados con for...of pa' transformar todos sus objetos a tipo producto

for (const objeto of almacenados)
productosss.push(new Producto(objeto));

//Ahora tenemos obejtos productos y podemos usar sus metoods

for (const producto of productosss)
producto.sumaIva(); 


/***************************  PROGRAMACION ASINCRONICA **********************************************/

//ASINCRONICA: DOS PETICIONES O MAS A LA VEZ SE EJECUTAN AL MISMO TIEMPO, SOL HAY QUE MOSTAR LOS RESULTADOS AL MISMO TIEMPO
//SINCRONICA: SE REALIZA UNA Y LUEGO DE FINALIZADA ESA SE REALIZA LA OTRA

setTimeout(fn,time)// es una funcion que recibe un callback y un valor numerico expresado en milisegundos

//Ejmplo: 
setTimeout(()=> {
    console.log("Proceso asincronico")
}, 3000)

//Con un Popup
const btnn= document.querySelector('#boton')
const popup = document.querySelector('#popu-msg')

btn.addEventListener('click', () => {//evento click
    
   popup.classList.add('popup-active')//agrego la clase

   setTimeout(() => {
    popup.classList.remove('popup-active')// la elimino en 2 segundos y medio
   }, 2500)
})

// Es importante entender que settimeout funcion siempre de fomra asincronica, por mas que le ponga 0milisegundos

setInterval(fn,time) // La diferencia es q la unidad de tiempo es un intervalo par la repeticion de la funcion asociada, osea cada cuanto se vuelve a ejectuar esa funcion
//Debemos ponerle un corte, sino continua ejecutandose

/*Utilizamos clearInterval() para remover un intervalo*/ clearInterval()

/*  Cuando llamamos un setInterval() éste retorna una referencia al intervalo generado, el cual podemos almacenar en una variable. Es esta referencia la que debemos pasar a la función clearInterval para que la limpieza tenga efecto:
*/
let counter = 0

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)


/*Utilizamos clearInterval() para detener la ejecucion*/ clearTimeout()
/* Funciona igual con los timeout. Si guardamos en una variable la referencia al timeout generado, podemos usarla para removerlo luego. En el siguiente caso, el timeout generado nunca llega a ejecutarse:
*/
console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin)


/********************* PROMYSES ********************/
// TIENE 3 ESTADOS, PENDING, FULFILLED, REJECTED

new Promise( (resolve, reject) => {
    //cuerpo de la promesa
})

// SE INICIA EN PENDIENTE
const eventoFuturo = () => {
    return new Promise( (resolve, reject) => {
        //cuerpo de la promesa
    } )
}

console.log( eventoFuturo() ) // Promise { <pending> }

/*El valor de retorno de la promesa se define a través del llamado a las funciones de resolve o reject:
Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su estado a fulfilled, con el valor enviado a resolve().
Si la promesa llama a reject(), cambiará su estado a rejected con el valor enviado al reject().
*/

//EJEMPLO
/*Aquí podemos ver cómo cambia de estado la promesa con distintos valores. Según el llamado de la función la promesa se verá resuelta o rechazada. Sin embargo, lo que vemos por consola es el objeto Promise que retorna la función, y con lo que nos interesa trabajar en realidad es con el valor de resolución de la promesa 👇
*/
const eventoFuturoO = (res) => {
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}

console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }

/*
Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(), los cuales reciben una función por parámetro con la cual se captura el valor de la promesa:
.then() : Si la promesa es resuelta ✅, su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.
.catch() : si la promesa es rechazada ❌, su valor se captura dentro de un .catch() siguiendo la misma lógica.*/

/*Como una promesa puede tener varios estados posibles, se puede concatenar varios .then() o .catch() en un mismo llamado, y caeremos en el caso que corresponda según cómo se haya resuelto la promesa 🤔*/

eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })
    .catch( (error) => {
        console.log(error)
    })

eventoFuturo(false)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })

    //Cada promesa sólo puede resolverse o rechazarse una única vez.

    // finally() es un método que recibe una función la cual se ejecutará siempre al finalizar la secuencia, sin importar si se haya resuelto o no la promesa:

    eventoFuturo(true)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })
    // Promesa resuelta
    // Fin del proceso

    /* EEEEEEEJJJJEEMMPLO FINAL DE UTILIZACION*/

    // función que tras 3 segundo retorna un array de objetos

const BD = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]

const pedirProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 3000)
    })
}

// inicializamos con un array vacío
let producCtos = []

const renderProductos = (arr) => {
    // función que genere la vista de los productos
}

// asincrónicamente pedimos los datos y generamos la vista
pedirProductos()
    .then((res) => {
        producCtos = res
        renderProductos(producCtos)
    })


////////////////////////////////////* AJAX *////////////////////////////////////////////////////

//La comunicacion entre front y back se realiza por peticiones 
/*Estas peticiones que debemos hacer están definidas por varias partes:
Una URL o dirección.
Un método (GET, POST, PUT, DELETE).
Headers.
Body.
Parámetros (Query Params o URL Params).
*/
/*
MÉTODO
Cada petición que hacemos está acompañada por un verbo que indica al servidor cuál es nuestra intención 🎯.  El servidor tiene la capacidad de escuchar distintas peticiones en la misma URL, decidir a cuál responder y cómo. Son 4 los verbos más utilizados, aunque hay muchos más: Get, Post, Put & Delete.

MÉTODO
GET: Para obtener información (o recurso) del servidor. Suelen ser las más utilizadas.
POST: Para enviar información al servidor para crear algún recurso.
PUT: Para crear o modificar algún recurso en el servidor.
DELETE: Para eliminar algún recurso en el servidor.

HEADERS
Las cabeceras (headers) HTTP permiten al cliente y servidor enviar información sobre la petición y la respuesta. Los headers incluyen información sobre la petición para establecer una transferencia segura y clara, y de ser necesario se pueden modificar para agregar datos adicionales 📃. 
No debemos confundir  información sobre la petición (headers) con los datos que la petición puede transferir (body).

PARÁMETROS
Para especificar una petición, se puede enviar información adicional en la forma de parámetros a través de la URL. Tenemos dos formas de definir parámetros a través de la URL:
Query params
URL params

Query params
Esta sintaxis permite adjuntar en la URL una serie de parámetros en la forma de pares clave-valor. Por ejemplo, si queremos buscar algo por google, debemos enviarle un valor de búsqueda por el parámetro q, a través de la url:. 
Se utiliza el símbolo ? para indicar el final de la parte de la dirección de la url y el comienzo del query. A partir de allí, se escriben parámetros con la forma clave=valor, pudiendo definir varios separándolos con el signo ampersand (&).

Por ejemplo, en la siguiente URL se hace una consulta a la PokeApi (https://pokeapi.co/docs/v2), pidiendo información al endpoint de /pokemon, y se envían los parámetros offset=0 y limit=20 :
https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
Esto condiciona la búsqueda que queremos hacer en ese servidor.

URL params
Esta sintaxis permite enviar parámetros directamente en la forma de segmentos de la URL, es decir separados por / . Por ejemplo, la PokeApi nos indica lo siguiente: 
https://pokeapi.co/api/v2/pokemon/{id or name}/
Significa que ese {id or name} es un parámetro, un valor dinámico que insertamos en la URL, en este caso para obtener información sobre un pokemon según su ID o nombre. Para obtener aquel con id = 1, haríamos una petición GET a la siguiente url: https://pokeapi.co/api/v2/pokemon/1

PETICIONES
Estas peticiones proporcionan todos los archivos necesarios para montar la página en el browser (html, css, scripts, imágenes, etc.) y con eso poder visualizar la aplicación correctamente 🙌.

Cada petición tiene un Status, un código que significa el estado de la petición:
Los códigos de estado que comienzan en 2 (generalmente 200), significa que la petición fue exitosa 🤩.
Los códigos que empiezan con 4 significan que hubo algún error con la petición. El famoso 404 indica que el recurso buscado no fue encontrado ❌.
Códigos que empiezan con 5 significan que hubo un error con el servidor, por lo tanto no deviene de un error en la petición ❌.


////// APIS //////////
Una API (Application Programming Interfaces) es una aplicación web construida en base a la arquitectura API REST, a la cual podemos solicitar y enviar información desde el cliente. Generalmente, nos comunicamos con aplicaciones de este tipo y es la tendencia actual de desarrollo.

Una API suele tener una URL base (el dominio donde está alojada la aplicación) y luego puede tener varios endpoints, es decir, distintas secciones a las que podemos acceder. 
A la vez, se pueden hacer peticiones con distintos métodos al mismo endpoint y obtener distintos resultados.

*/

///////////////////////////////****FETCH*****///////////////////////////////////////////////
/*
Javascript nos ofrece el método fetch() para hacer peticiones HTTP a algún servicio externo. Como estas peticiones son asincrónicas, convenientemente el método fetch() trabaja con promesas.
El método recibe un primer parámetro que es la URL a la cual hacer la petición, y un segundo parámetro opcional de configuración:
*/
fetch(url, config)

/*
Para los siguientes ejemplos utilizaremos la API de JSON Placeholder, diseñada para hacer pruebas de peticiones simulando un listado de posts.*/

fetch('./carpetaData/info.json') //puede ser api externa o interna
.then((response) => response.json())
.then ((json) => console.log(json));

//Por defecto el fetch hace peticione tipo GET. Segun la documentacion, pa obtener una lista de post debemos hacer una peticion de la siguiente forma

console.log( fetch('https://jsonplaceholder.typicode.com/posts') )
// Promise {<pending>}

//Capturamos la respuesta de promesa con un .then() para poder trabajarla

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => console.log(resp) )

/*Haciendo console.log de la respuesta, no vemos el listado de posts que esperamos sino un objeto del tipo Response.*/

/*📞 Llamar a fetch() retorna una promesa que resuelve en un objeto Response que contiene información sobre la respuesta del servidor, como su código de estado y headers.
Para acceder al contenido de la respuesta debemos dar un paso adicional, y por eso es que se ven dos .then() concatenados.

Generalmente, se transfieren datos en formato JSON. Por lo tanto, para obtener el contenido de la respuesta debemos aplicar el método .json() a ese objeto. Éste retorna a su vez una Promesa, por lo que capturamos su contenido (los datos enviados por la API) en un segundo .then() :

*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log(data)
    })

/* Teniendo esto disponible dentro del .then(), ¡podemos volcarlo al DOM utilizando los métodos vistos previamente! 🤩
<h2>Posts!</h2>
    <hr/>

    <ul id="listado">
    </ul>
*/
/*
Al obtener la respuesta de la API, recorremos el array obtenido y agregamos a la <ul> un elemento <li> con el contenido de cada post en el array. 
*/

const lista = document.querySelector('#listado')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `
            lista.append(li)
        })
    })


////////////////////*   ENVIANDO DATOS CON POST  */////////////////////////////
/*
La API de JSON Placeholder también nos permite simular peticiones POST, es decir, podemos hacer una petición para enviar datos a la API. Al ser una simulación, no se crean recursos realmente en el servidor, pero sí obtenemos una respuesta aceptando el POST.

Dijimos que el segundo parámetro del método fetch es un objeto de configuración. En éste podemos definir el método, los headers y el body de la petición. Si bien fetch trae valores por defecto para esto (como el método que es GET), podemos modificarlo a discreción según sea necesario 😊.
*/

//En este caso la documentación nos indica que para hacer un post debemos hacer un fetch con las siguientes características:

fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Coderhouse',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))


/*En el objeto de configuración tenemos varias propiedades a definir:
method: ‘POST’. Significa que el método de la petición será POST 🚧 Si no lo modificamos será de tipo GET por defecto.
headers: En este caso se agrega una propiedad ‘Content-type’, con el valor que nos indica la documentación de la API 🚧 Si no se agrega la petición sería rechazada por el servidor.
body: Aquí se adjuntan los datos a enviar al servidor. En este caso se envía un objeto con la forma { title, body, userId }. El body debe enviarse en formato JSON, por eso lo vemos envuelto en un JSON.stringify().
*/






