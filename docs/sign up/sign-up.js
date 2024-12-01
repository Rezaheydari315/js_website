let home=document.querySelector("#click_home")
home.addEventListener('click' ,function (event) {
    event.preventDefault()
   location.href='http://127.0.0.1:5500/home/index.html'
})
 
let name=document.querySelector('#sign_up_name') 
let emailandnumber=document.querySelector('#sign_up_email_number')
let password=document.querySelector("#sign_up_password")
let submit=document.querySelector('#sign_up_submit')
let login=document.querySelector("#sign_up_footer_link") 

 function  signup () {
     submit.addEventListener('click' ,function (event) {
        event.preventDefault()
       
       let valname=name.value
       let valemailandnumber=emailandnumber.value
       let valpass=password.value
        
       let info={
        valname ,valemailandnumber ,valpass
       }

       
       if (info.valname!== '' && info.valemailandnumber!=='' && info.valpass!=='') {
        localStorage.setItem(`'${valname}'`,JSON.stringify(info))
        swal({
            title: "Success",
            icon: "success",
          }).then(function (res) {
            if(res===true){
                name.value=''
                emailandnumber.value=''
                password.value=''
                location.href='http://127.0.0.1:5500/login/login.html'
            }
           
          })
       }
     
       
     })
}
signup()

login.addEventListener('click' ,function (event) {
   event.preventDefault()
  location.href='http://127.0.0.1:5500/login/login.html'
})