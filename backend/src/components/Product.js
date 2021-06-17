import React, { Component } from 'react'
import ProductContext from './ProductContext';
import firebase from "firebase";
import firebaseConfig from '../firebase/config';
import {storage} from "firebase";

export class Product extends Component {
    constructor(props){
        super(props);
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
          }
        this.state = {
            listProduct: [],
            // image: null,
            
        };
    }
    getDataFromServerAPI = () => {
        let ref = firebase.database().ref('/')
        ref.on('value', snapshot => {
            const state = snapshot.val()
            this.setState(state)
        })
    }
    saveDataToServerAPI = () => {
        firebase.database()
            .ref('/')
            .set(this.state)
    }
    componentDidMount(){
        this.getDataFromServerAPI();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state){
            this.saveDataToServerAPI();
        }
    }

    handleAddProduct = (event) => {
        let formInsertProduct = { ...this.state.insertProduct};
        let timestamp = new Date().getTime();
        formInsertProduct['pid'] = timestamp;
        formInsertProduct[event.target.name] = event.target.value;
        this.setState({insertProduct: formInsertProduct,});
    }
    
    handleSave = () => {
        let title = this.refs.titleProduct.value;
        let body = this.refs.bodyProduct.value;
        let pid = this.refs.pid.value;
        let price = this.refs.priceProduct.value;
        let image = this.refs.imageProduct.value;

        if (pid && image && title & body && price){
            const{listProduct} = this.state;
            const indexProduct = listProduct.findIndex(data => {
                return data.pid === pid;
            });
            listProduct[indexProduct].image = image;
            listProduct[indexProduct].title = title;
            listProduct[indexProduct].body = body;
            listProduct[indexProduct].price = price;
            this.setState({listProduct});
        }else if(image && title && body && price){
            const pid = new Date().getTime().toString();
            const {listProduct} = this.state;
            listProduct.push({pid, image, title, body, price});
            this.setState({listProduct});
        }
        this.refs.imageProduct.value = "";
        this.refs.titleProduct.value = "";
        this.refs.bodyProduct.value = "";
        this.refs.priceProduct.value = "";
        this.refs.pid.value = "";
    }

    handleDeleteProduct = (idProduct) => {
        const {listProduct} = this.state;
        const newState = listProduct.filter(data => {
            return data.pid !== idProduct;
        });
        this.setState({listProduct: newState});
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div id="content-wrapper" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol">
                        <div id="main">
                            <div id="content" className="page-content"><br></br><br></br>
                                <div className="add-form text-center ">
                                    <h1 className="text-center title-page">Add New Product</h1>
                                    <form className="js-addproduct-form border-bottom">
                                    <center>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <div>
                                                <input className="form-control" ref="titleProduct" id="title" name="title" onChange={this.handleAddProduct} type="text" placeholder="Name" />
                                            </div>
                                            </div>
                                            <div className="form-group">
                                            <div>
                                                <input className="form-control" ref="bodyProduct" id="body" name="body" onChange={this.handleAddProduct} type="text" placeholder="Description" />
                                            </div>
                                            </div>
                                            <div className="form-group">
                                            <div>
                                                <input className="form-control" ref="priceProduct" id="price" name="price" onChange={this.handleAddProduct} type="number" placeholder="Price" />
                                            </div>
                                            </div>
                                            <div className="form-group">
                                            <div>
                                                <input className="form-control" ref="imageProduct" id="image" name="image" type="text" onChange={this.handleAddProduct} placeholder="Link of Image" />
                                            </div>
                                            </div>
                                        </div>
                                        <input type="hidden" name="pid" ref="pid"/>
                                    </center><br></br>
                                    <div className="clearfix">
                                        <div>
                                        <button className="btn btn-success"  onClick={this.handleSave} type="submit">
                                            Add Product
                                        </button>
                                        </div>
                                    </div><br></br><br></br>
                                    </form><br></br>
                                </div>
                                <center><h2 className="text-center title-page">Features Products</h2></center>
                                <section>
                                    <div className="container">
                                    <div className="tab-content product-items">
                                        <div id="grid" className="related tab-pane fade in active show">
                                            <div className="row">
                                                {
                                                        this.state.listProduct.map(product => {
                                                            return <ProductContext
                                                            key = {product.pid}
                                                            image={product.image}
                                                            title={product.title}
                                                            body={product.body}
                                                            price={product.price}
                                                            idProduct={product.pid}
                                                            deleteProduct={(pid) => this.handleDeleteProduct(pid)}/>
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