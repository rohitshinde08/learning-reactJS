import React from 'react'

const Card = (props) => {
    return (

        <div className="parent">
            <div className="card">
                <img src={props.img} alt="img" />
                <h2>{props.userName}</h2>
                <p>{props.age}</p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default Card