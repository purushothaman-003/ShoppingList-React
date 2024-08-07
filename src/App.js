import React, { useState } from "react";
import "./style.css";
import { FaTrashAlt } from "react-icons/fa";

function ShoppingList() {
  const [myList, setMyList] = useState(["Tomato", "Potato", "Orange", "Lemon", "Fruits"]);
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (item.trim() !== "") {
      setMyList([...myList, item]);
      setItem("");
    }
  };

  const deleteItem = (index) => {
    setMyList(myList.filter((_, i) => i !== index));
  };

  return (
    <>
      <input
        type="text"
        value={item}
        onChange={handleChange}
        placeholder="Enter your item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {myList.map((item, index) => (
          <li key={index} className="list-item">
            {item}
            <FaTrashAlt
              className="delete-icon"
              onClick={() => deleteItem(index)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
