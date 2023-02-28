import { useState, useEffect, useRef, memo } from "react";
import "./dropdown.css";
import downIcon from "../../public/icons/down-arrow.png";

const Dropdown = ({ options, width, border = true, bold = true }) => {
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`filter-dropdown ${border === false ? "" : "border-shadow"}`}
      style={{ width: `${width}vw` }}
      ref={dropDownRef}
    >
      <div
        className={`selected-option ${bold ? "bold" : ""}`}
        onClick={toggleDropdown}
      >
        {selectedOption}
        <img src={downIcon} className={`arrow ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && (
        <div
          className={`options ${bold ? "bold" : ""}`}
          style={{ width: `${width}vw` }}
        >
          {options.map((option, i) => (
            <div key={i} onClick={() => handleOptionSelect(option)}>
              <div>{option}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Dropdown);
