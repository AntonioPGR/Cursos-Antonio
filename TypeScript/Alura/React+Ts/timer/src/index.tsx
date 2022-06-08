import React from "react";
import { createRoot } from 'react-dom/client';

// Components Import
import { Form } from "./components/form";
import { TaskProps } from "./components/task";
import { TaskList } from "./components/taskList";

// Returns the app Component
function App() {

  const [tasks, setTasks] = React.useState<TaskProps[]>([]);

  const onAddTaskSubmit = (subject:string, time:string) => {
    setTasks([...tasks, {name: subject, time: time}]);
  }

  return (
    <div>

      <Form onSubmit={onAddTaskSubmit}/>
      <TaskList tasks={tasks}/>

    </div>
  );
}

// Render the app into the DOM
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);