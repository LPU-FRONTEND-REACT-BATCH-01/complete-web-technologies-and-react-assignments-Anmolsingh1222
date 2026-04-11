//DOM-Document Object Model

//document-It is an object presnet inside our browser;

//1.getElementById();
//2.getElementTagName();
//3.getElementClassName();
//4.querrySelector();
//5.querrySelectorAll();

// let heading = document.getElementById("heading");

// let container = document.getElementsByClassName("container");  //Html collection

// let paragraph = document.getElementsByTagName("p");

// let heading1 = document.querySelector("#heading");
// let paragraph = document.querySelector("p");  //first matching will be selected
// let conainter = document.querySelectorAll(".container");

// heading1.innerHTML = "<b>This is change heading</b>";    //it will also execute html tags
// paragraph.textContent = "<b>This is changed paragraph</b>";

// heading1.classList.add("heading");
// console.log(heading1.classList.contains("heading"));
// heading1.classList.toggle("heading");   //if class is not present it will added it present then it remove it
// heading1.classList.remove("heading");


//append()
//remove()
//createElement()


// let ul = document.querySelector(".fruits");
// let kiwi = document.createElement("li")
// let mango = document.createElement("li").textContent = "Mango";
// kiwi.textContent = "Kiwi";

// ul.after("kiwi");


//Event Listener

// let button = document.querySelector("button");

// button.addEventListener('click', () => {
//     console.log("This button got click");
// })

// button.addEventListener('mouseover', () => {
//     console.log("This button got clicked");
// })



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