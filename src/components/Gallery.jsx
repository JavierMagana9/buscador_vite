import { Card } from "./Card";
import { useEffect, useState } from "react";

export const Gallery = ({  }) => {




  return (
    <>
      <h2 className="container">{cathegory}</h2>
      <section className="galery">
        <p>{JSON.stringify(dataCard)}</p>
      {/* {
      dataCard.map(card)=>{
        card
      }
      } */}
      </section>
    </>
  );
};
