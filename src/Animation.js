import { gsap } from "gsap";

export default class Animation {
    constructor(animation) {
        this.animation = animation;
        this.notAnimated = true
    } // ^ END Constructor

    toggleEffect(modeToggleBtn) {
        modeToggleBtn.addEventListener('change', () => {
            document.body.classList.toggle('dark');
        })
    }

    hoverEffect() {
        this.animation.addEventListener("mouseover", () => {
            gsap.to(this.animation, {
                scale: 1.8,
                y: 15,
                duration: 0.3,
                ease: "power2.out"
            });
        }); // ^ END EventListener

        this.animation.addEventListener("mouseout", () => {
            gsap.to(this.animation, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }); // ^ END EventListener
    } // ^ END hoverEffect

    clickEffect(section__description) {
        // ! ChatGpt gav mig idéen angående "notAnimated"
        this.animation.addEventListener("click", () => {

            if (this.notAnimated) {
                gsap.to(this.animation, {
                    duration: 0.2,
                    ease: "Circ.inOut",
                    rotationY: 180,
                    opacity: 0,
                    onComplete: () => {
                        this.notAnimated = false;
                        section__description.style.opacity = 1;
                    },
                });

            } else {
                gsap.to(this.animation, {
                    duration: 0.2,
                    ease: "Circ.inOut",
                    rotationY: 0,
                    opacity: 1,
                    onComplete: () => {
                        this.notAnimated = true;
                        this.animation.removeAttribute("style");
                        section__description.style.opacity = 0;
                    },
                });
            }
        }); // ^ END EventListener
    } // ^ END clickEffect
} // ^ END Class