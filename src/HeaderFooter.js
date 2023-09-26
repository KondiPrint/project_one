

export default class HeaderFooter {

    constructor(data) {

        this.data = data.headerFooterData
        this.loop()

    } // ^ END Constructor

    loop() {

        const pageheader__container = document.createElement("div")
        pageheader__container.classList = "pageheader__container"
        document.querySelector("header").appendChild(pageheader__container)

        const pagefooter__container = document.createElement("div")
        pagefooter__container.classList = "pagefooter__container"
        document.querySelector("footer").appendChild(pagefooter__container)

        this.headerContent(this.data)

    } // ^ END Loop

    headerContent(data) {

        const pageheader__logo = document.createElement("img")
        pageheader__logo.classList = "pageheader__container-logo"
        pageheader__logo.setAttribute("alt", `${data.alt_text}`)
        pageheader__logo.src = "../assets/img/" + data.imgWhite
        document.querySelector(".pageheader__container").appendChild(pageheader__logo)

        const h_one = document.createElement("h1")
        h_one.classList = "pageheader__container-title"
        h_one.textContent = data.headerHone
        document.querySelector(".pageheader__container").appendChild(h_one)

        const pagefooter__name = document.createElement("h2")
        pagefooter__name.classList = "pagefooter__container-name"
        pagefooter__name.textContent = data.myName
        document.querySelector(".pagefooter__container").appendChild(pagefooter__name)
    }

} // ^ END Class