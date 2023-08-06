import { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";


export function AddTodo() {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({ title }));
        setTitle('');
    }

    return (
        <form className="AddTodo" onSubmit={submitHandler}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="submit" value="Add Todo" />
        </form>

    )
}
