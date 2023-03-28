import "./ItemDetailContainer.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* ------------- Mock async Service -------------------  */
import productDatabase from "../../data/productDatabase"
import ItemDetail from "../ItemDetail/ItemDetail";

function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemRequested = productDatabase.find((item) => {
        return item.id === parseInt(idURL);
      });
      resolve(itemRequested);
    }, 2000);
  });

  return promesa;
}
/* ------------------------------------------------- */

function ItemDetailContainer() {
  const [products, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  return (

    < ItemDetail products={products} /> 
  );
}

export default ItemDetailContainer;