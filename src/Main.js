import Objects from "./Objects"
import HeaderFooter from "./HeaderFooter";

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

    const pagefooter = document.createElement("footer");
    pagefooter.classList = "pagefooter";
    document.body.appendChild(pagefooter);

    new Objects(this.data)

    new HeaderFooter(this.data)

  } // ^ END Objects
} // ^ END class