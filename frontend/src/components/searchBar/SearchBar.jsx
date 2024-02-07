import { useState, useEffect } from "react";
import styles from "./searchBar.module.css";
import Navbar from "../../layout/navbar/Navbar";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchResponse, setSearchResponse] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        if (search !== "") {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/search?searchRequest=${search}`,
            {
              method: "get",
              headers: { "Content-Type": "application/json" },
            }
          );

          if (response.status === 200) {
            const searchResult = await response.json();
            setSearchResponse(searchResult);
          }
        }
      } catch (err) {
        // Log des erreurs possibles
        console.error(err);
      }
    })();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className={styles.searchBarPage}>
        <input
          type="text"
          placeholder="rechercher"
          className={styles.searchBarPage__searchBar}
          value={search}
          onChange={handleChangeSearch}
        />
      </div>
      <div id={styles.scrollingMiniatures}>
        {{searchResponse.map((number) => {
          return (
            <div id={styles.scrollingMiniatures__miniature} key={number.id}>
              <Link
                to={{
                  pathname: `/video/${number.id}`,
                  state: { number },
                }}
              >
                <Miniature
                  idMiniature={number.id}
                  key={number.id}
                  carouselClass="videoSlider"
                />
              </Link>
            </div>
          );
        })}}
      </div>
    </>
  );
}

export default SearchBar;
