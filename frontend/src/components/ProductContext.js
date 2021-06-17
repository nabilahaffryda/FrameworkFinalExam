import React, {Component} from "react";
import firebase from "firebase";
import firebaseConfig from '../firebase/config';

class ProductContext extends Component {
    constructor(props){
        super(props);
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }
    
    onClickAddToCart = (pid) => {
        let cart = {
            pid: pid,
            qty: 1
        };
        let ref = firebase.database().ref(`/carts/nabil@gmail/products`);
        ref.get().then(snapshot => {
            let products = snapshot.val()
            if(products === null){
                let newCart = []
                newCart.push(cart)
                ref.set(newCart).then(val => alert('Added to Cart'))
            }else if(products.length > 0){
                let index = products.findIndex(element => {
                    return element.pid === pid
                })
                if(index>-1 && index<products.length){
                    products[index].qty +=1
                    ref.set(products).then(val => alert('Added to Cart'))
                }else{
                    products.push(cart)
                    ref.set(products).then(val => alert('Added to Cart'))
                }
            }
        })
    };
    render(){
        const data = this.props.product;
        return(
            <div className="item text-center col-md-3">
                <div className="product-miniature js-product-miniature item-one first-item">
                    <div className="thumbnail-container ">
                        <a>
                            <img className="img-fluid" src={data.image} alt="#" />
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
                                <h5>{data.title}</h5>
                                <a>{data.body}</a>
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
                                <span className="price">Rp {data.price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-buttons d-flex justify-content-center">
                        <form action="#" method="post" className="formAddToCart">
                            <input type="hidden" name="id_product" defaultValue={1} />
                            <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                <i className="fa fa-shopping-cart" onClick={() => this.onClickAddToCart(data.pid)} aria-hidden="true" />
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default ProductContext