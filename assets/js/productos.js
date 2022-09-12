// const $contenedor = document.getElementById("contenedor")

// setTimeout(() => {
// $contenedor.classList.add("close")
// }, 3000)


const baseDeDatos = 
[
  {
  id: 1,
  nombre: 'Monstera Deliciosa',
  precio: "$450",
  imagen: "assets/images/productosImgB/AnyConv.com__Monstera Deliciosa.png",
  categoria: "Plantas",
  descripcion: "También conocida como Costilla de Adán es famosa por sus preciosas hojas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 2,
  nombre: 'Amoena',
  precio: "$400",
  imagen: 'assets/images/productosImgB/Amoena.png',
  categoria: "Plantas",
  descripcion: "Es una de las más populares porque tolera los espacios sombríos.",
  ciudados: "☀ Sombra, semisombra (luz indirecta) 💧Riego 1 vez por semana 🌡20 - 35ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/dos.html"
},
{
  id: 3,
  nombre: 'Dracena Piña',
  precio: "$120",
  imagen: 'assets/images/productosImgB/AnyConv.com__Dracena Piña.png',
  categoria: "Plantas",
  descripcion: "Es una planta tropical originaria del Sureste de África y crece muy lentamente.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/tres.html"
},
{
  id: 4,
  nombre: 'Cactus Órgano Chico',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Cactus Órgano Chico.png',
  categoria: "Plantas",
  descripcion: "Este tipo de cactus es muy común y pertenece a la familia de las cactáceas",
  ciudados: "Pleno sol y ventilación Regar abundantemente 1 vez por mes 7 - 30ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/cuatro.html"
},
{
  id: 5,
  nombre: 'Sansevieria',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sansevieria.png',
  categoria: "Plantas",
  descripcion: "Sus largas hojas son el toque ideal para cualquier esquina de tu hogar.",
  ciudados: "Soporta sol directo, indirecto, semisombra y sombra. Riego 1 vez por semana (o cada 15 días si no le da sol)16 - 32ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/cinco.html"
},
{
  id: 6,
  nombre: 'Ficus Pandurata Mediano',
  precio: "$800",
  imagen: 'assets/images/productosImgB/AnyConv.com__Ficus Pandurata Mediano.png',
  categoria: "Plantas",
  descripcion: "Destacan sus hojas de verde vibrante que aportan luminosidad.",
  ciudados: "Mucha luz indirecta Regar cada 3 semanas 15 - 30ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/seis.html"
},
{
  id: 7,
  nombre: 'Hule grande',
  precio: "$700",
  imagen: 'assets/images/productosImgB/AnyConv.com__Hule grande.png',
  categoria: "Plantas",
  descripcion: "Este árbol es originario de Asia y se ha posicionado como uno de los favoritos.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 20 - 30ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/siete.html"
},
{
  id: 8,
  nombre: 'Monstera Adansonii Chica',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Monstera Adansonii Chica.png',
  categoria: "Plantas",
  descripcion: "Es una planta peculiar que destaca por las perforaciones naturales de sus hojas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/ocho.html"
},
{
  id: 9,
  nombre: 'Olivo',
  precio: "$600",
  imagen: 'assets/images/productosImgB/AnyConv.com__Olivo.png',
  categoria: "Plantas",
  descripcion: "Es el emblema mediterráneo por excelencia. Es un árbol muy querido.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/nueve.html"
},
{
  id: 10,
  nombre: 'Palo de Brasil',
  precio: "$450",
  imagen: 'assets/images/productosImgB/AnyConv.com__Palo de Brasil.png',
  categoria: "Plantas",
  descripcion: "El Palo de Brasil o Palo de Agua es una planta tropical que se adapta bien.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/diez.html"
},
{
  id: 11,
  nombre: 'Peperomia',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Peperomia.png',
  categoria: "Plantas",
  descripcion: "Es una opción ideal si deseas decorar los espacios sombríos de tu hogar.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/once.html"
},
{
  id: 12,
  nombre: 'Rhipsalis',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Rhipsalis.png',
  categoria: "Plantas",
  descripcion: "Aunque no parezca, Rhipsalis pertenece a la familia de las cactáceas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/doce.html"
},
{
  id: 13,
  nombre: 'Sábila',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sábila.png',
  categoria: "Plantas",
  descripcion: "Esta planta es muy apreciada porque tiene propiedades benéficas para nuestra salud.",
  ciudados: "Mucha luz indirecta o directa Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/trece.html"
},
{
  id: 14,
  nombre: 'Sapito Chico',
  precio: "$300",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sapito Chico.png',
  categoria: "Plantas",
  descripcion: "Es perfecta porque es pequeña y tiene sus hojas erguidas que simulan un sapito.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/catorce.html"
},
{
  id: 15,
  nombre: 'Teléfono Chico',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Teléfono Chico.png',
  categoria: "Plantas",
  descripcion: "Su nombre científico es Potos, es una planta trepadora que lo hace gracias a sus raíces.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/quince.html"
},
{
  id: 16,
  nombre: 'Zamioculca',
  precio: "$900",
  imagen: 'assets/images/productosImgB/AnyConv.com__Zamioculca.png',
  categoria: "Plantas",
  descripcion: "Se caracteriza por sus hojas cerosas que destacan en cualquier superficie.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/dieciseis.html"
},
{
  id: 17,
  nombre: 'Orquídea Blanca',
  precio: "$500",
  imagen: 'assets/images/productosImgB/AnyConv.com__Orquídea Blanca.png',
  categoria: "Plantas",
  descripcion: "Las orquídeas son perfectas para embellecer cualquier tipo de espacio en tu hogar.",
  ciudados: "AL IGUAL QUE SUCEDE CON EL RESTO DE LAS PLANTAS CRASAS, NO TE EXCEDAS EN SU RIEGO, SOBRE TODO DE OTOÑO A PRIMAVERA.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/diecisiete.html"
},
{
  id: 18,
  nombre: 'Palma Areca',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Palma Areca.png',
  categoria: "Plantas",
  descripcion: "Es perfecta para los interiores porque no necesita la luz directa del sol.",
  ciudados: "La palmera Areca, es una planta muy popular en la decoración de interiores.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/dieciocho.html"
},
{
  id: 19,
  nombre: 'Helecho',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Helecho.png',
  categoria: "Plantas",
  descripcion: "Es una planta muy llamativa por sus frondosas ramas. Son originarios de África.",
  ciudados: "Mucha luz indirecta Regar 2 o 3 veces por semana 15 - 20ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 20,
  nombre: 'Aralia',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Aralia.png',
  categoria: "Plantas",
  descripcion: "Es una planta de interior muy resistente y muy versátil.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 21,
  nombre: 'Lavanda',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Lavanda.png',
  categoria: "Plantas",
  descripcion: "Se ha utilizado durante siglos para aromatizar los aceites de baño y los jabones.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 22,
  nombre: 'Romero',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Romero.png',
  categoria: "Plantas",
  descripcion: "Es una de las plantas más utilizadas en el mundo de la salud, alimentación y belleza.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 23,
  nombre: 'Ceropegia Woodii',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Ceropegia Woodii.png',
  categoria: "Plantas",
  descripcion: "Es conocida como Cadena de Corazones porque sus ramas son muy largas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 12 - 20ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 24,
  nombre: 'Aralia Schefflera',
  precio: "$120",
  imagen: 'assets/images/productosImgB/AnyConv.com__Aralia Schefflera.png',
  categoria: "Plantas",
  descripcion: "Es ideal si deseas tener un arbolito en el interior de tu hogar.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 25,
  nombre: 'Espada Plateada',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Espada Plateada.png',
  categoria: "Plantas",
  descripcion: "Esta hermosa planta es muy popular como planta de interior.",
  ciudados: "Soporta sol directo, indirecto, semisombra y sombra. Riego 1 vez por semana (o cada 15 días si no le da sol)16 - 32ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 26,
  nombre: 'Sansevieria Zeylanica Mini',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sansevieria Zeylanica Mini.png',
  categoria: "Plantas",
  descripcion: "Es una las mejores plantas porque ayuda a purificar el aire.",
  ciudados: "​ Soporta sol directo, indirecto, semisombra y sombra. ​ Riego 1 vez por semana (o cada 15 días si no le da sol) 16 - 32ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 27,
  nombre: 'Palma Camedor',
  precio: "$150",
  imagen: 'assets/images/productosImgB/AnyConv.com__Palma Camedor.png',
  categoria: "Plantas",
  descripcion: "Son nativas de las regiones subtropicales y tropicales de las Américas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 28,                                                       
  nombre: 'Olivo Chico',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Olivo Chico.png',
  categoria: "Plantas",
  descripcion: "Es considerada un símbolo de sanación y longevidad, resistencia y renovación.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 29,
  nombre: 'Helecho Nido de Ave',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Helecho Nido de Ave.png',
  categoria: "Plantas",
  descripcion: "Es originario de las selvas lluviosas tropicales del norte de Australia.",
  ciudados: "Mucha luz indirecta o sombra Regar 1 o 2 veces por semana 15 - 20ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 30,
  nombre: 'Helecho Cilantrillo',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Helecho Cilantrillo.png',
  categoria: "Plantas",
  descripcion: "Llega a medir entre 20 a 40 cm de alto y ancho por lo que luce muy frondosa.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 31,
  nombre: 'Zamioculca Mini',
  precio: "$250",
  imagen: 'assets/images/productosImgB/AnyConv.com__Zamioculca Mini.png',
  categoria: "Plantas",
  descripcion: "Se caracteriza por sus hojas verdes cerosas y sus grandes rizomas.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 32,
  nombre: 'Pata de Elefante',
  precio: "$700",
  imagen: 'assets/images/productosImgB/AnyConv.com__Pata de Elefante.png',
  categoria: "Plantas",
  descripcion: "Es una de las favoritas por sus hermosas hojas largas y verdes.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 32,
  nombre: 'Peperomia Variegada',
  precio: "$800",
  imagen: 'assets/images/productosImgB/AnyConv.com__Peperomia Variegada.png',
  categoria: "Plantas",
  descripcion: "Es una fantástica planta que se puede cultivar durante toda su vida en maceta.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 33,
  nombre: 'Sapito Gris',
  precio: "$850",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sapito Gris.png',
  categoria: "Plantas",
  descripcion: "A esta planta le gusta mucho la luz, pero no el sol directo. Es ideal para los interiores.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 34,
  nombre: 'Orquídea Fucsia',
  precio: "$500",
  imagen: 'assets/images/productosImgB/AnyConv.com__Orquídea Fucsia.png',
  categoria: "Plantas",
  descripcion: "Nuestra orquídea fucsia es una de las más buscadas por sus preciosos colores",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
},
{
  id: 35,
  nombre: 'Orquídea Moteada',
  precio: "$500",
  imagen: 'assets/images/productosImgB/AnyConv.com__Orquídea Moteada.png',
  categoria: "Plantas",
  descripcion: "Esta orquídea une lo mejor de la belleza del blanco y la osadía del rosa",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"                      
},
{
  id: 36,
  nombre: 'Mix Suculentas',
  precio: "$520",
  imagen: 'assets/images/productosImgB/AnyConv.com__Mix Suculentas.png',
  categoria: "Plantas",
  descripcion: "Mix Suculentas es el arreglo más colorido de nuestra colección de plantas.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC.",
  singlePage: "../../../Tecno-gurus/assets/singlePage/one.html"
}
]
const primero = document.getElementById('cartaPrueba')
const divisa = '$';

