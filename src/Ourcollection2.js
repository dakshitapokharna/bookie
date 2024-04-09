import Cards from "./Cards";
import Ourcollection from "./Ourcollection";
const Ourcollectionss = () => {
  return (
    <section id="Ourcollection">
      <div className="Ourcollectionss" id="collection">
        <div className="collection">
          {" "}
          <h2>Our Collection</h2>
          <div className="Ourcollection">
            <Cards booksBS={Ourcollection} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourcollectionss;
