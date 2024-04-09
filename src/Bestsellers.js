import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";
import Ourcollection from "./Ourcollection";

const Bestsellers = () => {
  return (
    <section id="best selling">
      <div className="Ourcollectionss" id="collection">
        <div className="collection">
          {" "}
          <h2>Bestsellers</h2>
          <div className="Ourcollection">
            <Cards booksBS={Ourcollection} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
