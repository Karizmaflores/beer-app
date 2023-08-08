import React, { useState } from "react";
import Heart from "react-animated-heart";

const Beer = (props) => {

    const [isClick, setClick] = useState(false);

    console.log("props", props);

    //function handleClick(){
    //setIsLiked(!isLiked);
    //}

    return ( 
    <li className='item'key={props.id}>
    <h2>{props.name}</h2>
    <img
     className='item__image' src={props.image}  alt={props.name}
     /> 

    <div className="HeartIcon">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>

    </li>
   );
};


export default Beer;

// before closing li
//<button onClick={handleClick}>
//{isLiked ? "Liked" : "Hated"}
//</button>