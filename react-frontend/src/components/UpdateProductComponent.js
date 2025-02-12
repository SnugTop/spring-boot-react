import React, { useState, useEffect } from 'react';
import ProductService from '../ProductService';
import { useNavigate, useParams } from 'react-router-dom';

//This is a functional component that will display a form to update an existing product
const UpdateProductComponent = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    //This useEffect hook will run when the component is first rendered
    useEffect(() => {
        //This will call the getProductById method from the ProductService class to fetch a single product by its ID
        ProductService.getProductById(id).then((res) => {
            const product = res.data;
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
        });
    }, [id]);

    //This function will be called when the user clicks the Save button
    const updateProduct = (e) => {
        e.preventDefault();
        const product = { name, description, price };
        ProductService.updateProduct(product, id).then(() => {
            navigate('/products');
        });
    };

    //This will return the JSX that will be rendered by the component
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Product</h3>
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
                                <button className="btn btn-success" onClick={updateProduct}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductComponent;
