const $contenedor = document.getElementById("contenedor")

setTimeout(() => {
$contenedor.classList.add("close")
}, 3000)


const baseDeDatos = 
[
  {
  id: 1,
  nombre: 'Monstera Deliciosa',
  precio: "$450",
  imagen: "assets/images/productosImgB/AnyConv.com__Monstera Deliciosa.png",
  categoria: "Plantas",
  descripcion: "Conocida también como Costilla de Adán, la Monstera Deliciosa es famosa. por los hoyos que se hacen naturalmente en sus hojas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC"
},
{
  id: 2,
  nombre: 'Amoena',
  precio: "$400",
  imagen: 'assets/images/productosImgB/Amoena.png',
  categoria: "Plantas",
  descripcion: "Es una planta muy querida por los amantes de las plantas ya que soporta muy bien los espacios sombríos.",
  ciudados: "☀ Sombra, semisombra (luz indirecta) 💧Riego 1 vez por semana 🌡20 - 35ºC."
},
{
  id: 3,
  nombre: 'Dracena Piña',
  precio: "$120",
  imagen: 'assets/images/productosImgB/AnyConv.com__Dracena Piña.png',
  categoria: "Plantas",
  descripcion: "Es una planta tropical originaria del Sureste de África. Crece muy lentamente.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 4,
  nombre: 'Cactus Órgano Chico',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Cactus Órgano Chico.png',
  categoria: "Plantas",
  descripcion: "El Órgano es de los cactus más conocidos del mundo, pertenece a la familia de las cactáceas",
  ciudados: "Pleno sol y ventilación Regar abundantemente 1 vez por mes 7 - 30ºC."
},
{
  id: 5,
  nombre: 'Sansevieria',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sansevieria.png',
  categoria: "Plantas",
  descripcion: "La Sansevieria es mejor conocida como Espada o Lengua de Tigre. La puedes reconocer por sus largas hojas.",
  ciudados: "Soporta sol directo, indirecto, semisombra y sombra. Riego 1 vez por semana (o cada 15 días si no le da sol)16 - 32ºC."
},
{
  id: 6,
  nombre: 'Ficus Pandurata Mediano',
  precio: "$800",
  imagen: 'assets/images/productosImgB/AnyConv.com__Ficus Pandurata Mediano.png',
  categoria: "Plantas",
  descripcion: "El Ficus Pandurata se ha vuelto famoso por sus hojas de verde vibrante. Prefieren lugares muy luminosos .",
  ciudados: "Mucha luz indirecta Regar cada 3 semanas 15 - 30ºC."
},
{
  id: 7,
  nombre: 'Hule grande',
  precio: "$700",
  imagen: 'assets/images/productosImgB/AnyConv.com__Hule grande.png',
  categoria: "Plantas",
  descripcion: "También conocido como Ficus Elástica, este árbol es originario de Asia. Se ha convertido en uno. de los favoritos.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 20 - 30ºC."
},
{
  id: 8,
  nombre: 'Monstera Adansonii Chica',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Monstera Adansonii Chica.png',
  categoria: "Plantas",
  descripcion: "Conocida también como Esqueleto, es una planta muy querida gracias a las perforaciones naturales de sus hojas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 9,
  nombre: 'Olivo',
  precio: "$600",
  imagen: 'assets/images/productosImgB/AnyConv.com__Olivo.png',
  categoria: "Plantas",
  descripcion: "Es el emblema mediterráneo por excelencia. Es un árbol muy querido.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 10,
  nombre: 'Palo de Brasil',
  precio: "$450",
  imagen: 'assets/images/productosImgB/AnyConv.com__Palo de Brasil.png',
  categoria: "Plantas",
  descripcion: "El Palo de Brasil o también conocido como Palo de Agua, es una planta tropical que se adapta bien.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 11,
  nombre: 'Peperomia',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Peperomia.png',
  categoria: "Plantas",
  descripcion: "Es una planta originaria del norte de Sudamérica. Le gustan los espacios sombríos.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 12,
  nombre: 'Rhipsalis',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Rhipsalis.png',
  categoria: "Plantas",
  descripcion: "Aunque no parezca, Rhipsalis pertenece a la familia de las cactáceas, o sea, ES UN CACTUS.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 13,
  nombre: 'Sábila',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sábila.png',
  categoria: "Plantas",
  descripcion: "La sábila es una planta muy apreciada ya que tiene muchas propiedades que benefician nuestra salud.",
  ciudados: "Mucha luz indirecta o directa Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 14,
  nombre: 'Sapito Chico',
  precio: "$300",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sapito Chico.png',
  categoria: "Plantas",
  descripcion: "Su nombre científico es Maranta Leuconera, es una planta siempre verde que tiene la particularidad de dejar sus hojas erguidas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 15,
  nombre: 'Teléfono Chico',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Teléfono Chico.png',
  categoria: "Plantas",
  descripcion: "Su nombre científico es Potos, es una planta trepadora que lo hace gracias a sus raíces.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 16,
  nombre: 'Zamioculca',
  precio: "$900",
  imagen: 'assets/images/productosImgB/AnyConv.com__Zamioculca.png',
  categoria: "Plantas",
  descripcion: "La Zamioculca se caracteriza por sus hojas verdes cerosas sobre la superficie de su mezcla para macetas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 17,
  nombre: 'Orquídea Blanca',
  precio: "$500",
  imagen: 'assets/images/productosImgB/AnyConv.com__Orquídea Blanca.png',
  categoria: "Plantas",
  descripcion: "Orquídea blanca de dos varas.",
  ciudados: "AL IGUAL QUE SUCEDE CON EL RESTO DE LAS PLANTAS CRASAS, NO TE EXCEDAS EN SU RIEGO, SOBRE TODO DE OTOÑO A PRIMAVERA."
},
{
  id: 18,
  nombre: 'Palma Areca',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Palma Areca.png',
  categoria: "Plantas",
  descripcion: "Orquídea blanca de dos varas.",
  ciudados: "La palmera Areca, es una planta muy popular en la decoración de interiores."
},
{
  id: 19,
  nombre: 'Helecho',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Helecho.png',
  categoria: "Plantas",
  descripcion: "Es una planta muy llamativa por sus frondosas ramas. Son originarios de África, Australia.",
  ciudados: "Mucha luz indirecta Regar 2 o 3 veces por semana 15 - 20ºC."
},
{
  id: 20,
  nombre: 'Aralia',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Aralia.png',
  categoria: "Plantas",
  descripcion: "La Aralia es una planta de interior muy resistente. La aralia es una superviviente nata y muy versátil.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 21,
  nombre: 'Lavanda',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Lavanda.png',
  categoria: "Plantas",
  descripcion: "a lavanda toma su nombre del latín lavare (lavar), y se ha utilizado durante siglos para aromatizar aceite de baño y jabones.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 22,
  nombre: 'Romero',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Romero.png',
  categoria: "Plantas",
  descripcion: "Es una de las plantas más utilizadas en el mundo de la salud, alimentación y belleza.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 23,
  nombre: 'Ceropegia Woodii',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Ceropegia Woodii.png',
  categoria: "Plantas",
  descripcion: "También conocida como Cadena de Corazones, es una planta que puede trepar o colgar.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 12 - 20ºC."
},
{
  id: 24,
  nombre: 'Aralia Schefflera',
  precio: "$120",
  imagen: 'assets/images/productosImgB/AnyConv.com__Aralia Schefflera.png',
  categoria: "Plantas",
  descripcion: "La podemos describir como arbusto de hoja perenne que si le realizamos ligeras podas puede mostrarse incluso como un pequeño arbolito.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 25,
  nombre: 'Espada Plateada',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Espada Plateada.png',
  categoria: "Plantas",
  descripcion: "También conocida como Sansevieria craigii, Sansevieria jacquinii y Sansevieria laurentii superba, esta hermosa planta es muy popular como planta de interior.",
  ciudados: "Soporta sol directo, indirecto, semisombra y sombra. Riego 1 vez por semana (o cada 15 días si no le da sol)16 - 32ºC."
},
{
  id: 26,
  nombre: 'Sansevieria Zeylanica Mini',
  precio: "$100",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sansevieria Zeylanica Mini.png',
  categoria: "Plantas",
  descripcion: "La Sansevieria Zeylanica es una de las mejores plantas en temas de purificación del aire.",
  ciudados: "​ Soporta sol directo, indirecto, semisombra y sombra. ​ Riego 1 vez por semana (o cada 15 días si no le da sol) 16 - 32ºC."
},
{
  id: 27,
  nombre: 'Palma Camedor',
  precio: "$150",
  imagen: 'assets/images/productosImgB/AnyConv.com__Palma Camedor.png',
  categoria: "Plantas",
  descripcion: "La Palma Camedor son nativas de las regiones subtropicales y tropicales de las Américas.",
  ciudados: "Mucha luz indirecta Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 28,                                                       
  nombre: 'Olivo Chico',
  precio: "$400",
  imagen: 'assets/images/productosImgB/AnyConv.com__Olivo Chico.png',
  categoria: "Plantas",
  descripcion: "El árbol, así como su fruto, la oliva y su aceite son considerados símbolo sanación y longevidad, resistencia y renovación.",
  ciudados: "Mucha luz directa Regar 1 vez por semana 10 - 24 ºC."
},
{
  id: 29,
  nombre: 'Helecho Nido de Ave',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Helecho Nido de Ave.png',
  categoria: "Plantas",
  descripcion: "El helecho nido de ave es originario de las selvas lluviosas tropicales del norte de Australia.",
  ciudados: "Mucha luz indirecta o sombra Regar 1 o 2 veces por semana 15 - 20ºC."
},
{
  id: 30,
  nombre: 'Helecho Cilantrillo',
  precio: "$200",
  imagen: 'assets/images/productosImgB/AnyConv.com__Helecho Cilantrillo.png',
  categoria: "Plantas",
  descripcion: "El helecho Culantrillo puede medir entre 20 a 40 cm de alto y ancho, Es una planta más bien baja pero frondosa.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 31,
  nombre: 'Zamioculca Mini',
  precio: "$250",
  imagen: 'assets/images/productosImgB/AnyConv.com__Zamioculca Mini.png',
  categoria: "Plantas",
  descripcion: "La Zamioculca se caracteriza por sus hojas verdes cerosas sobre la superficie de su mezcla para macetas y sus grandes rizomas.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 32,
  nombre: 'Pata de Elefante',
  precio: "$700",
  imagen: 'assets/images/productosImgB/AnyConv.com__Pata de Elefante.png',
  categoria: "Plantas",
  descripcion: "Originaria del desierto meridional mexicano, es una planta que tiene la base del tronco muy amplia en donde almacena agua.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 32,
  nombre: 'Peperomia Variegada',
  precio: "$800",
  imagen: 'assets/images/productosImgB/AnyConv.com__Peperomia Variegada.png',
  categoria: "Plantas",
  descripcion: "La Peperomia obtusifolia es una fantástica planta que se puede cultivar durante toda su vida en maceta.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 33,
  nombre: 'Sapito Gris',
  precio: "$850",
  imagen: 'assets/images/productosImgB/AnyConv.com__Sapito Gris.png',
  categoria: "Plantas",
  descripcion: "A esta planta le gusta mucho la luz, pero no el sol directo. Es una gran opción para tenerla en lugares interiores.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 34,
  nombre: 'Orquídea Fucsia',
  precio: "$500",
  imagen: 'assets/images/productosImgB/AnyConv.com__Orquídea Fucsia.png',
  categoria: "Plantas",
  descripcion: "Orquídea Fucsia de dos varas.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
},
{
  id: 35,
  nombre: 'Orquídea Moteada',
  precio: "$500",
  imagen: 'assets/images/productosImgB/AnyConv.com__Orquídea Moteada.png',
  categoria: "Plantas",
  descripcion: "Orquídea moteada de dos varas.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."                      
},
{
  id: 36,
  nombre: 'Mix Suculentas',
  precio: "$520",
  imagen: 'assets/images/productosImgB/AnyConv.com__Mix Suculentas.png',
  categoria: "Plantas",
  descripcion: "Mix Suculentas es el arreglo más colorido de nuestra colección de plantas, pueden variar las especies de suculentas seleccionadas.",
  ciudados: "Semisombra (luz indirecta) Regar 1 vez por semana 10 - 24ºC."
}
]
const primero = document.getElementById('cartaPrueba')
const divisa = '$';

