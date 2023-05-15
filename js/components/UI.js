import {productsDOM} from "../DOM.js";

console.log(window.location.origin)

class UI {
    createUi(data) {
        productsDOM.innerHTML = ""
        data.forEach(item => productsDOM.innerHTML +=
            `
            <a href="${window.location.origin}/catalog-item.html?id=${item.id}" class="products-item">
                <div class="products-item__img">
                    <img src="${item.image}" alt="product item"/>                
                </div>
                <div class="products-item__title">${item.title}</div>
                <div class="products-item__price">${item.price} $</div>
            </a>
        `)
    }
}

let ui = new UI()
export {ui}