function renderizarProductos() {
  baseDeDatos.forEach((valor) => {
    const primerDiv = document.createElement('div')
    primerDiv.classList.add('car')
    const referenciaSingle = document.createElement('a')
    referenciaSingle.href = `${valor.singlePage}`
    referenciaSingle.textContent = 'Cuidados'
    referenciaSingle.classList.add('link')
    const img = document.createElement('img')
    img.classList.add('product-img')
    img.src = `${valor.imagen}`
    const segundoDiv = document.createElement('div')
    segundoDiv.classList.add('product-detail')
    const primerSpan = document.createElement('span')
    primerSpan.textContent = `${valor.nombre}`
    const tercerDiv = document.createElement('div')
    tercerDiv.classList.add('raiting')
    const primeraEstrella = document.createElement('i')
    primeraEstrella.classList.add('fas')
    primeraEstrella.classList.add('fa-star')
    const segundaEstrella = document.createElement('i')
    segundaEstrella.classList.add('fas')
    segundaEstrella.classList.add('fa-star')
    const terceraEstrella = document.createElement('i')
    terceraEstrella.classList.add('fas')
    terceraEstrella.classList.add('fa-star')
    const cuartaEstrella = document.createElement('i')
    cuartaEstrella.classList.add('fas')
    cuartaEstrella.classList.add('fa-star')
    const quintaEstrella = document.createElement('i')
    quintaEstrella.classList.add('fas')
    quintaEstrella.classList.add('fa-star')
    const primerP = document.createElement('p')
    primerP.textContent = `${valor.descripcion}`
    const cuartoDiv = document.createElement('div')
    cuartoDiv.classList.add('buttons')
    const quintoDiv = document.createElement('div')
    quintoDiv.classList.add('price')
    quintoDiv.textContent = `${valor.precio}`
    const primerBoton = document.createElement('button')
    primerBoton.classList.add('cart')
    primerBoton.classList.add('btn')
    primerBoton.textContent = 'Agregar al carrito'
    primerBoton.setAttribute('marcador', valor.id);
    // primerBoton.addEventListener('click', anyadirProductoAlCarrito)
    const segundoBoton = document.createElement('button')
    segundoBoton.classList.add('favourite')
    segundoBoton.classList.add('btn')
    const corazon = document.createElement('i')
    corazon.classList.add('far')
    corazon.classList.add('fa-heart')

    primerDiv.appendChild(img)
    primerDiv.appendChild(segundoDiv)
    segundoDiv.appendChild(primerSpan)
    segundoDiv.appendChild(tercerDiv)
    tercerDiv.appendChild(primeraEstrella)
    tercerDiv.appendChild(segundaEstrella)
    tercerDiv.appendChild(terceraEstrella)
    tercerDiv.appendChild(cuartaEstrella)
    tercerDiv.appendChild(quintaEstrella)
    tercerDiv.appendChild(referenciaSingle)
    segundoDiv.appendChild(primerP)
    segundoDiv.appendChild(cuartoDiv)
    cuartoDiv.appendChild(quintoDiv)
    cuartoDiv.appendChild(primerBoton)
    cuartoDiv.appendChild(segundoBoton)
    segundoBoton.appendChild(corazon)
    primero.appendChild(primerDiv)
  });
}

