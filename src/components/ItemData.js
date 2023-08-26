import React from "react";

const ItemData = ({ items }) => {
  let content = <p>값이 없습니다.</p>;
  if (items.length > 0) {
    content = items.map((item) => (
      <div className="item-data">
        <div>id: {item.id}/</div>
        <div>이름: {item.name}/</div>
        <div>가격: {item.price}/</div>
        <div>유형: {item.type}/</div>
        <div>
          구입 날짜: {new Date(item.date).getFullYear()}년
          {new Date(item.date).getMonth() + 1}월{new Date(item.date).getDate()}
          일/
        </div>
        <div>메모: {item.memo}/</div>
        <div>재구매 의사: {item.repurchase}</div>
        <button>삭제</button>
      </div>
    ));
  }
  return <div>{content}</div>;
};

export default ItemData;
