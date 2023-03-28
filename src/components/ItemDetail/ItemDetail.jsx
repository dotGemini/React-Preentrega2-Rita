function ItemDetail({products}) {
    return(
        <div className="detail">
      <img src={products.img} alt="imagen"></img>
      <h1>{products.title}</h1>
      <h3>{products.category}</h3>
      <p>${products.price}</p>
    </div>
    );
}

export default ItemDetail;