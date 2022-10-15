import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RegistrtationPage from "./pages/RegistrtationPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";
import Footer from "./components/Footer/index";
import "./app.css";
import TasksPage from "./pages/TasksPage";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<RegistrtationPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
