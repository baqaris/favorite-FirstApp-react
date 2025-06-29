"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";


interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    
}


export default function ProductListPage(){

const[product, setProduct] = useState([]);
const [limit, setLimit]= useState(20);
const[sort, setSort]= useState("asc");

const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
    .then((result) =>{
        setProduct(result.data);
    })
}

useEffect(getProducts, []);


return(
    <div className={styles.container}>
        <h1> Axios Product List</h1>

        <div className={styles.productContainer}>

            {product.map((product:Product) => (

            <div key={product.id} className={styles.productList}>

                {product.image && (<img src={product.image} alt={product.title} />)}
                <div className={styles.productinfo}> 
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>{product.price}</p>
                
                <div>
                    <button 
                    onClick={() => alert(`You have bought ${product.title}`)}
                    className={styles.buyCont}>buy</button>
                </div>
                </div>
            </div>))}
        </div>

    </div>


);

}