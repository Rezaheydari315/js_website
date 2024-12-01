let home = document.querySelector("#click_home")
let signup = document.querySelector("#click_sign")
let name = document.querySelector("#login_name")
let password = document.querySelector("#login_password")
let loginbtn = document.querySelector("#button_login_footer")

let valname = name.value
let valpass = password.value
let localinfo = localStorage.getItem(`'${valname}'`)

home.addEventListener('click', function (event) {
    event.preventDefault()
    location.href = 'http://127.0.0.1:5500/home/index.html'
})
signup.addEventListener('click', function (event) {
    event.preventDefault()
    location.href = 'http://127.0.0.1:5500/sign%20up/sign-up.html'
})

function login() {
    loginbtn.addEventListener('click', function (event) {
        event.preventDefault()
        let valname = name.value
        let valpass = password.value

        let localinfo = localStorage.getItem(`'${valname}'`)

        if (JSON.parse(localinfo).valname === valname && JSON.parse(localinfo).valpass === valpass) {
            swal({
                title: "Success",
                text: `${'Welcome'}`,
                icon: "success",
            }).then(function (res) {
                if (res === true) {
                    location.href = 'http://127.0.0.1:5500/home/index.html'
                }
            })
        } 
        else {
            if (JSON.parse(localinfo).valname === valname && JSON.parse(localinfo).valpass !== valpass) {
                swal({
                    title: "incorrect",
                    icon: "error",
                })
            }
        }


    })
}
login()