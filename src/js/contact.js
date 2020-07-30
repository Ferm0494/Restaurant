export const contact = () => {
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("container", "d-flex", "flex-column", "justify-content-center", "align-items-center", "col-12", "mt-3", "contact")
    const header = document.createElement("h3")
    header.innerHTML = "Have a reservation ? Call us! at 222-222 "
    const subHeader = document.createElement("h4")

    contactContainer.appendChild(header)
    contactContainer.appendChild(subHeader)


    subHeader.innerHTML = "Or find us at :"
    subHeader.insertAdjacentHTML("afterend",
        "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7631335462675!2d-122.206261685076!3d37.324438079843915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fae43c67a111b%3A0x7f46d8ea80e3f1c5!2sSilicon%20Valley%20Vista%20Point!5e0!3m2!1ses!2ssv!4v1596053065922!5m2!1ses!2ssv' width='600' height='450' frameborder='0' style='border:0;'  aria-hidden='false' tabindex='0'></iframe>"
    )

    return contactContainer;

}