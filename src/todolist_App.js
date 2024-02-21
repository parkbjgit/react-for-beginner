import { useState } from "react";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] =useState([]);
    const onChange = (event) => setTodo(event.target.value);

    const onSubmit=(event)=>{
        event.preventDefault();
        if(todo===""){
            return;
        }
        setTodos((currentArray)=>[todo, ...currentArray]);
        setTodo("");
    }    
    console.log(todos);
    return <div>
        <h2>To do list ({todos.length})</h2>
        <form onSubmit={onSubmit}>
            <input value={todo} type="text" onChange={onChange}></input>
            <button>Add To Do</button>
        </form>
        <hr />
        <ul>
        {todos.map((item, index)=><li key={index}>{item}</li>)}
        </ul>
    </div>
}

export default App;
