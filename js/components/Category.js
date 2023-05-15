import {BASE_URL} from "../api.js";
import {select} from "../DOM.js";

class Category {
    getCategories(){
        fetch(`${BASE_URL}/categories`)
            .then(res => res.json())
            .then(categories => {
                categories.forEach(category => {
                    const option = document.createElement("option");
                    option.innerHTML = category;
                    select.appendChild(option);
                })
            })
            .catch(err => console.log(err))
    }
}

let category = new Category()
export {category}
