import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { text: task, completed: false }
    ]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <div className="todo-box">
        <h2 className="todo-title">Todo List</h2>

        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="todo-list">
          {tasks.map((t, index) => (
            <li
              key={index}
              className={`todo-item ${
                t.completed ? "done" : ""
              }`}
            >
              <label>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(index)}
                />
                <span className="checkmark"></span>
              </label>

              <span className="todo-text">{t.text}</span>

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
