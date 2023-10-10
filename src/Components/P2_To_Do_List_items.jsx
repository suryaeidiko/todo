import React from "react";

function Todolist(props) {
  return (
    <>
      <form className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            value={props.item}
          />
        </div>
        <div className="col-auto">
          <i
            className="material-icons"
            style={{ fontSize: "30px", color: "red", marginBottom: "15px" }}
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          >
            delete
          </i>
        </div>
      </form>

    </>
  );
}

export default Todolist;
