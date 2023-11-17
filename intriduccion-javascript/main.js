/**
 * Mostramos un jemplo de alert()
 */
alert('Texto del alert');

/**
 * Creamos variables
 */
var nombre = 'David';
var fecha_creacion = '17/11/23';

/**
 * Podemos imprimir en el HTML con document.write
 */
document.write(`Este documento fue creado por ${nombre} el día ${fecha_creacion}`);
// de este forma escribimos sin más en el HTML. -> No tenemos control sobre dónde se escribe

/**
 * Para solucionar esto vamos a crear en el HTML unos div con sus respectivos id
 * -> Igualamos a una variable un getElemntById
 */

var datos = document.getElementById("datos");
// Una vez seleccionado el div mediante id podemos escribir en el
// Si en ese div hay otro contenido y no queremos que lo machaque, debemos añadir el nuevo y no igualarlo (operador +=)
datos.innerHTML += `Primer uso de innerHTML por ${nombre} el día ${fecha_creacion} `;
// observamos que con el uso de innerHTML en el div no se muestra el p HTML que había en ese div (si usamos el operador = )

/**
 * en un innerHTML podemos poner todo el codigo HTML que queramos entre comillas invertidas
 */
var n1 = 'Agustín';
var n2 = 'Manuela';
var n3 = 'Josefina';
var a1 = 'Jimenez';
var a2 = 'Nuñez';
var a3 = 'Mateos';
var e1 = 29;
var e2 = 17;
var e3 = 30;

var datos2 = document.getElementById("datos2");
datos2.innerHTML = `
<h1>Hola soy David</h1>
<p>Esto es el parrafo de ${nombre}</p>
`;

/**
 * Una vez capturado el elemento HTML en una variable 
 * podemos usaar lógica para imprimir en según qué casos
 */
if(e1 <= 30){
    datos2.innerHTML += `<p>${e1} es menor a la edad mínima (30)</p>`;
}else{
    datos2.innerHTML += `<p>El usuario ${e1} puede pasar</p>`;
}

/**
 * Creamos una tabla con innerHTML
 */
var tabla = document.getElementById("tabla");
tabla.innerHTML += `

<h1>Lista</h1>

<table border="1px">
<tr>
  <th>Nombre</th>
  <th>Edad</th>
</tr>
<tr>
  <td>${n1}</td>
  <td>${e1}</td>
</tr>
<tr>
  <td>${n2}</td>
  <td>${e2}</td>
</tr>
<tr>
  <td>${n3}</td>
  <td>${e3}</td>
</tr>

</table>

`;

/**
 * Podemos usar bucles
 * y cualquier cosa que se nos ocurra
 */

for(e3; e3 <= 40 ; e3++){
  tabla.innerHTML += `<p>el valor de e3 es ${e3}</p>`;
}

/**
 * Creamos una funcion
 */
function nombreCompleto(nombre, apellido){
  return `Mi nombre completo es ${nombre} ${apellido}`;
}

var resultado = document.getElementById('funcion');

resultado.innerHTML += nombreCompleto(n2, a3)+"<br><br>";

/**
 * Manejo de arrays
 */
var nombres = [

  'Paco',
  'Manuela',
  'Gonzalo',
  'Piscila',
  'Pedro',
  'Florentina',
  'Gerardo',
  'Fermín',
  'Andrea',
  'Sonia'

];

// recorremos el array e imprimimos solo el nombre buscado
function buscarNombre(array=[], nombre){
  var array = array;
  array.forEach(element => {
    if(element === nombre){
      string = `Se ha encontrado el nombre \'${element}\' <br><br>`
    }
  });
  return string;
}

resultado.innerHTML += buscarNombre(nombres, 'Sonia');


