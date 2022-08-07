import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("TITLE OR DESCRIPTION CANNOT BE BLANK!!!!");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-2">
            <h3 className='text-center'>ADD TODOS IN LIST'S</h3>
            <form className='text-center' onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label my-3">TODO TITLE</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">TODO DESCRIPTION</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">ADD TODO</button>
            </form>
        </div>
    )
}
