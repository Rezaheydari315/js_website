let signup=document.querySelector('#click_sign')
let basket=document.querySelector('#icon_basket')
let product=document.querySelectorAll('#box_section_top')
signup.addEventListener("click" ,function (event) {
    event.preventDefault()
    let activit=event.target
    
    location.href='http://127.0.0.1:5500/sign%20up/sign-up.html'
})


basket.addEventListener('click' ,function(event) {
    event.preventDefault()
    location.href='http://127.0.0.1:5500/basket/basket.html'
})
 
function addpro(event) {
    let id_product=event.getAttribute('value')
    let namepro=event.getAttribute('name')
    
   localStorage.setItem(`${namepro}` ,JSON.stringify(namepro))
   swal({
    title: "add to basket",
    icon: "success",
  })
}