import React, { useState } from 'react';
import ProductService from '../ProductService';
import { useNavigate } from 'react-router-dom';

//This is a functional component that will display a form to add a new product
const AddProductComponent = () => {
    const [name, setName] = useState(''); //This will create a state variable called name and a function to update it called setName
    const [description, setDescription] = useState(''); //This will create a state variable called description and a function to update it called setDescription
    const [price, setPrice] = useState(''); //This will create a state variable called price and a function to update it called setPrice
    const navigate = useNavigate(); //This will create a navigate function that we can use to navigate to a different page

    //This function will be called when the user clicks the Save button
    const saveProduct = (e) => {
        e.preventDefault();
        const product = { name, description, price };
        ProductService.createProduct(product).then(() => {
            navigate('/products');
        });
    };

    //This will return the JSX that will be rendered by the component
    return (
        <div>
            {/*This will create a form to add a new product*/}
            <div className="container"> 
                <div className="row">
                    {/*This will create a card with a form to add a new product*/}
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Product</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Product Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Product Description: </label>
                                    <input placeholder="Description" name="description" className="form-control"
                                        value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Product Price: </label>
                                    <input placeholder="Price" name="price" className="form-control"
                                        value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveProduct}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductComponent;