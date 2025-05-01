const home = () => {
    const Component = document.createElement("section");
    const Title = document.createElement("h1");
    const About = document.createElement("div");

    Component.setAttribute("id", "home");
    About.setAttribute("id", "about");

    Title.textContent = "Petit Choufleur";
    About.innerHTML = `
        <p>
            <strong>Petite Choufleur</strong> is a original bistro serving dishes based on seasonal products. We often change our menu to welcome you always anew,  <strong>not in an obvious manner</strong>.
        </p>
        <p>
            There are countries where wine is as natural as water and air, so here you can drink it in a carefree, cosy atmosphere <strong>without bloat</strong>.
        </p>
    `

    Component.append(Title);
    Component.append(About);

    return Component;
}

export { home };