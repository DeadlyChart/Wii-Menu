

// constantes
let channelsVirtual = [];
const iniciotienda = document.getElementById ("iniciotienda")
const buttonvolver = document.getElementById("buttonvolver")
const buttonvirtual = document.getElementById("buttonvirtual")
const wiiback = document.getElementById("wii-go-back")
const bchicol = document.getElementById("bchicol")
const bchicor = document.getElementById("bchicor")
const bchicom = document.getElementById("bchicom")
const wiipoints = document.getElementById("wiipoints")
const derecha1 = document.getElementById("derecha1")
const medio1 = document.getElementById("medio1")
const izquierda1 = document.getElementById ("izquierda1")
const popular = document.getElementById ("popular")
const newest = document.getElementById ("newest")
const category = document.getElementById ("category")
const title = document.getElementById ("title")
const backVirtual = document.getElementById ("backVirtual")
const backVirtualBut = document.getElementById ("backVirtualBut")
const contenedorPopVirt = document.getElementById ("contenedorPopVirt")
const popularVirt = document.getElementById ("popularVirt")
const contenedorCanales = document.getElementById("contenedorPopVirt");
const pestaña = document.getElementById("pestañaCompra");
const carroTxt = document.getElementById("carroTxt")
const pestañaCompra = document.getElementById("pestañaCompra")


// funcionalidad tienda
buttonvolver.addEventListener("click", () =>{
    
    setTimeout(() => {
        window.location.href = "file:///C:/Users/lucac/Documents/PROYECTO%20FINAL%20PROGRAMACION/index.html";
    }, 1000);
});
buttonvirtual.addEventListener("click", () =>{
buttonvolver.style.opacity ="0%"
buttonvirtual.style.pointerEvents = "none"
wiiback.style.opacity ="0%"
wiiback.style.pointerEvents ="none"
bchicol.style.opacity ="0%"
bchicor.style.opacity ="0%"
bchicom.style.opacity ="0%"
wiipoints.style.opacity ="0%"
derecha1.style.opacity ="0%"
medio1.style.opacity ="0%"
 izquierda1.style.opacity ="0%"
 popular.style.opacity ="100%"
newest.style.opacity ="100%"
category.style.opacity ="100%"
title.style.opacity ="100%"
 backVirtual.style.opacity ="100%"
popularVirt.style.pointerEvents="all"
popularVirt.style.opacity="100%"
backVirtualBut.style.pointerEvents="all"
carroTxt.style.opacity="0%"
    
});
// antes de siquiera decirlo si, me di cuenta tarde de lo facil que seria poner todo en divs y simplemente llamar 7 u 8 divs en vez de todo este horror pero por alguna razon no lo logre, lee los id individuales o a un id de un div padre asi que por facilidad preferi esto
// aca inicia la virtual, una tienda para juegos de wii que estaban en anteriores consolas
backVirtualBut.addEventListener("click", () =>{
buttonvolver.style.opacity ="100%"
buttonvirtual.style.pointerEvents = "all"
wiiback.style.opacity ="100%"
wiiback.style.pointerEvents ="all"
bchicol.style.opacity ="100%"
bchicor.style.opacity ="100%"
bchicom.style.opacity ="100%"
wiipoints.style.opacity ="100%"
derecha1.style.opacity ="100%"
medio1.style.opacity ="100%"
 izquierda1.style.opacity ="100%"
 popular.style.opacity ="0%"
newest.style.opacity ="0%"
category.style.opacity ="0%"
title.style.opacity ="0%"
 backVirtual.style.opacity ="0%"
popularVirt.style.pointerEvents="none"
popularVirt.style.opacity="0%"
backVirtualBut.style.pointerEvents="none"
carroTxt.style.opacity = "100%"
contenedorPopVirt.style.opacity = "0%"
contenedorPopVirt.style.pointerEvents = "none"
pestañaCompra.style.opacity = "0%"
pestañaCompra.style.pointerEvents="none"
contenedorCarro.style.opacity = "0%"
contenedorCarro.style.pointerEvents="none"

});
popularVirt.addEventListener("click", () =>{
    popular.style.opacity ="0%"
    newest.style.opacity ="0%"
    category.style.opacity ="0%"
    title.style.opacity ="0%"
    popularVirt.style.pointerEvents="none"
    contenedorPopVirt.style.pointerEvents="all"
    popularVirt.style.opacity="0%"
    contenedorPopVirt.style.opacity="100%"
    

});

async function cargarCanales() {
    const respuesta = await fetch("../data/channels.json")
try{
        
        if (!respuesta.ok){
            throw new Error("bruh")
            
        }
    const data = await respuesta.json();
({ channelsVirtual } = data);
renderizarCarrito();
      contenedorCanales.innerHTML = channelsVirtual.map((canal, indice) => `
            <div id="channel${indice + 1}" class="canal-virtual">

                <img
                    class="channel-board"
                    src="../img/B_04_softbanner_a.gif"
                    alt=""
                >

                <div class="canal-informacion">
                    <img
                        class="canal-imagen"
                        src="${canal.img}"
                        alt="${canal.canal}"
                    >
                   <button class="canales-boton-shop" data-id="${canal.id}"></button>
                    <div class="canal-texto">
                        <h2>${canal.canal}</h2>
                        <p>${canal.empresa}</p>
                        <p>${canal.consola}</p>
                        
                    </div>
                </div>

            </div>
        `).join("");
    }
    
catch(error){
    
}finally{
    
}

}


