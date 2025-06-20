import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import TimerPage from "./components/TimerPage";
import GlobalStyle from './GlobalStyle';
import Diary from "./components/Diary";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <h1>Todo List</h1>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todo/:id" element={<TodoDetail/>} />
        <Route path="/timer" element={<TimerPage/>} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </Router>
  );
}
