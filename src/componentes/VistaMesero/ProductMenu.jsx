
import React from 'react';

const Product = ({ state, handleQuantity, selectProduct, product, selectExtra }) => {

    const addProducts = (e, id) => {
        e.preventDefault();
        const data = new FormData(e.target);
        for (let [key, value] of data.entries()) {
            //console.log(key + "algoaqui");
             if(key && value === "1"){
                //console.log("presiono Queso")
                 selectExtra({  amount: 0 });
            } else if(key && value === "2"){
                console.log("presiono huevo")
            }
        }
        e.target.reset();
       

        const findProduct = state.products.find(item => item.id === id)
        if (findProduct) {
            return handleQuantity(id, "+")
        } else {
            return selectProduct({ ...product, amount: 1 });
        }
    }

    return (
        <div className="container-fluid">
            <form className="row border-bottom border-primary" onSubmit={(e) => addProducts(e, product.id, product.extra)}>
                <div className="container-img col-4">
                    <img src={product.img} alt="" />
                </div>

                <p className="text-menu col-3">{product.name}</p>

                <p className="text-menu col-3">$ {product.price}</p>

                {
                    product.type === "Hamburguesas" ?

                        <div className='adicional'>
                            {product.extra.map((extra) => (
                                <>
                                    <input name={extra.id} type="checkbox" class="me-2 ms-2" /> {extra.name}  $ {extra.price}
                                </>
                            ))}
                        </div>
                        : null

                }

                <div className="text-menu col-2">
                    <button type="submit" class="btn btn-warning">Agregar</button>
                </div>
            </form>
        </div>
    )

}

export default Product;
