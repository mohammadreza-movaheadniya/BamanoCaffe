let themeIcon = document.querySelectorAll(".toggle-theme");
let submenu = document.querySelector(".submenu");
let chevronDown = document.getElementById("chevronDown");
let closeBtnMenu = document.getElementById("Xmark");
let mobileMenu = document.getElementById("mobileMenu");
let overlay=document.querySelector(".overlay")
let hambergerIcon=document.getElementById("hambergerIcon")
let closeIconCart=document.getElementById("Xmark-Cart")
let mobileCart=document.getElementById("MobileCart")
let shoppingCartIcon=document.getElementById("shoppingCartIcon")

themeIcon.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
chevronDown.addEventListener("click", (e) => {
e.currentTarget.parentElement.classList.toggle("text-orange-300");
submenu.classList.toggle("submenu--open");
}
)
let closeBtnMenuHandel=()=>{
  mobileMenu.classList.remove("right-0")
  mobileMenu.classList.add("-right-64")
  overlay.classList.add("invisible","hidden")
}
let openBtnMenuHandel=()=>{
  mobileMenu.classList.add("right-0")
  mobileMenu.classList.remove("-right-64")
  overlay.classList.remove("invisible","hidden")
}
closeBtnMenu.addEventListener("click",closeBtnMenuHandel)
overlay.addEventListener("click",closeBtnMenuHandel)
hambergerIcon.addEventListener("click",openBtnMenuHandel)
closeIconCart.addEventListener("click",()=>{
  mobileCart.classList.remove("left-0")
  mobileCart.classList.add("-left-64")
  overlay.classList.add("invisible","hidden")
})
shoppingCartIcon.addEventListener("click",()=>{
  mobileCart.classList.add("left-0")
  mobileCart.classList.remove("-left-64")
  overlay.classList.remove("invisible","hidden")
  overlay.addEventListener("click", ()=>{
    mobileCart.classList.remove("left-0")
    mobileCart.classList.add("-left-64")
    overlay.classList.add("invisible","hidden")
  })
})