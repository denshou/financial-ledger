import React, { useState } from "react";
import Dropbox from "./Dropbox";
import ItemData from './ItemData';

const Filter = ({ options, items, deleteItem }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const sort = [
    { label: "가격 높은 순", value: "price-desc", className: "first" },
    { label: "가격 낮은 순", value: "price-asc", className: "second" },
  ];
  const [sortDate, setSortDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const startChange = (event) => {
    setSortDate((prevState) => ({
      ...prevState,
      startDate: event.target.value,
    }));
    console.log(sortDate);
  };
  const endChange = (event) => {
    setSortDate((prevState) => ({
      ...prevState,
      endDate: event.target.value,
    }));
    console.log(sortDate);
  };

  //   const filterChangeHandler = () => {};

  const getSort = (data) => {
    if (data === "price-asc") setSortOrder(data);
    else if (data === "price-desc") setSortOrder(data);
    else if (data === "grocery") setSortBy(data);
    else if (data === "drink") setSortBy(data);
    else if (data === "favoritefood") setSortBy(data);
  };

  let sortedItems = items;
  if (!sortBy && !sortOrder) console.log(sortedItems);
  else if (sortBy && !sortOrder) {
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
    console.log(sortedItems);
  } else if (!sortBy && sortOrder === "price-asc") {
    sortedItems.sort((a, b) => a.price - b.price);
    console.log(sortedItems);
  } else if (!sortBy && sortOrder === "price-desc") {
    sortedItems.sort((a, b) => b.price - a.price);
    console.log(sortedItems);
  } else if (sortBy && sortOrder === "price-asc") {
    sortedItems.sort((a, b) => a.price - b.price);
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
    console.log(sortedItems);
  } else if (sortBy && sortOrder === "price-desc") {
    sortedItems.sort((a, b) => b.price - a.price);
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
    console.log(sortedItems);
  }

  return (
    <div>
      <div className="filter">
        <label>유형 필터</label>
        <div>
          <Dropbox options={options} getOption={getSort} />
        </div>
        <label>정렬 기준</label>
        <div>
          <Dropbox options={sort} getOption={getSort} />
        </div>
        <label>시작 기간</label>
        <input type="date" value={sortDate.startDate} onChange={startChange} />
        <label>끝 기간</label>
        <input type="date" value={sortDate.endDate} onChange={endChange} />
      </div>
      <div className="result">
        <ItemData deleteItem={deleteItem} sortedItems={sortedItems} />
      </div>
    </div>
  );
};

export default Filter;
