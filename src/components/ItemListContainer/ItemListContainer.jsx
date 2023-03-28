import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

/*-------mock async service------ */
import productDatabase from '../../data/productDatabase'

function getItems(){
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productDatabase);
        }, 2500);
    })

    return promesa;
}

function getItemsByCategory(categoryURL) {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const filtro = productDatabase.filter(
          (item) => item.category === categoryURL
        );
        resolve(filtro);
      }, 2000);
    });
  
    return promesa;
  }

/*--------------------------------------------*/

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
      if (categoryid === undefined) {
        getItems().then((respuesta) => {
          setProducts(respuesta);
        });
      } else {
        getItemsByCategory(categoryid).then((respuesta) =>
          setProducts(respuesta)
        );
      }
    }, [categoryid]);

  return (
    < ItemList items = {products} /> 
  )
}

export default ItemListContainer;