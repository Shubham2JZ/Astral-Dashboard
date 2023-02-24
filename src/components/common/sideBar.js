import React, { useRef, useEffect } from "react";
import "./sideBar.css";

const Sidebar = ({ isOpen, onClose }) => {
  const sideBarRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      onClose();
    }
  }

  return (
    <div ref={sideBarRef} className={`sidebar ${isOpen ? "open" : ""} `}>
      {/* <button onClick={onClose} className="sidebar-close-btn">
        &times;
      </button> */}
    </div>
  );
};

export default Sidebar;
