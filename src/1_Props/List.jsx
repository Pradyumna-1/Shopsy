import React from "react";
import ListItem from "./ListItem";
import Interpolation from "./Interpolation";
function List() {
  // Using List key element
  let fruits = ["Mango", "Banacna", "Apple"];
  let price = [100, 200, 214];

  return (
    <>
      {/* <ListItem item="Mango" price={100} /> */}
      
      <Interpolation />


      {/* Using List key element */}
      <ul>
        {fruits.map((ele, ind) => {
          return <ListItem item={ele} price={price[ind]} key={ind} />;
        })}
      </ul>
    </>
  );
}

export default List;
