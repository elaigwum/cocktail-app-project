import { Link } from "react-router-dom";
const Product = ({
  idDrink,
  strAlcoholic,
  strDrink,
  strDrinkThumb,
  strGlass
}) => {
  return (
    <div className="product">
      <div className="img">
        <img src={strDrinkThumb} alt={strAlcoholic} />
      </div>

      <div className="details">
        <h2>{strDrink}</h2>
        <p className="p">{strGlass}</p>
        <p className="pp">{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`}>
          <button>DETAILS</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
