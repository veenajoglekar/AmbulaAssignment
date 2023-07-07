import React, { useState } from "react";
import "./shoppingCart.css";
import item1Image from "../../assets/item1.jpg";
import item2Image from "../../assets/item2.jpg";
import item3Image from "../../assets/item3.jpg";
import item4Image from "../../assets/item4.jpg";

export const ShoppingCart = () => {
  const [catalog, setCatalog] = useState([
    { title: "Mattress ", img: item1Image, qty: 0, price: "2000" },
    { title: "Office Chair", img: item2Image, qty: 0, price: "2500" },
    { title: "Leather Chair", img: item3Image, qty: 0, price: "5000" },
    { title: "Cupboard", img: item4Image, qty: 0, price: "12000" },
  ]);

  const [cartFlag, setCartFlag] = useState(false);

  const updateCart = (item, incFlag) => {
    let arr = [...catalog];
    arr.forEach((x) => {
      if (item.title === x.title) {
        x.qty = incFlag ? x.qty + 1 : x.qty - 1;
      }
    });
    setCatalog(arr);
  };

  return (
    <>
      {!cartFlag ? (
        <div className="shopContainer">
          <h2 style={{ marginTop: "-100px", marginBottom: "30px" }}>
            Product Catalog
          </h2>

          <div className="shopGrid">
            {catalog.map((card) => {
              return (
                <div className="card">
                  <div className="card-image">
                    <img className="card-image" src={card.img} />
                  </div>
                  <div className="card-title">{card.title}</div>

                  <div className="d-flex justify-content align-items-center">
                    <div className="card-price">{"$" + card.price}</div>
                    {card.qty > 0 && (
                      <div className="d-flex justify-content align-items-center">
                        <button
                          onClick={() => updateCart(card, false)}
                          style={{ marginRight: "15px" }}
                        >
                          -
                        </button>
                        <p style={{ marginRight: "15px" }}>{card.qty || 0}</p>
                        <button onClick={() => updateCart(card, true)}>
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="addToCart">
                    <button
                      className="button2"
                      style={{ marginBottom: "10px" }}
                      onClick={() => updateCart(card, true)}
                      
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}

            <div>
              <button
              style={{opacity: catalog.some((x) => x.qty > 0 ) ? '100%' : '60%' }} className="button2" onClick={() => setCartFlag(true)}
              disabled={ catalog.some((x) => x.qty > 0 ) ? false : true}>
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="shopContainer">
            <div style={{alignItems: 'start'}}>
            <button  className="button" onClick={() => setCartFlag(false)}>Back</button>
            </div>
            <h2 style={{textAlign: 'left'}}>Cart</h2>
            <table class="styled-table" style={{color: "white"}}>
              <thead>
                <tr>
                  <th style={{color: "white"}}>SrNo</th>
                  <th style={{color: "white"}}>Item Name</th>
                  <th style={{color: "white"}}>Qty</th>
                  <th style={{color: "white"}}>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  catalog.filter(x=> x.qty > 0).map((item, i) => {
                    return (
                  <tr>
                  <td >{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                  <td>{item.qty * item.price}</td>
                </tr>
                    )
                  })
                }
                
              </tbody>
            </table>

            <h3 style={{textAlign: 'left'}}>Total : <p>{catalog.map(x=>x.qty * x.price).reduce((a,b) => a+b)}</p></h3>
          </div>
        </>
      )}
    </>
  );
};
