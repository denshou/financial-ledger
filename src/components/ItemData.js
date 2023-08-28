import React from "react";
import ItemDisplay from "./ItemDisplay";

const ItemData = (props) => {
  let content = <p>값이 없습니다.</p>;
  if (props.sortedItems.length > 0) {
    content = props.sortedItems.map((item) => (
      <ItemDisplay
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        type={item.type}
        date={item.date}
        memo={item.memo}
        repurchase={item.repurchase}
        deleteItem={props.deleteItem}
      />
    ));
  }
  return <div>{content}</div>;
};

export default ItemData;
