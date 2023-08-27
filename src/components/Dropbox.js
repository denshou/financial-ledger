import React, { useState } from "react";
import { styled } from "styled-components";

const Dropbox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => {
    // 드롭다운이 열려있으면 옵션을 감추고, 닫혀있으면 옵션을 보여준다.
    setIsOpen((prevState) => !prevState); // 이전값이 true이면 false. false이면 true로 바꿔줌
  };

  const handleSelect = (option) => {
    // 옵션을 클릭하면 작동하므로 renderedOption에 추가
    //특정 옵션을 눌렀을 때, 그 값으로 selectedOption을 바꿔줌
    setSelectedOption(option);
    //옵션을 클릭하면, 드롭박스를 닫아준다.
    setIsOpen(false);
    props.getOption(option.value);
  };

  const renderedOptions = props.options.map((option) => {
    return (
      <div
        className={option.className}
        key={option.value}
        onClick={() => handleSelect(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      {/* 값이 null이면 선택하기, 값이 있으면 label */}
      <div className="select" onClick={handleClick}>
        {!selectedOption ? "선택하기" : selectedOption.label}
      </div>
      {isOpen && <>{renderedOptions}</>}
    </>
  );
};

export default Dropbox;
