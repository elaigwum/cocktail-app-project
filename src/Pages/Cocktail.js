import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";
//import { useEffect, useState } from "react";
//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Cocktail = () => {
  //const [cocktail, setCocktail] = useState(null);
  //const [loading, setLoading] = useState(true);
  const { cocktail } = useGlobalContext();
  const { id } = useParams();
  /*useEffect(() => {
    try {
      const fetchDetails = async () => {
        setLoading(true);
        let request = await fetch(`${url}${id}`);
        let response = await request.json();
        //console.log(response);
        if (response) {
        }
        setCocktail(response);
      };
      fetchDetails();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, [id]);*/
  //console.log(cocktail)
  let drink = cocktail.find((item) => item.idDrink === id);
  //console.log(drink);
  //const one = cocktail[0];
  const {
    strAlcoholic,
    strDrink,
    strDrinkThumb,
    strGlass,
    strCategory,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3
  } = drink;
  return (
    <div className="drink-details">
      <div className="home-btn">
        <Link to="/">
          <button>BACK HOME</button>
        </Link>
        <p>{drink.strDrink}</p>
      </div>
      <div className="content">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="content-details">
          <p>
            <span>Name:</span> {strDrink}
          </p>
          <p>
            <span>Category :</span> {strCategory}
          </p>
          <p>
            <span>Info :</span> {strAlcoholic}
          </p>
          <p>
            <span>Glass :</span> {strGlass}
          </p>
          <p>
            <span>Instructions:</span> {strInstructions}
          </p>
          <p>
            <span> Ingredients:</span> {strIngredient1} {strIngredient2}{" "}
            {strIngredient3}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cocktail;
/**/
