import React, {Component} from "react";

const ProductContext = (props) => {
    return(
                    <div className="item text-center col-md-3">
                        <div className="product-miniature js-product-miniature item-one first-item">
                            <div className="thumbnail-container ">
                                <a>
                                    <img className="img-fluid" src={props.image} alt="img" />
                                    
                                </a>
                                <div className="highlighted-informations">
                                <div className="variant-links">
                                    <a href="#" className="color beige" title="Beige" />
                                    <a href="#" className="color orange" title="Orange" />
                                    <a href="#" className="color green" title="Green" />
                                </div>
                                </div>
                            </div>
                            <div className="product-description">
                                <div className="product-groups">
                                <div className="product-title">
                                    <h5>{props.title}</h5>
                                    <a>{props.body}</a>
                                </div>
                                <div className="rating">
                                    <div className="star-content">
                                    <div className="star" />
                                    <div className="star" />
                                    <div className="star" />
                                    <div className="star" />
                                    <div className="star" />
                                    </div>
                                </div>
                                <div className="product-group-price">
                                    <div className="product-price-and-shipping">
                                    <span className="price">Rp {props.price}</span>
                                    </div>
                                </div>
                                </div>
                                <div className="product-buttons d-flex justify-content-center">
                                <form action="#" method="post" className="formAddToCart">
                                    <input type="hidden" name="id_product" defaultValue={1} />
                                    <button className="btn btn-sm btn-danger" 
                                        onClick={() => {if(window.confirm('Are you to delete this item?')) 
                                        props.deleteProduct(props.idProduct)}}>
                                            Delete
                                    </button>
                                    {/* <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                                    </a> */}
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}
export default ProductContext