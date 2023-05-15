import {products} from "./components/Products.js";
import {category} from "./components/Category.js";
import {productByCategory} from "./components/ProductBy.js";
import {select} from "./DOM.js";


select.addEventListener("change", function () {
        if(this.value === "all"){
                products.getProducts()
        } else{
                productByCategory.getProductsByCategory(this.value)
        }
})



document.addEventListener("DOMContentLoaded", () => {
        products.getProducts()
        category.getCategories()
})
