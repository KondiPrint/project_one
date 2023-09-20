import Objects from "./Objects"

export default class Main {
  constructor(data) {

    this.data = data
    this.loop()

  } // ^ END constructor

  loop() {

    const pageheader = document.createElement("header");
    pageheader.classList = "pageheader";
    document.body.appendChild(pageheader);

    const main = document.createElement("main");
    document.body.appendChild(main);

    new Objects(this.data)

  } // ^ END Objects
} // ^ END class



// * Dette er den kode jeg selv kom op med inden jeg spurgte ChatGPT om hjælp.
/* object__img.addEventListener("click", event => {

        gsap.to(event.currentTarget, {

          duration: .5,
          ease: "Circ.inOut",
          rotationY: 180,
          opacity: 0,

          onComplete: event => {
            object__img.addEventListener("click", event => {
              gsap.to(event.currentTarget, {
                duration: .5,
                ease: "Circ.inOut",
                opacity: 1,
                rotationY: 360,
              })
            })
          }
        })
        console.log(event.currentTarget)
      }); */