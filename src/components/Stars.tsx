import React from "react";
import Star from "./Star";

type PropsStars = {
    count: number;
}

const Stars: React.FC<PropsStars> = ({ count }) => {
    const starsLength = count > 0 && count <= 5 ? true : false;
    const starsArray: number[] = [];
    
    for (let i = 0; i < count; i++) {
        starsArray.push(1);
    }   


    return (
        starsLength === true ?
        <ul className="card-body-stars u-clearfix">
            {starsArray.map((el, index) =>
                <Star key={index}/>
            )}
        </ul>
        : ""
    )
}

export default Stars
