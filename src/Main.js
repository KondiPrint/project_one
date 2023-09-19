export default class Main {
  constructor(data) {
    const pageheader = document.createElement("header");
    pageheader.classList = "pageheader";
    document.body.appendChild(pageheader);

    const main = document.createElement("main");
    document.body.appendChild(main);

    const object__section = document.createElement("section");
    object__section.classList = "object__section";
    main.appendChild(object__section);

    data.forEach((name, index) => {
      const object__container = document.createElement("div");
      object__container.classList = "object__container";
      object__section.appendChild(object__container);

      const object = document.createElement("div");
      object.setAttribute("data-index", `${index}`);
      object.classList = "object";
      object__container.appendChild(object);

      const object__title = document.createElement("h2");
      object__title.classList = "object__title";
      object__container.appendChild(object__title);

      const object__nr = document.createElement("p");
      object__nr.textContent = `${index + 1}`;
      object__nr.classList = "object__nr";
      object.appendChild(object__nr);
    });
  } // ^ END constructor
} // ^ END class
