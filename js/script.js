products_array = [
    ['Fall Limited Edition Sneakers', `These low-profile sneakers are your perfect casual wear companion. Featuring a
durable rubber outer sole, they\’ll withstand everything the weather can offer.`, 125, 'http://127.0.0.1:5501/images/image-product-1.jpg'],
    ['Nike Air Max 1 Light Madder Root', 'Après s’être montrée discrète ces dernières années, la Nike Air Max 1 fait son grand retour pour souffler ses 35 bougies. Imaginée par Tinker Hatfield en 1987, elle est la première paire de Nike à arborer une unité d’Air visible. Inspiré par l’architecture transparente du Centre Georges Pompidou à Paris, le designer de Nike crée un classique absolu, qui n’a eu de cesse de se renouveler au fil des décennies. Pour son retour cette année, la firme de Beaverton a imaginé des nouveaux coloris exclusifs, remettant la paire au gout du jour. Parmi ces nouveautés, des déclinaisons à tendance trail ont fait surface, dont la très jolie Light Madder Root, prévue de sortir bientôt, et que nous vous présentons ici. ', 150, 'https://www.sneakers.fr/wp-content/uploads/2022/04/nike-air-max-1-light-madder-root-1-1160x1160.jpg']
]




let cart = {
    nbr_product: 0,
    cart_array: [],
    add: function (product) {
        this.cart_array.push(product);

        this.rewriteCart();
        this.changeNbrCart(page_product.nbr_product);
    },
    rewriteCart: function () {
        let products = '';

        for (i = 0; i < this.cart_array.length; i++) {
            products += `
            <div class="flex">
            <div class="fb-20 miniature">
                <img src="images/image-product-1-thumbnail.jpg">
                </div>
                <div class="fb-75">
                    <ul>
                        <li>
                            ${this.cart_array[i][0]}
                        </li>
                        <li>
                            $ ${this.cart_array[i][1]} x ${this.cart_array[i][2]} <span class="price">$ ` + this.cart_array[i][2] * this.cart_array[i][1] + `</span>
                        </li>
                    </ul>
                </div>
                <div class="fb-5 delete">
                    <img src="images/icon-delete.svg" onclick="cart.deleteProduct()">
                </div>
            </div>
            `;
        }
        document.querySelector("#cartContainer").innerHTML = products;
    },
    deleteProduct: function () {
        cart.rewriteCart();
        console.log(this.cart_array);
        this.changeNbrCart(-this.cart_array[0][2]);

        this.cart_array.splice(0, 1);
    },
    changeNbrCart: function (nbr) {
        this.nbr_product = this.nbr_product + nbr;
        document.querySelector('#nbr_cart').innerHTML = this.nbr_product;
    }
}

let page_product = {
    //Produit
    name_product: "Fall Limited Edition Sneakers",
    description_product: "",
    price_product: 125,
    nbr_product: 0,

    //HTML
    inputNbrProduct: document.querySelector('#nbrProduct'),
    contentPrice: document.querySelector('#price'),
    contentPromo: document.querySelector('#promo'),

    count: function (t) {
        this.nbr_product = this.nbr_product + t;
        this.inputNbrProduct.innerHTML = this.nbr_product;

        //Modification du prix en fonction du nombre d'exemplaires
        this.contentPrice.innerHTML = '$' + this.nbr_product * 125;
        this.contentPromo.innerHTML = this.nbr_product * 125 + (50 * this.nbr_product * 125 / 100) + '$';
    },
    popup: function () {
        document.getElementById('popup').classList.toggle('popup-actif');
    },
    start: function () {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        idProduct = urlParams.get('id')


        document.querySelector('#titleProduct').innerHTML = products_array[idProduct][0];
        document.querySelector('#descriptionProduct').innerHTML = products_array[idProduct][1];
        document.querySelector('#price').innerHTML = products_array[idProduct][2] + "$";
        document.querySelector('#no_popup_first_img').src = products_array[idProduct][3];
    }
}

page_product.start()


document.querySelector('#cartButton').addEventListener('click', function () {
    cart.add([page_product.name_product, 125.00, page_product.nbr_product]);
});

document.querySelector('#plus').addEventListener('click', function () {
    page_product.count(1);
});
document.querySelector('#moins').addEventListener('click', function () {
    page_product.count(-1);
});