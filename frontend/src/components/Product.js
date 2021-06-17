import React, { Component } from 'react'
import ProductContext from './ProductContext';
import firebase from "firebase";
import firebaseConfig from '../firebase/config';

export class Product extends Component {
    constructor(props){
        super(props);
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
          }
        this.state = {
            listProduct: []
        };
    }
    getDataFromServerAPI = () => {
        let ref = firebase.database().ref('/')
        ref.on('value', snapshot => {
            const state = snapshot.val()
            this.setState(state)
        })
    }
    // saveDataToServerAPI = () => {
    //     firebase.database()
    //         .ref('/')
    //         .set(this.state)
    // }
    componentDidMount(){
        this.getDataFromServerAPI();
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevState !== this.state){
    //         this.saveDataToServerAPI();
    //     }
    // }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div id="content-wrapper" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol">
                        <div id="main">
                            <div id="content" className="page-content"><br></br><br></br>
                                <center><h2 className="text-center title-page">Features of Products</h2></center>
                                <section>
                                    <div className="container">
                                    <div className="tab-content product-items">
                                    <div id="grid" className="related tab-pane fade in active show">
                                        <div className="row">   
                                                    {/* {
                                                        this.state.listProduct.map(product => {
                                                            return <ProductContext
                                                            key = {product.pid}
                                                            image={product.image}
                                                            title={product.title}
                                                            body={product.body}
                                                            price={product.price}
                                                            idProduct={product.pid}
                                                            // deleteProduct={(pid) => this.handleDeleteProduct(pid)}
                                                            />
                                                        })
                                                    } */}
                                                    {
                                                        this.state.listProduct.map(data => {
                                                            return <ProductContext product={data}/>;
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} export default Product