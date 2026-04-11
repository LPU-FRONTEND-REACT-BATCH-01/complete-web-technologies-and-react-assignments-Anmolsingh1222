// Data Object Model(DOM)

// document : it is an object inside our browser
// 1. getElementById("")
// 2. getElementByTagName("")
// 3. getElementByClassName("")
// 4. querySelector("")
// 5. querySelectorAll("")

// let heading1 = document.getElementById("heading")
// let container1 = document.getElementsByClassName("container")
// console.log(heading1)
// console.log(container1)

// let heading = 

// let ul = document .

let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")


button.addEventListener('click',()=>{
    let li = document.createElement("li")
    let inputText = input.value
    li.textContent = inputText
    let delbtn = document.createElement("button")
    delbtn.textContent = "Delete"

    let strbutton = document.createElement("button")
    strbutton.textContent = "Done"

    ul.append(li)
    li.append(delbtn)
    li.append(strbutton)
    

    delbtn.addEventListener('click',()=>{
        li.remove();
    })

    strbutton.addEventListener('click',()=>{
        li.classList.toggle("strike");
    })

})