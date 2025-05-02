import Cover from "../../images/cover.webp";

import "./home.css";

const home = () => {
    const Component = document.createElement("section");
    const About = document.createElement("div");
    const CoverImage = new Image();

    Component.setAttribute("id", "home");
    About.setAttribute("id", "about");
    CoverImage.classList.add("cover-image");
    CoverImage.src = Cover;

    About.innerHTML = `
        <p>
            <strong>Petite Choufleur</strong> is a original bistro serving dishes based on seasonal products. We often change our menu to welcome you always anew,  <strong>not in an obvious manner</strong>.
        </p>
        <p>
            There are countries where wine is as natural as water and air, so here you can drink it in a carefree, cosy atmosphere <strong>without bloat</strong>.
        </p>
    `

    Component.appendChild(About);
    Component.appendChild(CoverImage);

    return Component;
}

export { home };