renderizarProductos();




// const section = document.getElementById('carritodrop')
// let carrit = []
// const DOMtotal = document.querySelector('#total')
// const DOMbotonVaciar = document.querySelector('#boton-vaciar')
// const miLocalStorage = window.localStorage

// /**
// * Evento para añadir un producto al carrito de la compra
// */
// function anyadirProductoAlCarrito(evento) {
//   evento.preventDefault()
//   // Anyadimos el Nodo a nuestro carrito
//   carrit.push(evento.target.getAttribute('marcador'))
//   // Actualizamos el carrito 
//   renderizarCarrito();
//   // Actualizamos el LocalStorage
//   guardarCarritoEnLocalStorage();
// }

// /**
// * Dibuja todos los productos guardados en el carrito
// */
// function renderizarCarrito() {
//   // Vaciamos todo el html
//   carrit.textContent = '';
//   // Quitamos los duplicados
//   const carritoSinDuplicados = [...new Set(carrit)];
//   // Generamos los Nodos a partir de carrito
//   carritoSinDuplicados.forEach((item) => {
//       // Obtenemos el item que necesitamos de la variable base de datos
//       const miItem = baseDeDatos.filter((itemBaseDatos) => {
//           // ¿Coincide las id? Solo puede existir un caso
//           return itemBaseDatos.id === parseInt(item);
//       });
//       // Cuenta el número de veces que se repite el producto
//       const numeroUnidadesItem = carrit.reduce((total, itemId) => {
//           // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
//           return itemId === item ? total += 1 : total;
//       }, 0);
//       // Creamos el nodo del item del carrito
//       const miNodo = document.createElement('li');
//       miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
//       miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
//       // Boton de borrar
//       const miBoton = document.createElement('button');
//       miBoton.classList.add('btn', 'btn-danger', 'mx-5');
//       miBoton.textContent = 'X';
//       miBoton.style.marginLeft = '1rem';
//       miBoton.dataset.item = item;
//       miBoton.addEventListener('click', borrarItemCarrito);
//       // Mezclamos nodos
//       miNodo.appendChild(miBoton);
//       section.appendChild(miNodo);
//   });
//   // Renderizamos el precio total en el HTML
//   DOMtotal.textContent = calcularTotal();
// }

