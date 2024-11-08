import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

function InputRef(props) {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const onHandleSubmit = () => {
    const inputValue = inputRef.current.value;
    setValue(inputValue);
    inputRef.current.focus();
    alert("value: " + inputValue);
  };
  return (
    <div>
      <input placeholder="input" type="text" ref={inputRef} />
      <button onClick={onHandleSubmit}>submit</button>
    </div>
  );
}

export default InputRef;
