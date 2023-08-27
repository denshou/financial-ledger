import React, { useState } from "react";
import Dropbox from "./Dropbox";

const Form = ({ options, getItemData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    type: "",
    date: new Date(),
    memo: "",
    repurchase: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  //input change
  const checkboxChange = () => {
    setIsChecked(!isChecked);
  };
  const nameChange = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  const priceChange = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };
  const dateChange = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };
  const memoChange = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      memo: event.target.value,
    }));
  };
  const radioChange = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      repurchase: event.target.value,
    }));
  };
  //
  const getOption = (data) => {
    setObjectState((prevState) => ({
      ...prevState,
      type: data,
    }));
  };
  const submitBtnHandler = (event) => {
    event.preventDefault();

    getItemData(objectState);

    // console.log(objectState);

    setObjectState({
      id: "",
      name: "",
      price: 0,
      type: "",
      date: new Date(),
      memo: "",
      repurchase: false,
    });
    setIsChecked(false);
  };

  return (
    <form className="form" onSubmit={submitBtnHandler}>
      <div className="form-box">
        <div className="name">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            className="input-lg"
            id="name"
            value={objectState.name}
            onChange={nameChange}
          />
        </div>
        <div className="price">
          <label htmlFor="price">가격</label>
          <input
            type="number"
            className="input-lg"
            id="price"
            value={objectState.price}
            onChange={priceChange}
          />
        </div>
        <div className="type">
          <label htmlFor="">유형</label>
          <div className="drop-input">
            <Dropbox options={options} getOption={getOption} />
          </div>
        </div>
        <div className="date">
          <label htmlFor="date">구입 날짜</label>
          <input
            type="date"
            id="date"
            value={objectState.date}
            onChange={dateChange}
          />
        </div>

        <div className="memo">
          <label>메모</label>
          <input
            type="checkbox"
            id="memo-check"
            checked={isChecked}
            onChange={checkboxChange}
          />
          <label htmlFor="memo-check">메모 작성</label>
          <input
            type="text"
            disabled={!isChecked}
            value={objectState.memo}
            onChange={memoChange}
          />
        </div>
        <div className="repurchase">
          <label htmlFor="">재구매 의사</label>
          <input
            type="radio"
            name="re"
            id="re-yes"
            value="true"
            onChange={radioChange}
          />
          <label htmlFor="re-yes">한다</label>

          <input
            type="radio"
            name="re"
            id="re-no"
            value="false"
            onChange={radioChange}
          />
          <label htmlFor="re-no">안한다</label>
        </div>
        <button className="submit-btn" type="submit">
          확인
        </button>
      </div>
    </form>
  );
};

export default Form;