// /**
// * Evento para borrar un elemento del carrito
// */
// function borrarItemCarrito(evento) {
//   evento.preventDefault()
//   // Obtenemos el producto ID que hay en el boton pulsado
//   const id = evento.target.dataset.item;
//   console.log(id)
//   // Borramos todos los productos
//   console.log(carrit)
//   carrit = carrit.filter((carritoId) => {
//     console.log(carrit)
//       return carritoId !== id;
//   });
//   console.log(carrit)
//   // volvemos a renderizar
//   renderizarCarrito();
//   // Actualizamos el LocalStorage
//   guardarCarritoEnLocalStorage();

// }

// /**
// * Calcula el precio total teniendo en cuenta los productos repetidos
// */
// function calcularTotal() {
//   // Recorremos el array del carrito 
//   return carrit.reduce((total, item) => {
//     console.log(carrit)
//       // De cada elemento obtenemos su precio
//       const miItem = baseDeDatos.filter((itemBaseDatos) => {
        
//           return itemBaseDatos.id === parseInt(item);
//       });
//       // Los sumamos al total
//       console.log(total)
//       total = total + miItem[0].precio;
//       return total
//   }, 0);
// }

// /**
// * Varia el carrito y vuelve a dibujarlo
// */
// function vaciarCarrito() {
//   // Limpiamos los productos guardados
//   carritoSinDuplicados = [];
//   // Renderizamos los cambios
//   renderizarCarrito();
//   // Borra LocalStorage
//   localStorage.clear();

