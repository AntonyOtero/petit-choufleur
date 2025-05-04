import { home } from "./components/home/home";
import { menu } from "./components/menu/menu";
import { contact } from "./components/contact/contact";

import "./styles.css";

const Content = document.querySelector("#content");
const NavButtons = document.querySelectorAll(".nav-tab");

const components = {
    home: home(),
    menu: menu(),
    contact: contact(),
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