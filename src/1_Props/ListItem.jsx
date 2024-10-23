import React from "react";
/*
const ListItem = (props) => {
  return (
    <>
      <li>
   
        {props.item} Item price is {props.price}
      </li>
    </>
  );
};
export default ListItem;
*/
import PropTypes from "prop-types";
const ListItem = (props) => {
  //Destructuring
  let { item, price } = props;
  return (
    <>
      <li>
        {item} Price is {price}
      </li>
    </>
  );
};

export default ListItem;
ListItem.defaultProps = {
  item: "Nothing",
  price: 0,
};

ListItem.PropTypes = {
  item: PropTypes.string,
  price: PropTypes.number,
};