// }

// function guardarCarritoEnLocalStorage () {
//   miLocalStorage.setItem('carrito', JSON.stringify(carrit));
// }

// function cargarCarritoDeLocalStorage () {
//   // ¿Existe un carrito previo guardado en LocalStorage?
//   if (miLocalStorage.getItem('carrito') !== null) {
//       // Carga la información
//       carrit = JSON.parse(miLocalStorage.getItem('carrito'));
//   }
// }

// // Eventos
// DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// // Inicio
// cargarCarritoDeLocalStorage();
// renderizarCarrito();









// function renderizarProductos (){
//   baseDeDatos.forEach((valor) => {
//     const primerDiv = document.createElement('div')
//     primerDiv.classList.add('car')
//     const img = document.createElement('img')
//     img.classList.add('product-img')
//     img.src = `${valor.imagen}`
//     const segundoDiv = document.createElement('div')
//     segundoDiv.classList.add('product-detail')
//     const primerSpan = document.createElement('span')
//     primerSpan.textContent = `${valor.nombre}`
//     const tercerDiv = document.createElement('div')
//     tercerDiv.classList.add('raiting')
//     const primeraEstrella = document.createElement('i')
//     primeraEstrella.classList.add('fas')
//     primeraEstrella.classList.add('fa-star')
//     const segundaEstrella = document.createElement('i')
//     segundaEstrella.classList.add('fas')
//     segundaEstrella.classList.add('fa-star')
//     const terceraEstrella = document.createElement('i')
//     terceraEstrella.classList.add('fas')
//     terceraEstrella.classList.add('fa-star')
//     const cuartaEstrella = document.createElement('i')
//     cuartaEstrella.classList.add('fas')
//     cuartaEstrella.classList.add('fa-star')
//     const quintaEstrella = document.createElement('i')
//     quintaEstrella.classList.add('fas')
//     quintaEstrella.classList.add('fa-star')
//     const primerP = document.createElement('p')
//     primerP.textContent = `${valor.descripcion}`
//     const cuartoDiv = document.createElement('div')
//     cuartoDiv.classList.add('buttons')
//     const quintoDiv = document.createElement('div')
//     quintoDiv.classList.add('price')
//     quintoDiv.textContent = `${valor.precio}`
//     const primerBoton = document.createElement('button')
//     primerBoton.classList.add('cart')
//     primerBoton.classList.add('btn')
//     primerBoton.textContent = 'Agregar al carrito'
//     primerBoton.setAttribute('marcador', valor.id);
//     primerBoton.addEventListener('click', agregarAlCarrito)
//     const segundoBoton = document.createElement('button')
//     segundoBoton.classList.add('favourite')
//     segundoBoton.classList.add('btn')
//     const corazon = document.createElement('i')
//     corazon.classList.add('far')
//     corazon.classList.add('fa-heart')

