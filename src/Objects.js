import { gsap } from "gsap";

export default class Objects {
    constructor(data) {

        this.data = data
        this.loop()
    }

    loop() {

        const object__section = document.createElement("section");
        object__section.classList = "object__section";
        document.querySelector("main").appendChild(object__section);

        this.data.forEach((info, index) => {

            const object__mainCont = document.createElement("div");
            object__mainCont.classList = "object__mainCont";
            object__section.appendChild(object__mainCont);

            const object__container = document.createElement("div");
            object__container.classList = "object__container";
            object__mainCont.appendChild(object__container);

            const object = document.createElement("div");
            object.setAttribute("data-index", `${index}`);
            object.classList = "object";
            object__container.appendChild(object);

            const object__image = document.createElement("img");
            object__image.setAttribute("data-index", `${index}`);
            object__image.setAttribute("alt", `${info.alt}`)
            object__image.src = "../assets/img/" + info.img
            object__image.classList = "object__image"
            object.appendChild(object__image)

            const object__description = document.createElement("div");
            object__description.setAttribute("data-index", `${index}`);
            object__description.classList = "object__description"
            object__description.textContent = info.description
            object.appendChild(object__description)

            const object__title = document.createElement("h2");
            object__title.setAttribute("data-index", `${index}`);
            object__title.textContent = info.name
            object__title.classList = "object__title";
            object__mainCont.appendChild(object__title);

            const object__number = document.createElement("p");
            object__number.textContent = `${index + 1}`;
            object__number.classList = "object__number";
            object__container.appendChild(object__number);

            // ! ChatGpt gav mig idéen angående "notAnimated"
            let notAnimated = true;
            object__image.addEventListener("click", () => {

                if (notAnimated) {
                    gsap.to(object__image, {
                        duration: 0.5,
                        ease: "Circ.inOut",
                        rotationY: 180,
                        opacity: 0,
                        onComplete: () => {
                            notAnimated = false;
                            object__description.style.opacity = 1;
                        },
                    });

                } else {
                    gsap.to(object__image, {
                        duration: 0.5,
                        ease: "Circ.inOut",
                        rotationY: 0,
                        opacity: 1,
                        onComplete: () => {
                            notAnimated = true;
                            object__image.removeAttribute("style");
                            object__description.style.opacity = 0;
                        },
                    });
                }
            }); // ^ END EventListener
        }); // ^ END Loop
    }
}