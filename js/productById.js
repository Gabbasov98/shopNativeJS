import {productItem} from './components/ProductItem.js'

const productId = window.location.href.split('?').pop().split('=')[1]
console.log(productId);

document.addEventListener("DOMContentLoaded", () => {
    // category.getCategories()
    productItem.getProductItem(productId)
})
