import { gsap } from "gsap";

export default class Objects {
    constructor(data) {

        this.data = data
        this.loop()

    }

    loop() {

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

            const section__number = document.createElement("p");
            section__number.textContent = `${index + 1}`;
            section__number.classList = "section__container-number";
            section__container.appendChild(section__number);

            // ! ChatGpt gav mig idéen angående "notAnimated"
            let notAnimated = true;
            section__image.addEventListener("click", () => {

                if (notAnimated) {
                    gsap.to(section__image, {
                        duration: 0.2,
                        ease: "Circ.inOut",
                        rotationY: 180,
                        opacity: 0,
                        onComplete: () => {
                            notAnimated = false;
                            section__description.style.opacity = 1;
                        },
                    });

                } else {
                    gsap.to(section__image, {
                        duration: 0.2,
                        ease: "Circ.inOut",
                        rotationY: 0,
                        opacity: 1,
                        onComplete: () => {
                            notAnimated = true;
                            section__image.removeAttribute("style");
                            section__description.style.opacity = 0;
                        },
                    });
                }
            }); // ^ END EventListener
        }); // ^ END forEach
    } // ^ END Loop
}