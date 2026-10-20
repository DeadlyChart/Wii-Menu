history.scrollRestoration = "manual";
// const
const Channel3 = document.getElementById("channel3")
const BlackBg1 = document.getElementById("BlackBg1")
const web = document.getElementById("web")
const ShopGif = document.getElementById("ShopGif")
const patron1 = document.getElementById("patron1")
const play1 = document.getElementById("play1")
const close1 = document.getElementById("close1")
const btn1r = document.getElementById("btn1r")
const btn2r = document.getElementById("btn2r")
const btn1l = document.getElementById("btn1l")
const btn2l = document.getElementById("btn2l")
const btn1m = document.getElementById("btn1m")
const btn2m = document.getElementById("btn2m")
const buttonvolver = document.getElementById("buttonvolver")
const LoginBut = document.getElementById("Login-But")
const discoLog = document.getElementById("discoLog")
const SignInBut = document.getElementById("SignIn-But")
const Signin = document.getElementById("Signin")
const Login = document.getElementById("Login")
const consola = document.getElementById("consola")
const loginFondo = document.getElementById("loginFondo")
const crearCuenta = document.getElementById("crearCuenta")
const logearCuenta = document.getElementById("logearCuenta")
const eject =document.getElementById("eject")
const ejectbut =document.getElementById("ejectbut")

// var

//tienda online click event

Channel3.addEventListener("click", () =>{
    BlackBg1.style.opacity = "100%"
    web.style.transformOrigin = "68% 10%";
    web.style.transform = "scale(3)";
    ShopGif.style.opacity ="100%"
    ShopGif.style.zIndex = "11"
    patron1.style.opacity ="100%"
    btn1l.style.opacity ="100%"
    btn1m.style.opacity ="100%"
    btn1r.style.opacity ="100%"
    btn2l.style.opacity ="100%"
    btn2r.style.opacity ="100%"
    btn2m.style.opacity ="100%"

    

})
close1.addEventListener("click", () =>{
   BlackBg1.style.opacity = "0%"
    web.style.transformOrigin = "0% 0%";
    web.style.transform = "none";
    ShopGif.style.opacity ="0%"
    ShopGif.style.zIndex = "11"
    patron1.style.opacity ="0%"
    btn1l.style.opacity ="0%"
    btn1m.style.opacity ="0%"
    btn1r.style.opacity ="0%"
    btn2l.style.opacity ="0%"
    btn2r.style.opacity ="0%"
    btn2m.style.opacity ="0%"
})
play1.addEventListener("click", () =>{
    ShopGif.style.opacity ="0%"
    ShopGif.style.zIndex = "11"
    patron1.style.opacity ="0%"
    btn1l.style.opacity ="0%"
    btn1m.style.opacity ="0%"
    btn1r.style.opacity ="0%"
    btn2l.style.opacity ="0%"
    btn2r.style.opacity ="0%"
    btn2m.style.opacity ="0%"
    setTimeout(() => {
        window.location.href = "file:///C:/Users/lucac/Documents/PROYECTO%20FINAL%20PROGRAMACION/pages/shop.html";
    }, 1000);
});

LoginBut.addEventListener("click", () =>{
discoLog.style.left ="80%"
LoginBut.style.opacity="0%"
SignInBut.style.opacity="0%"
Login.style.opacity="0%"
Signin.style.opacity="0%"
logearCuenta.style.opacity="100%"
eject.style.opacity="100%"
SignInBut.style.pointerEvents="none"

})
SignInBut.addEventListener("click", () =>{
discoLog.style.left ="80%"
LoginBut.style.opacity="0%"
SignInBut.style.opacity="0%"
Login.style.opacity="0%"
Signin.style.opacity="0%"
crearCuenta.style.opacity="100%"
eject.style.opacity="100%"
LoginBut.style.pointerEvents="none"


})
ejectbut.addEventListener("click", () =>{
discoLog.style.left ="-10%"
LoginBut.style.opacity="100%"
SignInBut.style.opacity="100%"
Login.style.opacity="100%"
Signin.style.opacity="100%"
crearCuenta.style.opacity="0%"
eject.style.opacity="0%"
LoginBut.style.pointerEvents="all"
logearCuenta.style.opacity="0%"
SignInBut.style.pointerEvents="all"

})

// formulario super complejo para mi cabeza asi que lo escribi todo de una lol
const formulario = document.getElementById("crearCuenta")
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const password = document.getElementById("password")
const formularioLog = document.getElementById("logearCuenta")
const nombreLog = document.getElementById("nombreSign")
const emailLog = document.getElementById("emailSign")
const passwordLog = document.getElementById("passwordSign")
const Nombre = localStorage.getItem ("Nombre")
const Email = localStorage.getItem ("Email")
const Password = localStorage.getItem ("Password")


formulario.addEventListener("submit", (event) => {
    event.preventDefault
    localStorage.setItem("Nombre", nombre.value)
    localStorage.setItem("Email", email.value)
    localStorage.setItem("Password", password.value)

})
formularioLog.addEventListener("submit", (event) =>{
    
    
    event.preventDefault()
    if(nombreLog.value == Nombre, emailLog.value == Email, passwordLog.value == Password) {
consola.style.opacity="0%"
loginFondo.style.opacity="0%"
loginFondo.style.pointerEvents="none"
LoginBut.style.opacity="0%"
SignInBut.style.opacity="0%"
Login.style.opacity="0%"
Signin.style.opacity="0%"
crearCuenta.style.opacity="0%"
eject.style.opacity="0%"
LoginBut.style.pointerEvents="none"
logearCuenta.style.opacity="0%"
SignInBut.style.pointerEvents="none"
sessionStorage.setItem("logeado", "true");
event.stopPropagation();
    event.preventDefault()

    }
    else{
        alert("bro?")
    event.preventDefault()
event.stopPropagation();


    }
})
const logeado = sessionStorage.getItem("logeado")
if(logeado === "true"){
consola.style.opacity="0%"
discoLog.style.opacity="0%"
loginFondo.style.opacity="0%"
loginFondo.style.pointerEvents="none"
LoginBut.style.opacity="0%"
SignInBut.style.opacity="0%"
Login.style.opacity="0%"
Signin.style.opacity="0%"
crearCuenta.style.opacity="0%"
eject.style.opacity="0%"
LoginBut.style.pointerEvents="none"
logearCuenta.style.opacity="0%"
SignInBut.style.pointerEvents="none"
}
else{
discoLog.style.opacity="100%"
}