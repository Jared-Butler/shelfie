import React from 'react';

export default function Product(props){
    return(
        <div>
            Product Component

            <div>

            { props.makeThisShizWork}

            </div>
            {/* <img src={props.photo}/>
            <h2>{props.prodName}</h2>
            <h3>{props.price}</h3> */}
        </div>
    )
}