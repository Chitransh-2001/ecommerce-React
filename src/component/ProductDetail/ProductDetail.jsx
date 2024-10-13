import React, { useState } from "react";
import "./ProductDetail.css";
import  AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import  BalanceIcon  from "@mui/icons-material/Balance";

const ProductDetail =()=>{
    const[selectImg,setSelectImg]=useState(0);
    const [quantity,setQuantity]=useState(1);
    const images=[
        "https://images.pexels.com/photos/2382255/pexels-photo-2382255.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
    return(
        <div className="product">
            <div className="left">
            <div className="images">
                <img src={images[0]} alt="" onClick={e=>setSelectImg(0)}/>
                <img src={images[1]} alt="" onClick={e=>setSelectImg(1)}/>
            </div>
            <div className="mainImg">
                <img src={images[selectImg]} alt=""/>
            </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">Rs.2000</span>
                <p> A T-shirt (also spelled tee shirt), or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.
                </p>
              <div className="quantity">
                <button onClick={()=>setQuantity((prev)=>(prev===1?1:prev-1))}>-</button>
                {quantity}
                <button onClick={()=>setQuantity((prev)=>(prev+1))}>+</button>
              </div>  
             <button className="add">
                <AddShoppingCartIcon/>ADD TO CART
             </button>
             <div className="links">
             <div className="item">
                <FavoriteBorderIcon/>ADD TO WISH LIST
                </div>
                <div className="item">
                    <BalanceIcon/>ADD TO COMPARE
                </div>
             </div>
                <div className="info">
                    <span>Vender: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Top, Women</span>
                </div> 
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>         
            </div>
        </div>

    )
}
export default ProductDetail;