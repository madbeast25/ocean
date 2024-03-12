var section=document.querySelector("section");

window.addEventListener("scroll",function(){
    var value=this.window.scrollY;
    section.style.clipPath= "circle("+ value * 2.3 +"px at left center)"
})