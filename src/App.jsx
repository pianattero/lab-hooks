import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/screens/misc/Home/Home";
import Navbar from "./components/screens/misc/Navbar/Navbar";
import { PostsList } from "./components/screens/Posts/PostsList/PostsList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