function renderizarProductos (){
  baseDeDatos.forEach((valor) => {
    primero.innerHTML += 
    `<div class="car">
    <img src='${valor.imagen}' alt="" class="product-img">
    <div class="product-detail">
        <span>${valor.nombre}</span>
        <div class="raiting">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>
        </div>
        <p>
        ${valor.descripcion}
        </p>
        <div class="buttons">
            <div class="price">${valor.precio}</div>
            <button class="cart btn">agregar al carrito</button>
            <button class="favourite btn"><i class="far fa-heart"></i></button>
        </div>
    </div>
</div>`

    // const father = document.createElement('div');
    // father.classList.add('col');
    // father.classList.add('mt-3');
    // const fatherSon = document.createElement('container');
    // const miNodo = document.createElement('div');
    // miNodo.classList.add('card1');
    // const miNodoImg = document.createElement('img');
    // miNodoImg.src = `${valor.imagen}`;
    // const miNodoBody = document.createElement('div');
    // miNodoBody.classList.add('con-text')
    // const miNodoTitle = document.createElement('h2');
    // miNodoTitle.textContent = `${valor.nombre}`;
    // const miNodoDescripcion = document.createElement('p');
    // miNodoDescripcion.textContent = `${valor.descripcion}`;
    // const miNodoBoton = document.createElement('button');
    // miNodoBoton.classList.add('btn');
    // miNodoBoton.textContent = `${valor.precio}`;
    // miNodoBoton.setAttribute('marcador', valor.id);
    // miNodoBoton.addEventListener('click', añadirModal)
  
    
    // miNodoDescripcion.appendChild(miNodoBoton)
    // miNodoBody.appendChild(miNodoTitle)
    // miNodoBody.appendChild(miNodoDescripcion)
    // miNodo.appendChild(miNodoImg)
    // miNodo.appendChild(miNodoBody)
    // carrito.appendChild(miNodo)
    // father.appendChild(fatherSon)
    // primero.appendChild(father)

    
})
}
renderizarProductos()

