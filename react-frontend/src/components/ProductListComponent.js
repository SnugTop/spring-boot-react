import React, { useState, useEffect } from 'react'; //This will import the useState and useEffect hooks from the react library
import ProductService from '../ProductService'; //This will import the ProductService class that we created earlier
import { Link } from 'react-router-dom'; //This is used to create a link to the product details page

//This is a functional component that will display a list of products
const ProductListComponent = () => {
    const [products, setProducts] = useState([]); //This will create a state variable called products and a function to update it called setProducts

    //This useEffect hook will run when the component is first rendered
    useEffect(() => {
        //This will call the getProducts method from the ProductService class to fetch all products
        ProductService.getProducts().then((res) => {
            //This will update the products state variable with the data that we received from the backend
            setProducts(res.data);
        });
    }, []);

    //This will return the JSX that will be rendered by the component
    return (
        <div> 
            <h2 className = "text-center">Products List</h2>
            <div className="row">
                <Link to="/add-product" className="btn btn-primary">Add Product</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/update-product/${product.id}`} className="btn btn-info">Update</Link>
                                    <button className="btn btn-danger" onClick={() => ProductService.deleteProduct(product.id).then(() => setProducts(products.filter(p => p.id !== product.id)))}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

//This will export the ProductListComponent so that we can use it in other components
export default ProductListComponent;