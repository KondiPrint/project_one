import Animation from "./Animation";

export default class Objects {
    constructor(data) {

        this.data = data
        this.loop()

    } // ^ END Constructor

    loop() {

        const modeToggleBtn = document.createElement("input");
        modeToggleBtn.setAttribute("type", `checkbox`)
        modeToggleBtn.classList = "darkToggle"
        document.querySelector("header").appendChild(modeToggleBtn)

        // ? Dark / Light mode toggle call
        const toggleAnimation = new Animation(modeToggleBtn);
        toggleAnimation.toggleEffect(modeToggleBtn);

        const section = document.createElement("section");
        section.classList = "section";
        document.querySelector("main").appendChild(section);


        this.data.content.forEach((info, index) => {

            const section__mainCont = document.createElement("div");
            section__mainCont.classList = "section__mainCont";
            section.appendChild(section__mainCont);

            const section__container = document.createElement("div");
            section__container.classList = "section__container";
            section__mainCont.appendChild(section__container);

            const section__object = document.createElement("div");
            section__object.setAttribute("data-index", `${index}`);
            section__object.classList = "section__container-object";
            section__container.appendChild(section__object);

            const section__image = document.createElement("img");
            section__image.setAttribute("data-index", `${index}`);
            section__image.setAttribute("alt", `${info.alt}`)
            section__image.src = "../assets/img/" + info.img
            section__image.classList = "section__container-image"
            section__object.appendChild(section__image)

            const section__description = document.createElement("p");
            section__description.setAttribute("data-index", `${index}`);
            section__description.classList = "section__container-description"
            section__description.textContent = info.description
            section__object.appendChild(section__description)

            const section__title = document.createElement("h2");
            section__title.setAttribute("data-index", `${index}`);
            section__title.textContent = info.name
            section__title.classList = "section__mainCont-title";
            section__mainCont.appendChild(section__title);

            const section__link = document.createElement("a");
            section__link.setAttribute("data-index", `${index}`);
            section__link.setAttribute("href", `${info.link}`)
            section__link.setAttribute("target", `_blank`)
            section__link.classList = "section__mainCont-link";
            section__mainCont.appendChild(section__link);

            const section__linkImg = document.createElement("img");
            section__linkImg.setAttribute("data-index", `${index}`);
            section__linkImg.setAttribute("alt", `Wikipedia logo`)
            section__linkImg.src = "../assets/img/wikipedia-w.svg"
            section__linkImg.classList = "section__mainCont-linkImg"
            section__link.appendChild(section__linkImg)

            const section__number = document.createElement("p");
            section__number.textContent = `${index + 1}`;
            section__number.classList = "section__container-number";
            section__container.appendChild(section__number);

            // ? Her kalder jeg animationerne fra my "Animation" class.
            const hoverAnimation = new Animation(section__linkImg);
            hoverAnimation.hoverEffect();

            const clickAnimation = new Animation(section__image);
            clickAnimation.clickEffect(section__description);
        }); // ^ END forEach
    } // ^ END Loop
} // ^ END Class