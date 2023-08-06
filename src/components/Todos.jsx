import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";


export function Todos() {

    const todos = useSelector(state => state.todos.todos);

    return (
        <div className="Todos">
            {
                todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />)
            }
        </div>
    )
}
