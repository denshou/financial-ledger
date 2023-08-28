import logo from "./logo.svg";
import "./App.css";
import Dropbox from "./components/Dropbox";
import { useState } from "react";
import ItemData from "./components/ItemData";
import Form from "./components/Form";
import Filter from "./components/Filter";

function App() {
  const options = [
    { label: "식료품", value: "grocery", className: "first" },
    { label: "음료", value: "drink", className: "second" },
    { label: "기호식품", value: "favoritefood", className: "third" },
  ];

  const [items, setItems] = useState([
    {
      id: "e1",
      name: "콜라",
      price: 3000,
      type: "drink",
      date: new Date(2023, 7, 26),
      memo: "코카콜라",
      repurchase: "false",
    },
    {
      id: "e2",
      name: "사이다",
      price: 2000,
      type: "drink",
      date: new Date(2023, 7, 28),
      memo: "칠성사이다",
      repurchase: "true",
    },
    {
      id: "e3",
      name: "사탕",
      price: 200,
      type: "favoritefood",
      date: new Date(2023, 7, 29),
      memo: "츄파춥스",
      repurchase: "true",
    },
  ]);
  const getItemData = (data) => {
    setItems([
      {
        id: Math.random().toString(),
        name: data.name,
        price: data.price,
        type: data.type,
        date: data.date,
        memo: data.memo,
        repurchase: data.repurchase,
      },
      ...items,
    ]);
  };

  const deleteItem = (id) => {
    const filteredArray = items.filter((item) => item.id !== id);
    setItems(filteredArray);
  };

  return (
    <div className="App">
      <Form options={options} getItemData={getItemData} />

      <div className="filter-box">
        <Filter options={options} items={items} deleteItem={deleteItem} />
      </div>

      {/* 드롭박스// 유형 필터 / 정렬 기준 // 시작 기간  끝 기간  
      정렬 기준 : 가격 높은 순, 가격 낮은 순, 최신 순, 오래된 순 */}
      {/* <div className="result">
        <ItemData items={items} deleteItem={deleteItem} />
      </div> */}
    </div>
  );
}

export default App;
