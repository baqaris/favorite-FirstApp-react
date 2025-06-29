"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;

}


export default function ProductListPage() {

    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(20);
    const [sort, setSort] = useState("asc");
    const [isLoading, setIsLoading] = useState(true);
    const [selectImage, setSelectImage] = useState<string | null>(null);



    const getProducts = () => {
        setIsLoading(true);
        axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
            .then((result) => {
                setProduct(result.data);
                setIsLoading(false);
            })
    }

    useEffect(getProducts, [sort, limit]);

    const hendleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value)
    }



    return (
        <div className={styles.container}>
            <h1> Axios Product List</h1>

            <div className={styles.sortContainer}>
                <label>Sort by:</label>
                <select onChange={hendleSort} value={sort}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

                <label style={{ marginLeft: "10px" }}>Limit : </label>
                <select onChange={(e) => setLimit(Number(e.target.value))} value={limit}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>


            {isLoading ? (
                <div className={styles.spinner}></div>
            ) : (
                < div className={styles.productContainer}>

                    {product.map((product: Product) => (


                        <div key={product.id} className={styles.productList}>

                            {/* ------ Photo zooming ------*/}


                            {product.image && (<img src={product.image} alt={product.title} onClick={() => setSelectImage(product.image)} />)}

                            <div className={styles.productinfo}>
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p>{product.price} $</p>

                                <div>
                                    <button
                                        onClick={() => alert(`You have bought ${product.title}`)}
                                        className={styles.buyCont}>buy</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {selectImage && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <img src={selectImage} alt="Zoomed Photo" />
                        <button
                            onClick={() => setSelectImage(null)}
                            className={styles.closeButton}>X</button>
                    </div>
                </div>
            )}
        </div >


    );

}