//     primerDiv.appendChild(img)
//     primerDiv.appendChild(segundoDiv)
//     segundoDiv.appendChild(primerSpan)
//     segundoDiv.appendChild(tercerDiv)
//     tercerDiv.appendChild(primeraEstrella)
//     tercerDiv.appendChild(segundaEstrella)
//     tercerDiv.appendChild(terceraEstrella)
//     tercerDiv.appendChild(cuartaEstrella)
//     tercerDiv.appendChild(quintaEstrella)
//     segundoDiv.appendChild(primerP)
//     segundoDiv.appendChild(cuartoDiv)
//     cuartoDiv.appendChild(quintoDiv)
//     cuartoDiv.appendChild(primerBoton)
//     cuartoDiv.appendChild(segundoBoton)
//     segundoBoton.appendChild(corazon)
//     primero.appendChild(primerDiv)
// })
// }
// renderizarProductos()

// const section = document.getElementById('carritodrop')
// let carrit = []
// const base = {}
// const DOMtotal = document.querySelector('#total')
// const DOMbotonVaciar = document.querySelector('#boton-vaciar')


// function agregarAlCarrito(evento) {
//   // Anyadimos el Nodo a nuestro carrito
//   carrit.push(evento.target.getAttribute('marcador'))
//   // Actualizamos el carrito 
//   renderizarCarritoss()
// }

// function renderizarCarritoss() {
//   // Vaciamos todo el html
//   carrit.textContent = '';
//   // Quitamos los duplicados
//   const carritoSinDuplicados = [...new Set(carrit)];
//   // Generamos los Nodos a partir de carrito
//   carritoSinDuplicados.forEach((item) => {
//       // Obtenemos el item que necesitamos de la variable base de datos
//       const miItem = baseDeDatos.filter((itemBaseDatos) => {
//           // ¿Coincide las id? Solo puede existir un caso
//           return itemBaseDatos.id === parseInt(item);
//       });
//       // Cuenta el número de veces que se repite el producto
//       const numeroUnidadesItem = carrit.reduce((total, itemId) => {
//           // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
//           return itemId === item ? total += 1 : total;
//       }, 0);
//       // Creamos el nodo del item del carrito
//       const miNodo = document.createElement('li');
//       miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
//       miNodo.textContent = `${miItem[0].imagen} ${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
//       // Boton de borrar
//       const miBoton = document.createElement('button');
//       miBoton.classList.add('btn', 'btn-danger', 'mx-5');
//       miBoton.textContent = 'X';
//       miBoton.style.marginLeft = '1rem';
//       miBoton.dataset.item = item;
//       miBoton.addEventListener('click', borrarItemCarrito);
//       // Mezclamos nodos
//       miNodo.appendChild(miBoton);
//       section.appendChild(miNodo);
//   });
//   // Renderizamos el precio total en el HTML
//   DOMtotal.textContent = calcularTotal();
// }