const section = document.getElementById('modal')
let carrit = []
const base = {}


function añadirModal(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrit.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito 
  renderizarModal()
}

function renderizarModal(){
  section.classList.add('modal1--show')
  carrit.textContent = ''
  const carritoSinDuplicados = [...new Set(carrit)];
  carritoSinDuplicados.forEach((valor) => {
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
      // ¿Coincide las id? Solo puede existir un caso
      return itemBaseDatos.id === parseInt(valor);
  });
    const firstDiv = document.createElement('div')
    firstDiv.classList.add('modal__container1')
    const secondDiv = document.createElement('div')
    secondDiv.classList.add('container1')
    const thirdDiv = document.createElement('div')
    thirdDiv.classList.add('bg-img')
    const image = document.createElement('img')
    image.classList.add('bg-img')
    image.src = `${miItem[0].imagen}`
    const fourDiv = document.createElement('div')
    fourDiv.classList.add('content1')
    const fiveDiv = document.createElement('div')
    fiveDiv.classList.add('box-one1')
    const sixDiv = document.createElement('div')
    const botonCerrar = document.createElement('button')
    botonCerrar.textContent = 'X'
    botonCerrar.classList.add('modal-close')
    botonCerrar.setAttribute("onclick", function (){
      const llegue = miItem[0][section]
      llegue.classList.remove('modal1--show')
      alert('Hi')
    });
    const title = document.createElement('h4')
    title.classList.add('text1')
    title.textContent = `${miItem[0].nombre}`
    const precio = document.createElement('p')
    precio.classList.add('sub-text1')
    precio.textContent = `${miItem[0].precio}`
    const boxTwo = document.createElement('div')
    boxTwo.classList.add('box-two1')
    const cuidados = document.createElement('h4')
    cuidados.classList.add('text1')
    cuidados.textContent = `Cuidados`
    const descripcionCuidados = document.createElement('p')
    descripcionCuidados.classList.add('sub-text1')
    descripcionCuidados.textContent = `${miItem[0].ciudados}`
    const agregarCarrito = document.createElement('button');
    agregarCarrito.classList.add('btn');
    agregarCarrito.textContent = 'Agregar al carrito'
    agregarCarrito.addEventListener('onclick', alert('me han pinchado'))

    section.appendChild(firstDiv)
    firstDiv.appendChild(secondDiv)
    secondDiv.appendChild(thirdDiv)
    thirdDiv.appendChild(image)
    thirdDiv.appendChild(fourDiv)
    fourDiv.appendChild(fiveDiv)
    fiveDiv.appendChild(sixDiv)
    sixDiv.appendChild(botonCerrar)
    sixDiv.appendChild(title)
    sixDiv.appendChild(precio)
    fourDiv.appendChild(boxTwo)
    boxTwo.appendChild(cuidados)
    boxTwo.appendChild(descripcionCuidados)
    boxTwo.appendChild(agregarCarrito)

    
    
}
)
};
const cerrarModal = (modal) => {
  document.getElementById(modal).classList.remove("modal1--show");
};


// Carritos
function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito 
  renderizarProductos();

}
function renderizarCarrito() {
  // Vaciamos todo el html
  carrito.textContent = '';
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          // ¿Coincide las id? Solo puede existir un caso
          return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? total += 1 : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
      carritodrop.appendChild(`${miNodo}`)
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
  });
  // Renderizamos el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}




