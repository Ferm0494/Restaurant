export const header = () => {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const h5 = document.createElement('h5')
    h5.innerHTML = "The Sushi King"
    let options = ["Home", "Contact", "About"]

    for (let i = 0; i < options.length; i++) {
        let li = document.createElement('li')
        li.id = options[i]
        li.innerHTML = options[i]
        ul.appendChild(li)
    }


    nav.appendChild(h5);
    nav.appendChild(ul)

    return nav

}