/* eslint-disable react/prop-types */

export default function VanCard(props) {

    const styles = {
        // eslint-disable-next-line no-constant-condition
        backgroundColor: props.type === 'simple' ? '#E17654' : "white" && props.type === 'rugged' ? '#115E59' : "white"  && props.type === 'luxury' ? "#161616" : "white"
    }

    return (
        <div className="card">
            <img className="card--img" src={props.img} />
            <div className="card--content">
                <h2 className="card--title">{props.title}</h2>
                <h2>{`${ props.price}$`} <span>/day</span></h2>
            </div>
            <i className="card--type" style={styles}>{props.type }</i>
        </div>
    );
}
