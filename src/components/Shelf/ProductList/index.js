import React from 'react';

import Product from './Product';
import data from './data.json'
const data_ = [{
    "availableSizes": [
        "S",
        "XS"
    ],
    "currencyFormat": "$",
    "currencyId": "USD",
    "description": "4 MSL",
    "id": 12,
    "installments": 9,
    "isFreeShipping": true,
    "price": 10.9,
    "sku": 12064273040195392,
    "style": "Black with custom print",
    "title": "Cat Tee Black T-Shirt"
}]

const ProductList = ({ products }) => {
    console.log(data_);
    // console.log(JSON.stringify(products));
    return data_.map(p => {
        return <Product product = { p }
        key = { p.id }
        />;
    });
};

export default ProductList;