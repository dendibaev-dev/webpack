import myLogo from '../assets/logo.svg'

const title = document.querySelector("#title")
const logo = document.querySelector("#logo")

title.innerText = "Hello"
title.style.color = "#fff"

logo.src = myLogo
logo.width = 100