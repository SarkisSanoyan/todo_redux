import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";


export function App() {
  
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  )
}
