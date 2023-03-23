import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/misc/Home/Home";
import Navbar from "./screens/misc/Navbar/Navbar";
import { PostsList } from "./screens/Posts/PostsList/PostsList";
import { PostDetail } from "./screens/Posts/PostDetail/PostDetail";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-bs-theme={theme} className="App text-body bg-body">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
