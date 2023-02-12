import React, { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../Component/Navbar";

// To get the data from local storage
const getLocalStorageItem = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const TodoTwo = () => {
  const [input, setInput] = useState("");
  const [add, setAdd] = useState(getLocalStorageItem());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addTodo = () => {
    if (!input) {
    } else if (input && !toggleSubmit) {
      setAdd(
        add.map((ele) => {
          if (ele.id === isEditItem) {
            return { ...ele, name: input };
          }
          return ele;
        })
      );
      setToggleSubmit(true);
      setInput("");
      setIsEditItem(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: input };
      setAdd([...add, allInputData]);
      setInput("");
    }
  };

  // Delete One data
  const deleteHandler = (index) => {
    const updateItems = add.filter((ele) => {
      return index !== ele.id;
    });
    setAdd(updateItems);
  };
  const removeAllData = () => {
    setAdd([]);
  };

  //Add data to local storage

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(add));
  }, [add]);

  const editItem = (id) => {
    let newEditItem = add.find((ele) => {
      return ele.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setInput(newEditItem.name);
    setIsEditItem(id);
  };

  return (
    <>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          color: "lightblue",
          backgroundColor: "darkgrey",
        }}
      >
        TodoList Two
      </h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <label className="form-label">Enter Todo</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="form-control"
              name=""
              id=""
            />
            {toggleSubmit ? (
              <button onClick={addTodo} className="btn btn-success mt-2">
                Add Todo
              </button>
            ) : (
              <i
                className="bi bi-pencil-square"
                title="Edit Button"
                onClick={addTodo}
              />
            )}

            <button
              type="reset"
              className="btn btn-outline-danger mt-2"
              onClick={removeAllData}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
      <div>
        {add.map((ele) => {
          return (
            <div key={ele.id}>
              <li>
                {ele.name}
                <i
                  className="bi bi-trash-fill"
                  title="DeleteItem"
                  onClick={() => deleteHandler(ele.id)}
                />
                <i
                  className="bi bi-pencil-square"
                  title="Edit Button"
                  onClick={() => editItem(ele.id)}
                />
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoTwo;
