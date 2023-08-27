import React from "react";

const ItemDisplay = (props) => {
  return (
    <div className="item-data">
      <div>이름: {props.name}/</div>
      <div>가격: {props.price}/</div>
      <div>유형: {props.type}/</div>
      <div>
        구입 날짜: {new Date(props.date).getFullYear()}년
        {new Date(props.date).getMonth() + 1}월{new Date(props.date).getDate()}
        일/
      </div>
      <div>메모: {props.memo}/</div>
      <div>재구매 의사: {props.repurchase}</div>
      <button onClick={() => props.deleteItem(props.id)}>삭제</button>
    </div>
  );
};

export default ItemDisplay;
