import { useEffect, useState } from "react";
import VanCard from "../components/VanCard";

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
    const [vansData, setVansData] = useState([]);

    //const vansElements = vansData.map(van => <p key={van.id}>{van.name }</p>)

    useEffect(() => {
        fetch("api/vans")
            .then((res) => res.json())
            .then((data) => setVansData(data.vans));
    }, []);

    return (
        <div className="container">
            {vansData.map((van) => (
                <VanCard
                    key={van.id}
                    title={van.name}
                    price={van.price}
                    desc={van.desc}
                    img={van.imageUrl}
                    type={van.type}
                />
            ))}
        </div>
    );
}
