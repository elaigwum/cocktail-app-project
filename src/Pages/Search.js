import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
const Search = () => {
  const { setSearch } = useGlobalContext();
  const refObj = useRef("");
  useEffect(() => {
    refObj.current.focus();
  }, []);
  const handleChange = () => {
    setSearch(refObj.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search Your Favorite Cocktail</label>
        <input
          type="text"
          id="search-input"
          ref={refObj}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
