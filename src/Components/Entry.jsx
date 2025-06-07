import './entry.css'


function Entry(props) {
    console.log(props)
    return (
        <>
        <article className="journal-entry">
            
            <div className="main-image-container">
                 <img 
                 src = {props.img.src} 
                 alt={props.img.alt}
                 />
            </div>           
            <div className="info-container">
                <img className="marker" src="../location-icon.png" width="20px" alt="location icon"/>
                <span className="country" >{props.country}</span>
                <a href={props.googleMapLink}>View on Google Maps </a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>

        </>
    )
}

export default Entry