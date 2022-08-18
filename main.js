document.querySelectorAll(".projects").forEach((projects) => {
        const items = projects.querySelectorAll(".project_item");
        const buttonsHtml = Array.from(items, () => {
        return `<span class="projectNavButton"></span>`;
        });
    
        projects.insertAdjacentHTML(
        "beforeend",
        `
            <div class="projectsNav">
                ${buttonsHtml.join("")}
            </div>
        `
        );

        const buttons = projects.querySelectorAll(".projectNavButton");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("project_item--selected")
      );
      buttons.forEach((b) =>
        b.classList.remove("projectNavButton--selected")
      );

      items[i].classList.add("project_item--selected");
      button.classList.add("projectNavButton--selected");
    });
  });
  items[0].classList.add("project_item--selected");
  buttons[0].classList.add("projectNavButton--selected");
});