import {BASE_URL} from "../api.js";
import {ui} from "./UI.js"


class ProductByCategory {
    getProductsByCategory(category){
        fetch(`${BASE_URL}/category/${category}`)
            .then(res=>res.json())
            .then(data => {
                ui.createUi(data)
            })
            .catch(err => console.log(err))
    }
}

let productByCategory = new ProductByCategory()
export {productByCategory}
