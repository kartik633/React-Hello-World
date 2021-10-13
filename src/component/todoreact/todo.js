import React, { useState, useEffect } from 'react';
import "./style.css";

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if(lists)
    {
        return JSON.parse(lists);
    }
    else
    {
        return [];
    } 
}

const Todo = () => {

    const [inputdata,SetInputdata] = useState("");
    const[items,setItems] = useState(getLocalData());
    const [isEditItem,setIsEditItem] = useState("");
    const [toggleButton,setToggleButton] = useState(false);

    const addItem = () =>{
        if(!inputdata){
            alert('plz fill the data');
        }
        else if(inputdata && toggleButton){
            setItems(
                items.map((curElem) => {
                    if(curElem.id === isEditItem)
                    {
                        return{...curElem, name:inputdata}
                    }

                    return curElem;
                })
            )

            SetInputdata("");
            setIsEditItem(null);
            setToggleButton(false);
        }
        else{ 
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name:inputdata,
            };
            setItems([...items, myNewInputData]);
            SetInputdata("");
        }
    }

    const editItem = (index) =>{
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })

        SetInputdata(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    }

    const deleteItem = (index) => {

        const updatedItems = items.filter((curElem) =>{
            return curElem.id !== index;
        });

        setItems(updatedItems);

    };

    const removeAll = () =>{
        setItems([]);
    };

    useEffect(() => {
        localStorage.setItem("mytodolist",JSON.stringify(items));
    },[items]);

    return (                
        <>
          <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add Your List Here </figcaption>
                </figure>  

                <div className="addItems">
                    <input type="text" placeholder="Add Items" className="form-control" value={inputdata} onChange={(event) => SetInputdata(event.target.value)} />
                    {toggleButton ? (<i className="far fa-edit" onClick={addItem}></i>) : 
                    (<i className="fa fa-plus" onClick={addItem}></i>)}
                </div>  

                <div className="showItems">

                    {items.map((curElem) =>{
                        return(
                            
                        <div className="eachItem" key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className="todo-btn">
                        <i className="far fa-edit" onClick={() => editItem(curElem.id)}></i>
                        <i className="far fa-trash-alt" onClick={() => deleteItem(curElem.id)} >


                        </i>
                        </div>
                        </div>

                        )
                    })}

                </div>

                <div className="showItems" >
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>Check List</span>
                    </button>
                </div> 
            </div> 
           </div>  
        </>
    )
}

export default Todo
