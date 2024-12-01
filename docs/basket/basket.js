let home = document.querySelector("#click_home")
let tableheader = document.querySelector("#table_basket_header")
let priceAAll = document.querySelector("#price_All")

home.addEventListener('click', function (event) {
    event.preventDefault()
    location.href = 'http://127.0.0.1:5500/home/index.html'
})
let signup = document.querySelector("#click_sign")
signup.addEventListener('click', function (event) {
    event.preventDefault()
    location.href = 'http://127.0.0.1:5500/sign%20up/sign-up.html'
})



let product = [
    { name: "monitor", image: '../image/product_monitor/db5174aff99bb9337d2dc9598a0b44e4.png', price: 25_000 },
    { name: "keyboard", image: '../image/product_keyboard/8cc24eeff489863523b63971c3ff8e4a.png', price: 48_000 },
    { name: "gamepad", image: '../image/product_daste/50752d55f8b60f2aa2923183dadbc135.png', price: 18_000 },
    { name: "chair", image: '../image/product_chair/273c46e1c3dc0a8915c4b031d0345347.png', price: 66_000 }
]


window.addEventListener('load', function () {


})

let getgamepad = JSON.parse(localStorage.getItem('gamepad'))
let getkeyboard = JSON.parse(localStorage.getItem('keyboard'))
let getmonitor = JSON.parse(localStorage.getItem('monitor'))
let getChair = JSON.parse(localStorage.getItem("chair"))

let numberChair = 1


if (getgamepad === "gamepad") {

    let bbbb = product.find(kas => {
        return kas.name === getgamepad

    })
    function plus(element, price) {
        let numbergamepadElement = element.parentElement.querySelector("#number_product")
        numbergamepad++
        numbergamepadElement.innerHTML = numbergamepad
        let pricegamepadsElemen = element.parentElement.parentElement.querySelector(".product_price")
        pricegamepadsElemen.innerHTML = price * numbergamepad

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) + Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })
       
      
       

    }
    function minus(element, price) {
        let numbergamepadElement = element.parentElement.querySelector("#number_product")
        numbergamepad--
        numbergamepadElement.innerHTML = numbergamepad
        let pricegamepadsElemen = element.parentElement.parentElement.querySelector(".product_price")
        pricegamepadsElemen.innerHTML = price * numbergamepad

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) - Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })

      
        if (numbergamepad < 0) {
            localStorage.removeItem("gamepad")
            swal({
                title: "remove"
            }).then(function () {
                location.reload()
            })

        }
    }
    let sefareshgamepad = []

    sefareshgamepad.push(bbbb)

    let numbergamepad = 0

    sefareshgamepad.map(function (item) {

        tableheader.insertAdjacentHTML('afterend', `<tr class="table_basket_row">
            <td><img class="img_basket" src="${item.image}" alt="">${item.name}</td>
            <td>${item.price}</td>
            <td> <span id="number_product">${numbergamepad}</span> <button onclick="plus(this ,${item.price})">+</button> <button onclick="minus(this ,${item.price})">-</button></td>
            <td class="product_price">${item.price * numbergamepad}</td>
        </tr> `
        )
    })
} else { console.log("دسته تو سبد نیست") }



if (getkeyboard === "keyboard") {
    let proonekeyboard = product.find(function (kas) {
        return kas.name === getkeyboard
    })

    function pluskeyboard(element, price) {
        let numberkeyboardElement = element.parentElement.querySelector("#number_product")
        numberkeyboard++
        numberkeyboardElement.innerHTML = numberkeyboard
        let pricekeyboardsElemen = element.parentElement.parentElement.querySelector(".product_price")
        pricekeyboardsElemen.innerHTML = price * numberkeyboard

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) + Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })
    }
    function minuskeyboard(element, price) {
        let numberkeyboardElement = element.parentElement.querySelector("#number_product")
        numberkeyboard--
        numberkeyboardElement.innerHTML = numberkeyboard
        let pricekeyboardsElemen = element.parentElement.parentElement.querySelector(".product_price")
        pricekeyboardsElemen.innerHTML = price * numberkeyboard

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) - Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })


        if (numberkeyboard < 0) {
            localStorage.removeItem("keyboard")
            swal({
                title: "remove"
            }).then(function () {
                location.reload()
            })

        }
    }

    let sefareshkeyboard = []
    sefareshkeyboard.push(proonekeyboard)
    let numberkeyboard = 0
    sefareshkeyboard.map(function (item) {

        tableheader.insertAdjacentHTML('afterend', `<tr class="table_basket_row">
            <td><img class="img_basket" src="${item.image}" alt="">${item.name}</td>
            <td>${item.price}</td>
            <td> <span id="number_product">${numberkeyboard}</span> <button onclick="pluskeyboard(this ,${item.price})">+</button> <button onclick="minuskeyboard(this ,${item.price})">-</button></td>
            <td class="product_price">${item.price * numberkeyboard}</td>
        </tr> `

        )
    })

} else {
    console.log("کیبورد نیست ")
}



