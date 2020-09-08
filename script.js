// document.getElementById('mobile-menu').addEventListener('click',()=>{
//     alert("clickedf")
//     document.getElementById('.mobile-menu').style.display='block'
// })
var backdrop= document.getElementById('backdrop');

var mobile_menu_bar= document.getElementById('mobile-bar');
var control= document.getElementById('mobile-menu');
mobile_menu_bar.addEventListener('click',()=>{
        control.style.display="block"
        backdrop.style.display="block"

})
backdrop.addEventListener('click',()=>{

    control.style.display="none"
     
})

