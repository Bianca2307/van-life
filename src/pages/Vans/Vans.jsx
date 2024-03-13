import { useEffect, useState } from "react";
import VanCard from "../../components/VanCard";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

/**
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 */

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vansData, setVansData] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    const typeFilter = searchParams.get("type");
    console.log(typeFilter);

  useEffect(() => {
      async function loadVans() {
          setLoading(true);
          try {
              const data = await getVans();
              setVansData(data);
          } catch (err) {
              setError(err);
          } finally {
              setLoading(false);
          }
      }

      loadVans();
  }, []);

    const displayedElements = typeFilter
        ? vansData.filter((van) => van.type === typeFilter)
        : vansData;

    function handleFilterChange(key, value) {
        setSearchParams((prevSearchParams) => {
            if (value === null) {
                prevSearchParams.delete(key);
            } else {
                prevSearchParams.set(key, value);
            }

            return prevSearchParams;
        });
    }

      if (loading) {
          return <h1>Loading...</h1>;
      }

      if (error) {
          return <h1>There was an error: {error.message}</h1>;
      }
    return (
        <>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${
                        typeFilter === "simple" ? "selected" : ""
                    }`}
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${
                        typeFilter === "luxury" ? "selected" : ""
                    }`}
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${
                        typeFilter === "rugged" ? "selected" : ""
                    }`}
                >
                    Rugged
                </button>
                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >
                        Clear filter
                    </button>
                ) : null}
            </div>
            <div className="container">
                {displayedElements.map((van) => (
                    <Link
                        to={`${van.id}`}
                        state={{
                            search: searchParams.toString(),
                            type: typeFilter,
                        }}
                        key={van.id}
                    >
                        <VanCard
                            title={van.name}
                            price={van.price}
                            img={van.imageUrl}
                            type={van.type}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}
