import { useState } from "react";
import { ToDo } from "./ToDo";

export function AddTodo() {

    const [todos, setTodos] = useState([
        { title: 'Learn React', description: 'Understand React basics and components.' },
        { title: 'Build a Project', description: 'Create a simple to-do app with React.' },
        { title: 'Practice JavaScript', description: 'Solve problems on JS algorithms and data structures.' },
    ]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description) {
            const newTodo = { title, description };
            setTodos([...todos, newTodo]); // adding the new todo to the state;
            setTitle('');
            setDescription('')
        } else {
            alert('Please fill out both fields');
        }
    }



    return (
        <>

            {/* Form to add a new todo */}
            <h3>To-DO List</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" /> <br /> <br />
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" /> <br /><br />
                <button type="submit">Add Todo</button>
            </form>

            {/* Display the list of todos */}
            <div>
                {todos.map((todo, index) => (
                    <ToDo key={index} title={todo.title} description={todo.description} />
                ))}
            </div>

        </>
    )
}