if (getmonitor === "monitor") {
    let proonemonitor = product.find(function (kas) {
        return kas.name === getmonitor
    })

    function plusmonitor(element, price) {
        let numbermonitorElement = element.parentElement.querySelector("#number_product")
        numbermonitor++
        numbermonitorElement.innerHTML = numbermonitor
        let pricemonitorsElemen = element.parentElement.parentElement.querySelector(".product_price")
        pricemonitorsElemen.innerHTML = price * numbermonitor

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) + Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })
    }
    function minusmonitor(element, price) {
        let numbermonitorElement = element.parentElement.querySelector("#number_product")
        numbermonitor--
        numbermonitorElement.innerHTML = numbermonitor
        let pricemonitorsElemen = element.parentElement.parentElement.querySelector(".product_price")
        pricemonitorsElemen.innerHTML = price * numbermonitor

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) - Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })

        if (numbermonitor < 0) {
            localStorage.removeItem("monitor")
            swal({
                title: "remove"

            }).then(function () {
                location.reload()
            })
        }
    }
    let sefareshmonitor = []
    sefareshmonitor.push(proonemonitor)
    let numbermonitor = 0
    sefareshmonitor.map(function (item) {

        tableheader.insertAdjacentHTML('afterend', `<tr class="table_basket_row">
            <td><img class="img_basket" src="${item.image}" alt="">${item.name}</td>
            <td>${item.price}</td>
            <td> <span id="number_product">${numbermonitor}</span> <button onclick="plusmonitor(this ,${item.price})">+</button> <button onclick="minusmonitor(this ,${item.price})">-</button></td>
            <td class="product_price">${item.price * numbermonitor}</td>
        </tr> `

        )
    })

} else { console.log("مانیتور نیست ") }





if (getChair === "chair") {
    let prooneChair = product.find(function (kas) {
        return kas.name === getChair
    })

    let sefareshchair = []
    sefareshchair.push(prooneChair)


    function pluschair(element, price) {
        let numberElement = element.parentElement.querySelector('#number_product')
        numberChair++
        numberElement.innerHTML = numberChair
        let productpriceElement = element.parentElement.parentElement.querySelector(".product_price")
        productpriceElement.textContent = numberChair * price

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) + Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })
    }

    function minuschair(element, price) {
        let numberElement = element.parentElement.querySelector("#number_product")
        numberChair--
        numberElement.innerHTML = numberChair

        let productpriceElement = element.parentElement.parentElement.querySelector(".product_price")
        productpriceElement.innerHTML = price * numberChair

        new Promise((res) => {
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All").innerHTML
            localStorage.setItem("Allprice", JSON.stringify(priceAAllElement))
            res()
        }).then(function () {
            let priceAAll = JSON.parse(localStorage.getItem("Allprice"))
            let newAllprice = Number(priceAAll) - Number(price)
            let priceAAllElement = element.parentElement.parentElement.parentElement.querySelector("#price_All")
            priceAAllElement.innerHTML=newAllprice
        })

        if (numberChair < 0) {
            localStorage.removeItem("chair")
            swal({
                title: "remove"
            }).then(function () {
                location.reload()
            })
        }

    }
    let numberChair = 0
    sefareshchair.map(function (item) {

        let priceroduct = numberChair * (item.price)

        tableheader.insertAdjacentHTML('afterend', `<tr class="table_basket_row">
            <td><img class="img_basket" src="${item.image}" alt="">${item.name}</td>
            <td>${item.price}</td>
            <td> <span id="number_product" onchange="changenumberchaur(this)">${numberChair}</span> <button onclick="pluschair(this ,${item.price})">+</button> <button onclick="minuschair(this ,${item.price})">-</button></td>
            <td class="product_price" >${priceroduct * numberChair}</td>
        </tr>`

        )
    })

} else { console.log("صندلی نیست ") }





function plus(element) {

    alert("روی پلاس کلیک شد")
}
function minus(element) {

}






