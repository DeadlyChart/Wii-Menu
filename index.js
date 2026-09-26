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
        window.location.href = "pages\shop.html";
    }, 1000);
});

