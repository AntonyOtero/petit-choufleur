import { home } from "./components/home/home";

import "./styles.css";

const Content = document.querySelector("#content");
const NavButtons = document.querySelectorAll(".nav-tab");

const components = {
    home: home(),
}

NavButtons.forEach(button => {
    button.addEventListener("click", e => {
        const ActiveTab = document.querySelector(".active");
        if (ActiveTab) ActiveTab.classList.remove("active");
        e.target.classList.add("active");
        Content.innerHTML = "";
        Content.append(components[e.target.dataset.tab]);
    });
});

Content.append(home());