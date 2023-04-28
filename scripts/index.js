window.onscroll = function() {
var navbar2 = document.getElementById("navbarr");
var navbar1 = document.querySelector(".navbar");
if (this.scrollY > 20)
{
navbar2.classList.add("navbar-scrolled");
}
else
{
navbar2.classList.remove("navbar-scrolled");
}
};