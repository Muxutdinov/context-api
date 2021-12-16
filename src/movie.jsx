import React, { useContext } from "react";
import { Kino } from "./Context";
const Movie = (props) => {
  const [data,setData]=useContext(Kino)
  const onDelete = (e) =>{
       setData((prev)=>prev.filter((value)=>{return value.id !== e}))
  }
  return (
    <div>
      <div>
        <h1>Name:{props.data.name}</h1>
        <h3>price:{props.data.price}</h3>
        <button onClick={()=>onDelete(props.data.id)}>Delete</button>
        <hr/>
      </div>
    </div>
  );
};
export default Movie;
