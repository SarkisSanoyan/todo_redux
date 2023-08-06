import { useDispatch } from "react-redux";
import { doneTodo, removeTodo } from "../store/todoSlice";


export function TodoItem({ id, title, completed }) {

    const dispatch = useDispatch();

    return (
        <div className="TodoItem">
            <span>{title}</span>
            <input type="checkbox" checked={completed} onChange={() => dispatch(doneTodo({ id }))} />
            <button onClick={() => dispatch(removeTodo({ id }))}>Erase</button>
        </div>
    )
}
