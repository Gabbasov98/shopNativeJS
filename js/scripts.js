let productsDOM = document.querySelector(".product-center")
let select = document.querySelector(".choose-category")

const BASE_URL = 'https://fakestoreapi.com/products'

// get products
async function getProducts(){
        try {
                let result = await fetch(BASE_URL)
                let data =  await result.json()
                renderProducts(data)
        } catch (err) {
                console.log(err)
        }


    // .then(res => res.json())
    // .then(data => renderProducts(data))
    // .catch(err => console.log(err))
}


// get categories
function getCategories(){
        fetch(`${BASE_URL}/categories`)
            .then(res => res.json())
            .then(categories => {
                    categories.forEach(category => {
                            const option = document.createElement('option');
                            option.innerHTML = category;
                            select.appendChild(option);
                    })
            })
            .catch(err => console.log(err))
}

// choose products with category
function getProductsFromCategory(category){
        fetch(`${BASE_URL}/category/${category}`)
            .then(res=>res.json())
            .then(data => {
                    renderProducts(data)
            })
            .catch(err => console.log(err))
}


select.addEventListener('change', function () {
        if(this.value === 'all'){
                getProducts()
        } else{
                getProductsFromCategory(this.value)
        }
})


function renderProducts(data) {
        productsDOM.innerHTML = ''
        data.forEach(item => productsDOM.innerHTML +=
            `
            <div class="products-item">
                <div class="products-item__img">
                    <img src="${item.image}" alt="product item"/>                
                </div>
                <div class="products-item__title">${item.title}</div>
                <div class="products-item__price">${item.price} $</div>
            </div>
        `)
}



document.addEventListener('DOMContentLoaded', () => {
        getProducts()
        getCategories()
})
