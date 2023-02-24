import { useState, useEffect, useRef, memo } from "react";
import "./dropdown.css";
import downIcon from "../../public/photos/dropdown-vector-down.png";

const Dropdown = ({ options, width }) => {
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
      className="filter-dropdown"
      style={{ width: `${width}vw` }}
      ref={dropDownRef}
    >
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption}
        <img src={downIcon} className={`arrow ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && (
        <div
          className={`options ${setTimeout(
            () => (isOpen ? "fade-out" : ""),
            210
          )}`}
          style={{ width: `${width + 1}vw` }}
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
