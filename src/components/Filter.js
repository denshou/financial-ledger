import React, { useState } from "react";
import Dropbox from "./Dropbox";
import ItemData from "./ItemData";

const Filter = ({ options, items, deleteItem }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const sort = [
    { label: "가격 높은 순", value: "price-desc", className: "first" },
    { label: "가격 낮은 순", value: "price-asc", className: "second" },
    { label: "최신 순", value: "date-desc", className: "third" },
    { label: "오래된 순", value: "date-asc", className: "fourth" },
  ];
  const [sortDate, setSortDate] = useState({
    startDate: new Date(1990, 1, 1),
    endDate: new Date(2500, 12, 31),
  });
  const startChange = (event) => {
    setSortDate((prevState) => ({
      ...prevState,
      startDate: event.target.value,
    }));
  };
  const endChange = (event) => {
    setSortDate((prevState) => ({
      ...prevState,
      endDate: event.target.value,
    }));
  };

  //   const filterChangeHandler = () => {};

  const getSort = (data) => {
    if (data === "price-asc") setSortOrder(data);
    else if (data === "price-desc") setSortOrder(data);
    else if (data === "grocery") setSortBy(data);
    else if (data === "drink") setSortBy(data);
    else if (data === "favoritefood") setSortBy(data);
    else if (data === "date-desc") setSortOrder(data);
    else if (data === "date-asc") setSortOrder(data);
  };

  let sortedItems = items;

  if (!sortBy && !sortOrder) console.log();
  else if (sortBy && !sortOrder) {
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
  } else if (!sortBy && sortOrder === "price-asc") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (!sortBy && sortOrder === "price-desc") {
    sortedItems.sort((a, b) => b.price - a.price);
  } else if (!sortBy && sortOrder === "date-asc") {
    sortedItems.sort((a, b) => a.date - b.date);
  } else if (!sortBy && sortOrder === "date-desc") {
    sortedItems.sort((a, b) => b.date - a.date);
  } else if (sortBy && sortOrder === "price-asc") {
    sortedItems.sort((a, b) => a.price - b.price);
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
  } else if (sortBy && sortOrder === "price-desc") {
    sortedItems.sort((a, b) => b.price - a.price);
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
  } else if (sortBy && sortOrder === "date-asc") {
    sortedItems.sort((a, b) => a.date - b.date);
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
  } else if (sortBy && sortOrder === "date-desc") {
    sortedItems.sort((a, b) => b.date - a.date);
    sortedItems = items.filter((expense) => {
      return expense.type === sortBy;
    });
  }

  if (sortDate.startDate) {
    sortedItems = sortedItems.filter((expense) => {
      let from = new Date(sortDate.startDate);
      from.setHours(from.getHours() - 9);
      return expense.date >= from;
    });
  }
  if (sortDate.endDate) {
    sortedItems = sortedItems.filter((expense) => {
      let to = new Date(sortDate.endDate);
      to.setHours(to.getHours() - 9);
      return expense.date <= to;
    });
  }
  // if(new Date(sortDate.startDate)){}

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
