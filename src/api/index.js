
const API_URL = 'https://fakestoreapi.com/products';

export async function fetchAllProducts() {
    try {
        const response = await fetch(`${API_URL}`);
        const AllProducts = await response.json()
       console.log(AllProducts);
        return AllProducts;
    } catch (err) {
        console.error(err);
    }
};


export async function fetchProductById(id) {
    try {
        const response = await fetch(
            `${API_URL}/${id}`
        );
        const productById = await response.json();
        console.log(productById);
        return productById;
    } catch (err) {
        console.error(err);
    }
};


export async function addNewProduct(product) {
    try {
        const response = await fetch(
            `${API_URL}/${productObj}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productObj),
            }
        );
        const NewProduct= await response.json();
        return NewProduct;
    } catch (err) {
        console.error(err);
    }

};

export async function deleteProduct(id) {
    try{
        const response = await fetch(`
        ${API_URL}/${Id}`, {
       
            method: 'DELETE',
    });
    const productById = await response.json();
} catch(err) {
    console.error(err);
}
};

