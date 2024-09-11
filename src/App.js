// import logo from "./logo.svg";
import "./App.css";
import Checkout from "./pages/checkout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TodoList from "./pages/todoList/TodoList";
// import TodoListRedux from "./pages/todoListRedux/todoListRedux";
import Home from "./pages/home";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/card/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
