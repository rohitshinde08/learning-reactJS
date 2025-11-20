import React from 'react'
import { Bookmark } from 'lucide-react';
export const Card = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.logo} alt="image" />
                    <button>Save <Bookmark size={13} strokeWidth={0.5} /></button>
                </div>

                <div className="center">
                    <h3>{props.company}<span>{props.posted}</span></h3>
                    <h2>{props.position}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div>
                    <h3>{props.pay}r</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>
            </div>
        </div>
    )
}

export default Card;