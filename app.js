let quantities = document.querySelectorAll('.product');
let product = document.querySelector('.product');

[...quantities].forEach(function(quantity) {
    let minusButton = quantity.querySelector('.fa-minus');
    let plusButton = quantity.querySelector('.fa-plus');
    let inputField = quantity.querySelector('#product-quantity');
    let removeButton = quantity.querySelector(".remove-product");
    let product_price = quantity.querySelector("#price");
    let line_price = quantity.querySelector(".product-line-price");

    let total_price = document.querySelector("#total_price");
    let total_tax = document.querySelector("#total_tax");
    let total_total = document.querySelector("#total_total");
    let shipping = document.querySelector(".shipping");

    minusButton.addEventListener('click', function minusProduct() {
        const currentValue = Number(inputField.innerHTML);
        if (currentValue > 0) {
        inputField.innerHTML = currentValue - 1;
        }/* if (currentValue == 0){
            product = removeButton.parentElement.parentElement.parentElement.remove();
        } */

        //line_price
        price = Number(product_price.innerHTML);
        num_product = Number(inputField.innerHTML);
        let line_price1 = price * num_product;
        line_price1 = String(line_price1).substring(0,6);
        line_price.innerHTML = line_price1;

        //total_price
        const currentTotal = Number(total_price.innerHTML);
        let total_price1 = currentTotal - price;
        total_price1 = String(total_price1).substring(0,6);
        total_price.innerHTML = total_price1;

        //total_tax
        let total_tax1 = Number(total_price.innerHTML) * 18 / 100;
        total_tax1 = String(total_tax1).substring(0,6);
        total_tax.innerHTML = total_tax1;

        //total_total
        let total_total1 = Number(total_price.innerHTML) + Number(total_tax.innerHTML) + Number(shipping.innerHTML);
        total_total1 = String(total_total1).substring(0,6);
        total_total.innerHTML = total_total1;
    });

    plusButton.addEventListener('click', function plusProduct() {
        const currentValue = Number(inputField.innerHTML);
        inputField.innerHTML = currentValue + 1;

        //line_price
        price = Number(product_price.innerHTML);
        num_product = Number(inputField.innerHTML);
        let line_price1 = price * num_product;
        line_price1 = String(line_price1).substring(0,6);
        line_price.innerHTML = line_price1;

        //total_price
        const currentTotal = Number(total_price.innerHTML);
        let total_price1 = currentTotal + price;
        total_price1 = String(total_price1).substring(0,6);
        total_price.innerHTML = total_price1;

        //total_tax
        let total_tax1 = Number(total_price.innerHTML) * 18 / 100;
        total_tax1 = String(total_tax1).substring(0,6);
        total_tax.innerHTML = total_tax1;

        //total_total
        total_total1 = Number(total_price.innerHTML) + Number(total_tax.innerHTML) + Number(shipping.innerHTML);
        total_total1 = String(total_total1).substring(0,6);
        total_total.innerHTML = total_total1;
        //console.log(total_total.innerHTML);
        
        if (total_total.innerHTML.charAt(0) == 0){
            total_total.innerHTML = "0";
        }
    });

    removeButton.addEventListener("click", () => {
        product = removeButton.parentElement.parentElement.parentElement.remove();
        /* console.log(a); */
    });
});