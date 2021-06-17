import React, { Component } from 'react'
import firebase from "firebase";
import firebaseConfig from '../firebase/config';

export class Cart extends Component {
    constructor(props) {
        super(props);
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        this.state = {
          listCart: [],
          productCart: [],
          totalPrice: 0,
          loadingCart: true,
        };
    }
    itemCart = (product, cart) => {
        let newCart = {
            ...product,
            ...cart,
        };
        return newCart;
    }
    fetchCart = () => {
        const cartref = firebase.database().ref(`/carts/nabil@gmail`);
        const productref = firebase.database().ref("listProduct");
        cartref.on("value", (snapshot) => {
            let carts = snapshot.val();
            if(carts !== null){
                this.setState({listCart: carts});
            }
            productref.on("value", (productSnapshot) => {
                console.log(productSnapshot);
                let products = productSnapshot.val();
                let newProductCart = [];
                if(products != null && carts != null){
                    let total = 0;
                    products.map((item) => {
                        carts.products.map((cart) => {
                            if(item.pid === cart.pid){
                                newProductCart.push(this.itemCart(item, cart));
                                this.setState({
                                    productCart: newProductCart,
                                    loadingCart: false,
                                });
                                total += item.price * cart.qty;
                            }
                        });
                    });
                    this.countTotalPrice(total);
                }else{
                    this.setState({productCart: [], totalPrice: 0, loadingCart: false});
                }
                this.getImage();
            });
        });
    }
    componentDidMount(){
        this.fetchCart();
    }
    countTotalPrice = (price) => {
        this.setState({totalPrice: price});
    }
    setQty = (pid, qty) => {
        let ref = firebase
          .database()
          .ref(
            `/carts/nabil@gmail/products`
          );
        ref.get().then((snapshot) => {
          let carts = snapshot.val();
          if (qty > 0) {
            let index = carts.findIndex((element) => {
              return element.pid === pid;
            });
            if (index > -1 && index < carts.length) {
              carts[index].qty = qty;
              ref.set(carts);
            }
          }
        });
    };
    deleteCart = (productID) => {
        let newCarts = this.state.listCart.products.filter((item) => {
            return item.pid !== productID;
        });
        console.log(this.state.productCart);
        firebase.database().ref("carts/nabil@gmail/products").set(newCarts);
    }
    getImage = () => {
        const storage = firebase.storage();
        this.state.productCart.map((item) => {
            storage
                .ref(`/product-image/${item.image}`)
                .getDownloadURL()
                .then((link) => {
                    let newCart = this.state.productCart.map((cart) => {
                        if(item.pid === cart.pid){
                            cart.image = link;
                        }
                        return cart;
                    });
                    this.setState({productCart: newCart});
                });
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="content-wrapper" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol">
                    <section id="main"><br></br><br></br>
                    <center><h2 className="text-center title-page">Shopping Cart</h2></center>
                                {this.state.loadingCart && (
                                    <tr className="text-center">
                                    <td colSpan="6">
                                    </td>
                                    </tr>
                                )}
                                {!this.state.loadingCart && this.state.productCart.length == 0 && (
                                    <tr className="text-center">
                                    <td colSpan="6">
                                        <h6>Your Cart is Empty</h6>
                                    </td>
                                    </tr>
                                )}
                                <ul className="cart-items border-bottom">
                                
                                {this.state.productCart.map((item) => {
                                    return(
                                <li className="cart-item">
                                    <div className="product-line-grid row justify-content-between">
                                        <div className="product-line-grid-left col-md-2">
                                            <span className="product-image media-middle">
                                            <a href="#">
                                                <img className="img-fluid" src={item.image} alt="#" />
                                            </a>
                                            </span>
                                        </div>
                                        <div className="product-line-grid-body col-md-6">
                                            <div className="product-line-info">
                                            <a className="label" href="#" data-id_customization={0}>{item.title}</a>
                                            </div>
                                            <div className="product-line-info product-price">
                                            <span className="value">Rp {item.price}</span>
                                            </div>
                                            <div className="product-line-info">
                                            <span className="label-atrr">{item.body}</span>
                                            </div>
                                        </div>
                                    <div className="product-line-grid-right product-line-actions col-md-4">
                                        <div className="row">
                                            <div className="col-md-5 col qty">
                                                <div className="label">Qty:</div>
                                                <div className="quantity">
                                                    <div className="btn plus">
                                                        <button className="btn btn-touchspin js-touchspin bootstrap-touchspin-up" 
                                                        onClick={() => this.setQty(item.pid, ++item.qty)} data-field="quant[1]" data-type="plus" type="button">+</button>
                                                    </div>
                                                    {/* <div> */}
                                                        <input type="text" name="quant[1]" data-min={1} data-max={100} value={item.qty}className="input-group form-control" />
                                                    {/* </div> */}
                                                    {/* <div className="btn minus"> */}
                                                    &nbsp;
                                                        <button  data-field="quant[1]" onClick={() => this.setQty(item.pid, --item.qty)} 
                                                        className="btn btn-touchspin js-touchspin bootstrap-touchspin-down" data-type="minus" type="button">-</button>
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                            <div className="col-md-5 col price">
                                                <div className="label">Total:</div>
                                                <div className="product-price total">
                                                    <span>Rp {item.price * item.qty}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col price">
                                                <div className="label"></div>
                                                <div className="product-price total">
                                                <a className="remove-from-cart" rel="nofollow" href="#" data-link-action="delete-from-cart" data-id-product={1}>
                                                    <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.deleteCart(item.pid)}/>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                )})}
                                </ul>
                    </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="total-amount">
                            <div className="row">
                                <div className="col-lg-8 col-md-5 col-12">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                Subtotal<span> Rp {this.state.totalPrice}</span>
                                            </li>
                                            <li>
                                                Shipping<span> Free</span>
                                            </li>
                                            <li className="last">
                                                Total Payment<span> Rp {this.state.totalPrice}</span>
                                            </li>
                                        </ul>
                                        <div className="button">
                                            <a href="/checkout" className="btn btn-success">Checkout</a> 
                                        </div>
                                        <br></br><br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart