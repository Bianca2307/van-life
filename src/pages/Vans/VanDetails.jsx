import { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { getVans } from "../../api";

export default function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);
    const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans(params.id);
                setVan(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVans();
    }, [params.id]);
       if (loading) {
           return <h1>Loading...</h1>;
       }

       if (error) {
           return <h1>There was an error: {error.message}</h1>;
       }

    // const type = van.type;
    // console.log(type);
    //  const styles = {
    //      // eslint-disable-next-line no-constant-condition
    //      backgroundColor:

    //          type === "simple"
    //              ? "#E17654"
    //              : "white" && type === "rugged"
    //                  ? "#115E59"
    //                  : "white" && type === "luxury"
    //                      ? "#161616"
    //                      : "white"
    //      ,
    //  };
    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className="van-detail-container">
            <Link to={`..?${search}`} relative="path" className="back-button">
                &larr; <span>Back to {type} vans</span>
            </Link>
            
            {van && <div className="van-detail">
                <img src={van.imageUrl} />
                {/* <i className="card--type" style={styles}>
                        {type}
                    </i> */}
                <h2>{van.name}</h2>
                <p className="van-price">
                    <span>${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
            }
        </div>
    );
}
