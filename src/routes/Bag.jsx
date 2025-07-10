import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { BagItems } from "../component/BagItems.jsx";
import { BagSummary } from "../component/BagSummary.jsx";
import { useSelector } from "react-redux";
import { NoItems } from "../component/NoItems.jsx";
export const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);
  const cartItems = items.filter((item) => bagItems.includes(item.id));

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {cartItems.length === 0 ? (
              <NoItems />
            ) : (
              cartItems.map((item) => <BagItems item={item}></BagItems>)
            )}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
