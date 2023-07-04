import React, { useState } from "react";
import Star from "../assets/Star.svg"

const Rating = () => {
    const [ rate, setRate ] = useState(0)
    const ratings = [1, 2, 3, 4, 5]

    const handleClick = (selectedRate) => {
        if (selectedRate === rate) {
            setRate(0)
        }else {setRate(selectedRate)}
    }

   return(
    <div className="card-container">
        <div className="card">
            <div className="card-title">
                <img src={Star} className="star"/>
                <h3>How did we do?</h3>
            </div>
            <div className="card-body">
                <p>
                    Please let us know how we did with your support request.
                    All feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="card-footer">
                <div className="ratings">
                    {ratings.map((x) => (
                        <a className={rate >= x ? 'active' : ''} key={x}  onClick={() => handleClick(x)}>{x}</a>
                    ))}
                </div>
                <div className="submit">
                    <button>submit</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Rating;