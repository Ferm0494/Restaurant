import ("./stylesheets/custom.scss");
import ("./stylesheets/menu.scss")
import ("./stylesheets/contact.scss")
import ("bootstrap");
import ("animate.css");
import {
    mainContainer
} from "./js/main_container.js";
import {
    jumbotron

} from "./js/jumbotron";

import {
    header
} from "./js/header"

import {
    menu
} from "./js/menu"

import {
    contact
} from './js/contact'


const container = jumbotron("Best Sushi on town!")
mainContainer().appendChild(header())
mainContainer().appendChild(container);

//Default val
mainContainer().appendChild(menu())

document.getElementById("Home").addEventListener("click", (e) => {
    let contact = mainContainer().children[2]
    contact.classList.add("animate__animated", "animate__backOutRight")
    contact.addEventListener('animationend', () => {
        mainContainer().removeChild(contact)
        mainContainer().appendChild(menu())
    })
    if (mainContainer().children[2] === undefined) {
        console.log("Attaching undefined!");
        mainContainer().appendChild(menu())
    }
})

document.getElementById("Contact").addEventListener("click", (e) => {

    let menu = mainContainer().children[2]
    menu.classList.add("animate__animated", "animate__backOutRight")
    menu.addEventListener('animationend', () => {
        mainContainer().removeChild(menu)
        mainContainer().appendChild(contact())
    })
    console.log(menu);



})