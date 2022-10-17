import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { tasks } from "./mock-data";

import { transformUrlPath } from "./utils";

import "./index.css";

function App() {
  const task = tasks.find((task) => task.status === "active");
  const path = transformUrlPath(task.title);

  return (
    <div className="container">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="task/:title" element={<Dashboard />} />
          <Route
            path="*"
            element={<Navigate to={`/task/${path}`} state={task.id} replace />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
