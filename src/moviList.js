import React, { useContext } from "react";
import  Movie  from "./movie";
import { Kino } from "./Context";
export const MovList = () => {
  const [data,setData] = useContext(Kino)
  console.log(data, 'test');
  return (
    <div>
      {data.map((value, index) => {
        return (
         <Movie key={value.id} data={value}/>
        );
      })}
    </div>
  );
};
export default MovList;