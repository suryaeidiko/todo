import React, { useState } from "react";

 function P2_To_Do_List_Input_2  (props)  {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <>
      <form className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Add your list items"
            value={inputText}
            style={{ border: "1px solid lightblue" }}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="col-auto">
          <button
            style={{ borderRadius: "50%" }}
            className="btn btn-primary mb-3"
            onClick={() => {
              props.addList(inputText);
              setInputText("");
              if (inputText.length == 0) {
                alert("jhjkhn");
              }
            }}
          >
            +
          </button>
        </div>
      </form>
    </>
  );
};

export default P2_To_Do_List_Input_2;
