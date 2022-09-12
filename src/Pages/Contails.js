import Loading from "./Loading";
import { useGlobalContext } from "../context";
import Product from "./Product";
const Cocktails = () => {
  const { cocktail, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return (
      <>
        <h2>No Cocktail Matched Your Search</h2>
      </>
    );
  }
  return (
    <div className="home">
      <h2>Cocktails</h2>
      <div className="cocktails">
        {cocktail.map((product) => {
          return <Product key={product.idDrink} {...product} />;
        })}
      </div>
    </div>
  );
};
export default Cocktails;
