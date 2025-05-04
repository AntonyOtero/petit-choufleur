import './menu.css'

const items = [
    { name: "Breakfast Wrap", price: '$16.00', description: "2 eggs, green chorizo, house bacon, pico de gallo, roast potatoes, grilled tortilla and lime crema" },
    { name: "Ranchero Bowl", price: '$15.50', description: "2 eggs, kale, heirloom tomato, black beans and peppers" },
    { name: "Coconut Pankcakes", price: '$14.00', description: "Scrambled eggs, pico de gallo, Baja slaw, crema, cilantro, roast potatoes and lime crema" },
    { name: "Energy Bowl", price: '$18.00', description: "Acai, toasted coconut, banana, fresh berries, chia seeds, poppy seeds, honey and nuts" },
]

const generateItem = (name, price, description, i) => {
    const menuItem = document.createElement('li')

    menuItem.innerHTML = `
        <h2 class='item-name'>${name}</h2>
        <p class='item-description'>${description}</p>
        <p class='item-price'>${price}</p>
    `

    menuItem.dataset.index = i

    return menuItem
}

const menu = () => {
    const menuList = document.createElement('ul')
    const menuItems = [...items]

    menuList.classList.add('menu')

    menuItems.forEach((item, index) => {
        menuList.append(generateItem(item.name, item.price, item.description, index))
    });

    return menuList
}

export { menu }