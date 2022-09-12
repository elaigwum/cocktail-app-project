import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback
} from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const request = await fetch(`${url}${search}`);
      const data = await request.json();
      //console.log(data.drinks);
      const { drinks } = data;
      if (data) {
        setCocktail(drinks);
      }
      if (drinks === null) {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    //setCocktail(data);
  }, [search]);
  useEffect(() => {
    fetchData();
  }, [search, fetchData]);
  return (
    <AppContext.Provider value={{ cocktail, loading, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
