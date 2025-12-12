import { useState } from "react";

function SingleLineEdit({ value, setValue }) {
  const [editingValue, setEditingValue] = useState(value);

  //When a user input text the value will be stored in setEditingValue
  function onChange(event) {
    setEditingValue(event.target.value);
  }

  //On press of esc or enter user can exit from input field
  function onKeyDown(event) {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }

  function onBlur(event) {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  }

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
}

export default SingleLineEdit;
