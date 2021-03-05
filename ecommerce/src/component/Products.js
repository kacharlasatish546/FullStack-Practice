import React from 'react'
import axios from 'axios'
import './Products.css'

class Products extends React.Component {

    constructor(){
        super();
        this.state = {
            products:[]
        }
    }

    renderProducts(){
        var allProducts = this.state.products.map(function(product){
                return <li className="spaces20">{product.userId} {product.Id} {product.title}</li>
        })
        return allProducts;
    }

    renderProduct(){
        var allProducts = this.state.products.map(function(product){
                return <tr><td>{product.userId}</td> <td>{product.id}</td> <td>{product.title}</td></tr>
        })
        return allProducts;
    }


componentDidMount(){
    axios.get("http://jsonplaceholder.typicode.com/posts").then(
        response => {
            console.log(response.data);
            this.setState({
                products:response.data
            })
        }
    )
}

render(){

    if(!localStorage.getItem('token')){
        this.props.history.push("/login");
    }
    return(
        <div>
            <table className="TFtable">
                <thead>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                </thead>
                <tbody>
                {this.renderProduct()}
                </tbody>
            </table>
                {/* <ul>
                    {this.renderProducts()}
                </ul> */}
        </div>
    )
}
}

export default Products;