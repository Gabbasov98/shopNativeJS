import {BASE_URL} from "../api.js";
import {catalogItemDOM} from "../DOM.js"

class ProductItem {
    async getProductItem(id){
        try {
            let result = await fetch(`${BASE_URL}/${id}`)
            let data =  await result.json()
            console.log(data)

            catalogItemDOM.innerHTML = `
            <div class="catalog-item__img">
                    <img src="${data.image}" alt="product item"/>                
                </div>
                <div class="catalog-item__title">${data.title}</div>
                <div class="catalog-item__desc">${data.description} $</div>
                <div class="catalog-item__price products-item__price">${data.price} $</div>
                <div class="catalog-item__rating">
                    <div class="catalog-item__rate">
                        Rate: <string>${data.rating.rate}</string>
                    </div>
                    <div class="catalog-item__rate">
                        Bought: <string>${data.rating.count}</string>
                    </div>
                </div>
            `
        } catch (err) {
            console.log(err)
        }
    }
}


let productItem = new ProductItem()

export {productItem}
