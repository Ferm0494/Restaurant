import ("./stylesheets/custom.scss");
import ("./stylesheets/menu.scss")
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


const container = jumbotron("Best Sushi on town!")
mainContainer().appendChild(header())
mainContainer().appendChild(container);
mainContainer().appendChild(menu())