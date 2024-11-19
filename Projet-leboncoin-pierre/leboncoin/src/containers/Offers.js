import React from "react";
import { fakeDatas } from "./fakedata";
import OffersItem from "../components/OffersItem";

const Offers = () => {
  return (
    <div className="offers">
      {fakeDatas.items.map((offer) => (
        <OffersItem
          key={offer.id}
          created_at={offer.created_at}
          photos={offer.photos}
          price={offer.price}
          title={offer.title}
        />
      ))}
    </div>
  );
};

export default Offers;
