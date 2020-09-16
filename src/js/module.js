import myLogo from '@/assets/logo.svg'

const title = document.querySelector("#title")
const logo = document.querySelector("#logo")

title.innerText = "Hello, It's Me"
title.style.color = "#fff"

logo.src = myLogo
logo.width = 100