const form = document.querySelector("form")
const form1 = form.querySelector(".form1")
const form2 = form.querySelector(".form2")
const form3 = form.querySelector(".form3")
const formButton1 = form1.querySelector(".formButton1")
const formButton2 = form2.querySelector(".formButton2")
const formButton3 = form3.querySelector(".formButton3")
const box1 = form2.querySelector(".box1")
const box2 = form2.querySelector(".box2")

box1.addEventListener("mousedown", () => {
  if (box1.classList.contains('active')) {
    box1.classList.remove("active")
  } else {
    box1.classList.add("active")
    if (box2.classList.contains('active')) {
      box2.classList.remove('active')
    }
  }
})

box2.addEventListener("mousedown", () => {
  if (box2.classList.contains('active')) {
    box2.classList.remove("active")
  } else {
    box2.classList.add("active")
    if (box1.classList.contains('active')) {
      box1.classList.remove('active')
    }
  }
})

formButton1.addEventListener("mousedown", () => {
  form2.classList.add('active')
  form1.classList.remove('active')
})

formButton2.addEventListener("mousedown", () => {
  form3.classList.add('active')
  form2.classList.remove('active')
})
