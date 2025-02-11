import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8080/api/v1/products';

//This is the URL of the REST API endpoint that we are going to use to communicate with the backend.
class ProductService {
    //This method will send a GET request to the backend API to fetch all products
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    //This method will send a POST request to the backend API to create a new product
    createProduct(product){ 
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    //This method will send a GET request to the backend API to fetch a single product by its ID
    getProductById(productId){
        return axios.get('${PRODUCT_API_BASE_URL}/${productId}');
    }

    //This method will send a PUT request to the backend API to update an existing product
    updateProduct(product, productId){
        return axios.put('${PRODUCT_API_BASE_URL}/${productId}', product);
    }   

    //This method will send a DELETE request to the backend API to delete a product by its ID
    deleteProduct(productId){
        return axios.delete('${PRODUCT_API_BASE_URL}/${productId}');
    }

}
//This will export an instance of the ProductService class so that we can use it in other components
export default new ProductService(); 



