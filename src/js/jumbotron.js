import Image1 from "../img/Sushi1.jpeg";
import Image2 from "../img/Sushi2.jpeg";
import Image3 from "../img/Sushi3.jpg";
import Image4 from "../img/Sushi4.jpg";



export const jumbotron = text => {
    const container = document.createElement("div");
    const header = document.createElement("h1");

    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const image3 = document.createElement("img");
    const image4 = document.createElement("img")

    // Setting SRC to image tags
    image1.src = Image1;
    image2.src = Image2;
    image3.src = Image3;
    image4.src = Image4

    // Setting CSS classes animations.
    // image1.classList.add("animate__animated", "animate__fadeIn");
    // image2.classList = image1.classList;
    // image3.classList = image1.classList;
    container.appendChild(image1);
    container.appendChild(image2);
    container.appendChild(image3);
    container.appendChild(image4)

    header.innerHTML = text;
    container.appendChild(header);
    container.classList.add("main-header");
    return container;
};