import React, { useState } from 'react';
import Header from '../header/Header';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const Cart = () => {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }

    function decrementCount() {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    }

    return (
        <div className="container-fluid">
            <Header />
            <h1 className="text-center">Cart Page</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <h4 className="card-header text-center">Items in cart</h4>
                            <div className="row">
                                <div className="col-4 ">
                                    <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/c/t/z/l-vj-1-maroon-dupatta-set-prisca-original-imagb7evryurffsz-bb.jpeg?q=70" alt="dress" className="img-fluid " />
                                </div>
                                <div className="col-4 mt-3">
                                    <h5 className="text-center">Kurta With Dupatta</h5>
                                    <p className="text-center">Rs-450</p>
                                    <button className="btn btn-primary" id="Delete">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                                <div className="col-4 mt-3">
                                    <div className="quantity-form">
                                        <button type="button" name="DecrementBtn" onClick={decrementCount}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <h1>{count}</h1>
                                        <button type="button" name="IncrementBtn" onClick={incrementCount}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <h4 className="card-header text-center">Summary</h4>
                            <div className="row">
                                <div className="col-4 mt-3 mx-auto">
                                    <p>Cost</p>
                                    <p>Shipping</p>
                                    <hr />
                                    <h6>Total</h6>
                                </div>
                                <div className="col-4 mt-3 mx-auto">
                                    <p>Rs-450</p>
                                    <p>Rs-50</p>
                                    <hr />
                                    <h6>Rs-500</h6>
                                </div>
                                <div className="button">
                                    <button className="btn btn-primary" id="Checkout">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
