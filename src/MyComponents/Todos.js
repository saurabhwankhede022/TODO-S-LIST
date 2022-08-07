import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="text-center" style={myStyle}>
            <h3 className="my-3">ALL TODO'S LIST</h3>
            {props.todos.length === 0 ? "INITIALLY NO TODO'S TO DISPLAY" :
                props.todos.map((todo) => {
                    console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
