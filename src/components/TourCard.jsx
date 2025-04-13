import React, {useState} from "react";

const TourCard = ({id, name, info, image, price, onRemove}) => {

        //local state to toggle Read More / Show Less 
        const [readMore, setReadMore] = useState(false);

        return (
            <article className="tour-card">
                <img src={image} alt={name}/>
                <div className="tour-info">
                    <div className="tour-header">
                <h2>{name}</h2>
                <span className="price">${price}</span>
                </div>
                <p>
  
                    {readMore ? info : `${info.substring(0, 100)}...`} {/* Use 'info' here */}
                    <button onClick={() => setReadMore(!readMore)}> 
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>

                {/* Button to remove the Tour */}
                <button className="btn-remove" onClick={() => {onRemove(id)}}>
                Not Interested
                </button>
                </div>
            </article>
        );
    };


export default TourCard;