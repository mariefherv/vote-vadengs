const radioBtn = document.getElementsByClassName("qp_a");
radioBtn[1].click()

let random = Math.floor(Math.random() * 7000) + 3000

setInterval(() => {
  document.forms["qp_form4536266"].submit()
}, random)