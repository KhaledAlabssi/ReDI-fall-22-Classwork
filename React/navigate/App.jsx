import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Users from "./components/Users";
import Posts from "./components/Posts";
import UserPost from "./components/UserPost";
function App() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  function getUserPosts(e) {
    let data = posts.filter((i) => i.userId == e);
    setUserPosts((i) => data);
    console.log(e);
    navigate("/userPost")
  }

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((i) =>
      setUsers(i.data)
    );
    axios("https://jsonplaceholder.typicode.com/posts").then((i) =>
      setPosts(i.data)
    );
 
  }, []);

  return (
    <div className="app">
          <button><Link to={'/posts'}>Go to posts</Link></button>
          <button><Link to={'/userPost'}>Go to posts</Link></button>
        <Routes>
          <Route
            path="/"
            element={<Users users={users} getUserPosts={getUserPosts} />}
          />

          <Route path="/posts" element={<Posts posts={posts} />} />

          <Route
            path="/userPost"
            element={<UserPost userPosts={userPosts} />}
          />
        </Routes>
    </div>
  );
}

export default App;