// /**
// * Evento para borrar un elemento del carrito
// */
// function borrarItemCarrito(evento) {
//   // Obtenemos el producto ID que hay en el boton pulsado
//   const id = evento.target.dataset.item;
//   // Borramos todos los productos
//   carrit = carrit.filter((carritoId) => {
//       return carritoId !== id;
//   });
//   // volvemos a renderizar
//   renderizarCarritoss();
// }

// /**
// * Calcula el precio total teniendo en cuenta los productos repetidos
// */
// function calcularTotal() {
//   // Recorremos el array del carrito 
//   return carrit.reduce((total, item) => {
//       // De cada elemento obtenemos su precio
//       const miItem = baseDeDatos.filter((itemBaseDatos) => {
//           return itemBaseDatos.id === parseInt(item);
//       });
//       // Los sumamos al total
//       return total + miItem[0].precio;
//   }, 0);
// }

// /**
// * Varia el carrito y vuelve a dibujarlo
// */
// function vaciarCarrito() {
//   // Limpiamos los productos guardados
//   carrit = [];
//   // Renderizamos los cambios
//   renderizarCarritoss();
// }

// // Eventos
// DOMbotonVaciar.addEventListener('click', vaciarCarrito);



// renderizarProductos()
// renderizarCarritoss()






// function renderizarCarritoss(){
//   carrit.textContent = ''
//   const carritoSinDuplicados = [...new Set(carrit)];
//   carritoSinDuplicados.forEach((valor) => {
//     const miItem = baseDeDatos.filter((itemBaseDatos) => {
//       // ¿Coincide las id? Solo puede existir un caso
//       return itemBaseDatos.id === parseInt(valor);
//   });
//   const numeroUnidadesItem = carrit.reduce((total, itemId) => {
//     // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
//     return itemId === valor ? total += 1 : total;
// }, 0);
//  // Creamos el nodo del item del carrito
// const miNodo = document.createElement('li');
// miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
// miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
// section.appendChild(miNodo);
// const miBoton = document.createElement('button');
//         miBoton.classList.add('btn', 'btn-danger', 'mx-5');
//         miBoton.textContent = 'X';
//         miBoton.style.marginLeft = '1rem';
//         miBoton.dataset.valor = valor;
//         miBoton.addEventListener('click', borrarItemCarrito);
//         // Mezclamos nodos
//         miNodo.appendChild(miBoton);
//         section.appendChild(miNodo);
// })
// DOMtotal.textContent = calcularTotal();

// };


// function borrarItemCarrito(evento) {
//   // Obtenemos el producto ID que hay en el boton pulsado
//   const id = evento.target.dataset.valor;
//   // Borramos todos los productos
//   carrit = carrit.filter((carritoId) => {
//       return carritoId !== id;
//   });
//   // volvemos a renderizar
//   renderizarCarritoss();
// }



// function calcularTotal() {
//   // Recorremos el array del carrito 
//   return carrit.reduce((total, item) => {
//       // De cada elemento obtenemos su precio
//       const miItem = baseDeDatos.filter((itemBaseDatos) => {
//           return itemBaseDatos.id === parseInt(item);
//       });
//       // Los sumamos al total
//       return total + miItem[0].precio;
//   }, 0);
// }


// DOMbotonVaciar.addEventListener('click', vaciarCarrito);
// function vaciarCarrito() {
//   // Limpiamos los productos guardados
//   carrit = [];
//   // Renderizamos los cambios
//   renderizarCarritoss();
// }

// DOMbotonVaciar.addEventListener('click', vaciarCarrito);