cargarCanales();

contenedorCanales.addEventListener("click", (event) => {
   const boton = event.target.closest(".canales-boton-shop")
const id = Number(boton.dataset.id);
idSeleccionado = id;
    if (!boton) return;
   
    
    const juego = channelsVirtual.find(canal => canal.id === id)
 if (!juego) return;

   Nombrejuego.textContent = juego.canal
   empresa.textContent = juego.empresa
   genero.textContent = juego.categoria
   fecha.textContent = juego.release
   players.textContent = juego.players
   const enCarrito = carrito.some(item => item.id === juego.id);
   

if (juegosComprados.includes(juego.id)) {
    buyAbut.style.pointerEvents = "none"
    precio.textContent = "Comprado"
} else if (enCarrito) {
    precio.textContent = "En carrito"
} else {
    precio.textContent = `${juego.precio} Wii Points`
}
    
   compraimg.src = juego.img
   contenedorCanales.style.opacity ="0%"
   contenedorCanales.style.pointerEvents ="none"
   pestaña.style.opacity="100%"
   pestaña.style.pointerEvents="auto"

   
});


    
const Nombrejuego = document.getElementById ("Nombre-juego")
const empresa = document.getElementById ("empresa")
const genero = document.getElementById ("genero")
const fecha = document.getElementById ("fecha")
const players = document.getElementById ("players")
const precio = document.getElementById ("precio")
const compraimg = document.getElementById ("compraimg")
const buyAbut = document.getElementById("buyAbut");
let idSeleccionado = null;
let juegosComprados = JSON.parse(
    localStorage.getItem("juegosComprados")
) || [];

buyAbut.addEventListener("click", () => {
comprar()
precio.textContent = "En carrito"
precio.style.left = "43%"
})



function comprar() {
    const juego = channelsVirtual.find(
        canal => canal.id === idSeleccionado
    );

    if (!juego) return;

    const existente = carrito.find(
        item => item.id === juego.id
    )

    if(existente)return

    carrito.push({
        id: juego.id,
        cantidad: 1
    })

   guardarCarrito()
   renderizarCarrito()
   
}


const carro = document.getElementById("carro");
const totalCarrito = document.getElementById("totalCarrito")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
function renderizarCarrito() {
    
    carro.innerHTML = carrito.map(item => {
        const juego = channelsVirtual.find(
            canal => canal.id === item.id
        );

        if (!juego) return "";

         return `
         <div class="producto-carrito">
                <img src="${juego.img}" alt="${juego.canal}">

                <div>
                    <h3>${juego.canal}</h3>
                    <p>${juego.precio} Wii Points</p>
                    <p>Cantidad: ${item.cantidad}</p>
                </div>
            </div>`
            
        
    }).join("")
     const total = carrito.reduce((acumulado, item) => {
        const juego = channelsVirtual.find(
            canal => canal.id === item.id
        );

        if (juego) {
          return acumulado + (juego.precio * item.cantidad);
         } else {
           return acumulado;
         }
    }, 0);

    totalCarrito.textContent = `${total} Wii Points`;
}

const carroBut = document.getElementById ("carroBut")
const contenedorCarro = document.getElementById ("contenedorCarro")
carroBut.addEventListener ("click", () =>{
contenedorCarro.style.opacity = "100%"
contenedorCarro.style.pointerEvents = "all"
iniciotienda.style.pointerEvents ="none"
backVirtual.style.opacity="100%"
backVirtualBut.style.pointerEvents = "all"


buttonvolver.style.opacity ="0%"
buttonvirtual.style.pointerEvents = "none"
wiiback.style.opacity ="0%"
wiiback.style.pointerEvents ="none"
bchicol.style.opacity ="0%"
bchicor.style.opacity ="0%"
bchicom.style.opacity ="0%"
wiipoints.style.opacity ="0%"
derecha1.style.opacity ="0%"
medio1.style.opacity ="0%"
 izquierda1.style.opacity ="0%"

})
const vaciarCarrito = document.getElementById ("vaciarCarrito")
vaciarCarrito.addEventListener("click", () =>
{
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
})
const mensajeCompra = document.getElementById("mensajeCompra");
const confirmarCompra = document.getElementById ("confirmarCompra")
confirmarCompra.addEventListener("click", () =>{
     if (carrito.length === 0) {
        mensajeCompra.textContent = "El carrito está vacío.";
        return;
    }
    carrito.forEach(item => {
        if (!juegosComprados.includes(item.id)) {
            juegosComprados.push(item.id);
            Swal.fire("Compra exitosa" );
            
        }
    });

    localStorage.setItem(
        "juegosComprados",
        JSON.stringify(juegosComprados)
    );
 carrito = [];
    guardarCarrito();
    renderizarCarrito();
    if (idSeleccionado !== null &&
        juegosComprados.includes(idSeleccionado)) {
        precio.textContent = "Comprado";
        precio.style.left = "39%";
    }

    mensajeCompra.textContent = "¡Compra realizada con éxito!";
})
precio.textContent