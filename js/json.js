

data = {
    product_array: [],

    dataProduct: function () {
        fetch('data.json')
            .then(response => response.json())
            .then(function (json) {
                page_product.start(json);
            });
    },
    dataListProducts: function () {
        fetch('data.json')
            .then(response => response.json())
            .then(function (json) {
                getListProduct(json);
            });
        // product_array = product_array.filter(e => e.id == 1)
    }
}


function getListProduct(json) {
    for (i = 0; i != json.length; i++) {
        document.querySelector("#listProduct").innerHTML += `
        <div>
        <img src="${json[i].img}"
        alt="">
        <h4>
        ${json[i].title}
        </h4 >
        <span>${json[i].price}</span>
        <a href="index.html?id=${json[i].id}">Page du produit</a>
        </div >
        `
    }
}